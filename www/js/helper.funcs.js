var gHelper = {
    newsRequestSent: false,
    newsNode: null,
    timeoutID: 0,
    trace: function(msg)
    {
        if (gConst.debug)
            //alert(msg);
            console.log(msg);
    },
    onselectstart: function() {
        return false;
    },
    inArray: function(val, arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++)
        {
            if (arr[i] == val)
                return true;
        }
        return false;
    },
    inArrayByMask: function (val, arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++)
        {
            if (arr[i].indexOf(val) > -1)
                return true;
        }
        return false;
    },
    sitesClick: function(event) {
        var div = event.currentTarget;
        var href = div.children[1].innerHTML;
        window.open(href, '_system');
    },
    subjectMouseDown: function (event, target) {
        var self = (target) ? target : this;
        self.style.transform = 'scale(0.95)';
        setTimeout(function (node) {
            node.style.transform = 'scale(1)';
        }, 200, self);
    },
    createNode: function (strName, arrAttr, innerHTML) {
        var node = document.createElement(strName);
        if (arrAttr)
        {
            for (var i = 0; i < arrAttr.length; i++)
            {
                node.setAttribute(arrAttr[i].name, arrAttr[i].value);
            }
        }
        if (innerHTML)
        {
            node.innerHTML = innerHTML;
        }
        node.onselectstart = function () { return false; };
        return node;
    },
    loadScript: function(src, callback, param) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback(param);
            }
        };
        (document.body || head).appendChild(s);
    },
    UrlParam: function (name, url) {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec((url) ? url : window.location.href);
        return results == null ? null : results[1] || 0;
    },
    getNews: function (event) {
        if (!gHelper.newsRequestSent)
        {
            var btn = event.currentTarget;
            btn.innerHTML = gConst.LOCALE.LOADING;
            gHelper.newsRequestSent = true;
            console.log('Sending');
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', 'http://www.ssau.ru/news/', true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4)
                {
                    clearTimeout(gHelper.timeoutID);
                    if (xmlhttp.status == 200)
                    {
                        gHelper.parseNews(xmlhttp.responseText);
                    }
                    console.log('Got response');
                    gHelper.newsRequestSent = false;
                    btn.innerText = gConst.LOCALE.REFRESH;
                }
            };
            xmlhttp.send(null);
            gHelper.timeoutID = setTimeout(function (btn) {
                alert(gConst.LOCALE.REQUEST_TIMEOUT);
                gHelper.newsRequestSent = false;
                btn.innerText = gConst.LOCALE.REFRESH;
            }, gConst.NEWS_TIMEOUT, btn);
        }
    },
    updateNews: function (data) {
        if (this.newsNode == null)
            this.newsNode = document.getElementById('indexNewsCell');
        while (this.newsNode.children.length > 1)
        {
            this.newsNode.removeChild( this.newsNode.children[1] );
        }

        for (var i in data)
        {
            var root = this.createNode('div', [{ name: 'class', value: 'new' }]);
            var div = this.createNode('div', [{ name: 'class', value: 'new_date' }], data[i].date);
            root.appendChild(div);
            var div = this.createNode('div', [{ name: 'class', value: 'new_h' }], data[i].title);
            root.appendChild(div);
            root.HREF = data[i].href;
            root.onmousedown = gHelper.subjectMouseDown;
            root.onclick = function (event) {
                gHelper.subjectMouseDown(event, event.currentTarget);
                window.open('http://ssau.ru' + event.currentTarget.HREF, '_system');
            };
            this.newsNode.appendChild(root);
        }
    },
    parseNews: function (html) {
        var from = html.indexOf('<div id="cont_text"><br><ul>'),
            to = html.indexOf('</ul>', from),
            ul = html.substring(from, to),
            root = document.createElement('div');
        root.innerHTML = ul;
        var news = root.getElementsByClassName('news_block_si'),
            len = Math.min(news.length, gConst.NEWS_COUNT),
            ret = [],
            parse_record = function (root) {
                var date = root.getElementsByClassName('n_date_si'),
                    content = root.getElementsByClassName('n_text_si'), href = '', title = '';
                if (date.length > 0)
                {
                    date = date.item(0).textContent;
                }
                if (content.length > 0)
                {
                    title = content.item(0).childNodes[0].textContent;
                    href = content.item(0).getElementsByTagName('a');
                    if (href.length > 0)
                    {
                        href = href.item(0).getAttribute('href');
                    }
                }
                return {'title': title, 'href': href, 'date': date};
            };
        
        for (var i = 0; i < len; i++)
        {
            ret.push( parse_record(news.item(i)) );
        }
        
        /*var liStart = 0;
        var liEnd = 0;
        var spanText = '<span style="color:#6aa033">';
        var ret = [];
        for (var i = 0; i < gConst.NEWS_COUNT; i++)
        {
            liStart = ul.indexOf('<li>', liEnd);
            liEnd = ul.indexOf('</li>', liStart);
            var li = ul.substring(liStart, liEnd);
            var span = li.substring(li.indexOf(spanText) + spanText.length, li.indexOf('</span>'));
            var hrefStart = li.indexOf('<a href=') + '<a href='.length;
            var hrefEnd = li.indexOf('>', hrefStart);
            var href = li.substring(hrefStart, hrefEnd);
            var expr = /\/(\w+)\/(\w+)\//;
            href = expr.exec(href);
            href = href[0];
            var title = li.substring(hrefEnd+1, li.indexOf('</a>', hrefEnd));
            var date = span.substring(span.indexOf(', ')+2, span.length);
            ret[i] = {'title': title, 'href': href, 'date': date};
        }*/
        gPhonegap.DATA.updateStorage(gConst.PATHS.NEWS, ret);
        gHelper.updateNews(ret);
    }
};