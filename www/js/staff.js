var gStaff = {
    initialized: false,
    firstPage: null,
    secondPage: null,
    alphabet: [ "а", "б", "в", "г", "д", "е", "ё", "ж", "з",
                "и", "й", "к", "л", "м", "н", "о", "п", "р",
                "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ",
                "э", "ю", "я"
    ],
    init: function (firstPageId, secondPageId) {
        if (!this.initialized)
        {
            this.firstPage = document.getElementById(firstPageId);
            this.secondPage = document.getElementById(secondPageId);
            var len = this.alphabet.length;
            for (var i = 0; i < len; i++)
            {
                this.firstPage.appendChild(this.createCharTile(this.alphabet[i]));
            }
            this.initialized = true;
        }
    },
    renderFoundResult: function (result) {
        this.clearSecondPage();
        if (result == null)
        {
            gHelper.trace('No data found');
            return;
        }
        var curChar = 0;
        var len = result.rows.length;
        for (var i = 0; i < len; i++)
        {
            if (curChar != result[i].name[0])
            {
                curChar = result[i].name[0];
                this.secondPage.appendChild( this.createSecondPageCharHeader(curChar) );
            }
            this.secondPage.appendChild( this.createStaffDetail(result[i]) );
        }
    },
    searchByTile: function(searchStr) {
        gPhonegap.SQL.dbSearchStaff(searchStr, gStaff.renderFoundResult, gConst.STAFF_SEARCH_TYPE_TILE);
    },
    clearSecondPage: function() {
        while (this.secondPage.children.length > 0)
            this.secondPage.removeChild(0);
    },
    createSecondPageCharHeader: function (innerChar) {
        var attrs = [   { name: 'class', value: 'ui-index' },
                        { name: 'data-role', value: 'list-divider' }
        ];
        var li = gHelper.createNode('li', attrs);
        li.appendChild( document.createTextNode(innerChar) );
        return li;
    },
    createCharTile: function(innerChar) {
        var node = gHelper.createNode('div', [{ name: 'class', value: 'mini_tile' }]);
        node.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'mini_tile_name' }], innerChar));
        node.SEARCH_STR = innerChar;
        node.onclick = function () {
            gStaff.searchByTile(this.SEARCH_STR);
        };
        return node;
    },
    createStaffDetail: function (data) {
        var li = gHelper.createNode('li');
        var p = gHelper.createNode('p');
        p.appendChild(gHelper.createNode('h5', null, data.name));
        li.appendChild(p);
        for (var i = 0; i < data.departs.length; i++)
        {
            var p = gHelper.createNode('p', [{ name: 'class', value: 'info' }], data.departs[i].name);
            if (data.departs[i].isMain)
            {
                p.appendChild( document.createTextNode(' - ' + gConst.LOCALE.IS_MAIN) );
            }
            p.appendChild(gHelper.createNode('br'));
            p.appendChild(document.createTextNode(data.departs[i].occup));
            li.appendChild(p);
        }
        return li;
    }
};