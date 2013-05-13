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
            var p = gHelper.createNode('p', [{ name: 'class', value: 'info' }], depart.leader);
            p.appendChild(document.createElement('br'));
            if (depart.address)
            {
                p.appendChild(document.createTextNode(gConst.LOCALE.ADDRESS + ': ' + depart.address));
                p.appendChild(document.createElement('br'));
            }
            if (depart.tel)
            {
                var text = gConst.LOCALE.TEL + ': ' + depart.tel[0];
                for (var j = 1; j < depart.tel.length; j++)
                    text += ', ' + depart.tel[j];
                p.appendChild(document.createTextNode(text));
                p.appendChild(document.createElement('br'));
            }
            if (depart.email)
            {
                var text = gConst.LOCALE.EMAIL + ': ' + depart.email[0];
                for (var j = 1; j < depart.email.length; j++)
                    text += ', ' + depart.email[j];
                p.appendChild(document.createTextNode(text));
                p.appendChild(document.createElement('br'));
            }
            p.onselectstart = gHelper.onselectstart;
            li.appendChild(p);

            ul.appendChild(li);
        }
        return ul;
    }
};