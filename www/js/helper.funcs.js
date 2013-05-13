﻿var gHelper = {
    newsRequestSent: false,
    newsNode: null,
    trace: function(msg)
    {
        if (gConst.debug)
            //alert(msg);
            console.log(msg);
    },
    onselectstart: function() {
        return false;
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
    getNews: function () {
        if (!gHelper.newsRequestSent)
        {
            gHelper.newsRequestSent = true;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', 'http://www.ssau.ru/news/', true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4)
                {
                    if (xmlhttp.status == 200)
                    {
                        gHelper.parseNews(xmlhttp.responseText);
                    }
                    gHelper.newsRequestSent = false;
                }
            };
            xmlhttp.send(null);
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
            root.onclick = function (event) {
                gHelper.subjectMouseDown(event, event.currentTarget);
                window.open('http://ssau.ru/' + event.currentTarget.HREF, '_system');
            };
            this.newsNode.appendChild(root);
        }
    },
    parseNews: function (html) {
        var from = html.indexOf('<div id="cont_text"><br><ul>');
        var to = html.indexOf('</ul>', from);
        var ul = html.substring(from, to);
        var liStart = 0;
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
        }
        gPhonegap.DATA.updateStorage(gConst.PATHS.NEWS, ret);
        gHelper.updateNews(ret);
    }
};