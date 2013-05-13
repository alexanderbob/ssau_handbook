var gDepartments = {
    root: null,
    init: function (root) {
        this.root = document.getElementById(root);
        for (var department in gConst.DEPARTMENTS)
        {
            if (department !== 'undefined')
                this.root.appendChild(this.createDepartment(gConst.DEPARTMENTS[department]));
        }
    },
    createDepartment: function (data) {
        var ul = gHelper.createNode('ul', [{ name: 'data-role', value: 'listview' },
                                           { name: 'data-inset', value: 'true' },
                                           { name: 'style', value: 'margin-top: 0;' }
        ]);
        var li = gHelper.createNode('li', [{ name: 'class', value: 'ui-index' },
                                           { name: 'data-role', value: 'list-divider' }/*,
                                           { name: 'style', value: 'width: initial;' }*/
        ], data.number);
        ul.appendChild(li);
        for (var i in data.deps)
        {
            var depart = data.deps[i];
            var li = gHelper.createNode('li');
            var p = gHelper.createNode('p', [{ name: 'style', value: 'word-wrap: hyphenate; text-overflow: initial;' }]);
            var h = gHelper.createNode('h5', [
                { name: 'style', value: 'word-wrap: hyphenate; text-overflow: initial;' }
            ], depart.nameHTML);
            p.appendChild(h);
            p.onselectstart = gHelper.onselectstart;
            li.appendChild(p);
            var p = gHelper.createNode('p', [{ name: 'class', value: 'info' }], (depart.leader) ? depart.leader : '');
            p.appendChild(document.createElement('br'));
            if (depart.address)
            {
                p.appendChild(document.createTextNode(gConst.LOCALE.ADDRESS + ': ' + depart.address));
                p.appendChild(document.createElement('br'));
            }
            if (depart.tel)
            {
                p.appendChild(document.createTextNode(gConst.LOCALE.TEL + ' '));
                for (var i = 0; i < depart.tel.length; i++)
                {
                    p.appendChild(gHelper.createNode('a', [{ name: 'href', value: 'tel:' + depart.tel[i] }], depart.tel[i]));
                    p.appendChild(document.createTextNode('; '));
                }
                p.appendChild(document.createElement('br'));
            }
            if (depart.email)
            {
                p.appendChild(document.createTextNode(gConst.LOCALE.EMAIL + ': '));
                for (var j = 0; j < depart.email.length; j++)
                {
                    var a = gHelper.createNode('a', [{ name: 'href', value: 'mailto:' + depart.email[j] }]);
                    a.appendChild(document.createTextNode(depart.email[j]));
                    p.appendChild(a);
                }
                p.appendChild(document.createElement('br'));
            }
            p.onselectstart = gHelper.onselectstart;
            li.appendChild(p);

            ul.appendChild(li);
        }
        return ul;
    }
};