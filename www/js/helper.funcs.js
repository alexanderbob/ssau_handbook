var gHelper = {
    trace: function(msg)
    {
        if (gConst.debug)
            alert(msg);
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
    }
};