var gHelper = {
    trace: function(msg)
    {
        if (gConst.debug)
            //alert(msg);
            console.log(msg);
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
    }
};