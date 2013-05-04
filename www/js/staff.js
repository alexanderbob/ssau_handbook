var gStaff = {
    initialized: false,
    firstPage: null,
    secondPage: null,
    staffResNode: null,
    init: function (firstPageId, secondPageId) {
        if (!this.initialized)
        {
            this.firstPage = document.getElementById(firstPageId);
            this.secondPage = document.getElementById(secondPageId);
            this.staffResNode = this.secondPage.children[0].children[0];
            var len = gConst.STAFF_LETTERS.length;
            for (var i = 0; i < len; i++)
            {
                this.firstPage.appendChild(this.createCharTile(i));
            }
            //this.initialized = true;
        }
    },
    renderFoundResult: function (result) {
        gStaff.clearSecondPage();
        if (result == null)
        {
            gHelper.trace('No data found');
            return;
        }
        var curChar = 0;
        var len = result.length;
        for (var i = 0; i < len; i++)
        {
            if (curChar != result[i].name[0])
            {
                curChar = result[i].name[0];
                gStaff.staffResNode.appendChild(gStaff.createSecondPageCharHeader(curChar.toLowerCase()));
            }
            gStaff.staffResNode.appendChild(gStaff.createStaffDetail(result[i]));
        }
    },
    searchByTile: function(searchStr) {
        gPhonegap.DATA.searchStaff(searchStr, gStaff.renderFoundResult, gConst.STAFF_SEARCH_TYPE_TILE);
    },
    clearSecondPage: function() {
        while (this.staffResNode.children.length > 0)
            this.staffResNode.removeChild( this.staffResNode.children[0] );
    },
    createSecondPageCharHeader: function (innerChar) {
        var attrs = [{ name: 'class', value: 'ui-index ui-li ui-li-divider ui-bar-b ui-corner-top' },
                     { name: 'data-role', value: 'list-divider' }
        ];
        var li = gHelper.createNode('li', attrs);
        li.appendChild( document.createTextNode(innerChar) );
        return li;
    },
    createCharTile: function(index) {
        var node = gHelper.createNode('div', [{ name: 'class', value: 'mini_tile' }]);
        node.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'mini_tile_name' }], gConst.STAFF_LETTERS[index]));
        node.SEARCH_STR = gConst.STAFF_TRANSLIT[index];
        node.onclick = function () {
            gStaff.searchByTile(this.SEARCH_STR);
        };
        return node;
    },
    createStaffDetail: function (data) {
        var li = gHelper.createNode('li', [{name: 'class', value: 'ui-li ui-li-static ui-btn-up-a'}]);
        li.appendChild(gHelper.createNode('h5', [{ name: 'class', value: 'ui-li-heading' }], data.name));
        for (var i = 0; i < data.departs.length; i++)
        {
            var p = gHelper.createNode('p', [{ name: 'class', value: 'info ui-li-desc' }], data.departs[i].name);
            p.appendChild(gHelper.createNode('br'));
            p.appendChild(document.createTextNode(data.departs[i].occup));
            if (data.departs[i].isMain)
            {
                p.appendChild(document.createTextNode(' - ' + gConst.LOCALE.IS_MAIN));
            }
            li.appendChild(p);
        }
        return li;
    }
};