var gCampus = {
    root: null,
    table: null,
    init: function (rootId) {
        this.root = document.getElementById(rootId);
        this.table = this.root.getElementsByTagName('table');
        this.table = this.table[0];
        for (var i = 0; i < gConst.CAMPUS.length; i++)
        {
            this.table.rows[0].cells[0].appendChild( this.createBuilding(gConst.CAMPUS[i]) );
        }
    },
    createBuilding: function (data) {
        var div = gHelper.createNode('div', [{ name: 'class', value: 'building' }]);
        var tile = gHelper.createNode('div', [{ name: 'class', value: 'mini_tile campus' }]);
        var name = gHelper.createNode('div', [{ name: 'class', value: 'b_name' }], (data.name.length < 3) ? data.name : '');
        tile.appendChild(name);
        div.appendChild(tile);
        var info = gHelper.createNode('div', [{ name: 'class', value: 'b_info' }], gConst.LOCALE.CAMPUS[data.type]);
        info.appendChild(gHelper.createNode('br'));
        var address = data.address.street + '<br>' + gConst.LOCALE.BUILDING + ' ' + data.address.house;
        if (data.address.letter.length > 0)
        {
            address += ' ' + gConst.LOCALE.BUILDING_LETTER + '"' + data.address.letter + '"';
        }
        var span = gHelper.createNode('span', [{ name: 'class', value: 'b_info_address' }], address);
        info.appendChild(span);
        div.appendChild(info);
        div.onclick = function () {
            if (gCampus.table.rows[0].cells[1].children.length > 0)
                gCampus.table.rows[0].cells[1].removeChild(gCampus.table.rows[0].cells[1].children[0]);
            gCampus.table.rows[0].cells[1].appendChild(gCampus.showMoreInfo(data));
            $(document).swipeleft();
        };
        div.onmousedown = gHelper.subjectMouseDown;
        return div;
    },

    showMoreInfo: function(data) {
        var root = gHelper.createNode('div', [{ name: 'class', value: 'b_more_info_page' }]);

        var head = gHelper.createNode('div', [{ name: 'class', value: 'b_number' }], data.name);
        root.appendChild(head);
        //need to change all ' ' by <br>, coz of design
        var head = gHelper.createNode('div', [{ name: 'class', value: 'b_name_more' }], gConst.LOCALE.CAMPUS[data.type].replace(/ /g, '<br>'));
        root.appendChild(head);
        root.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'clear' }]));

        //address + phone
        var addrNode = gHelper.createNode('div', [{ name: 'class', value: 'b_address' }]);
        var address = data.address.street + '<br>' + gConst.LOCALE.BUILDING + ' ' + data.address.house;
        if (data.address.letter.length > 0)
        {
            address += ' ' + gConst.LOCALE.BUILDING_LETTER + ' "' + data.address.letter + '"';
        }
        if (data.tel && data.tel.length > 0)
        {
            address += '<br>' + gConst.LOCALE.TEL + ' ' + data.tel[0];
            for (var i = 1; i < data.tel.length; i++)
                address += ', ' + data.tel[i];
        }
        addrNode.innerHTML += address;
        root.appendChild(addrNode);

        //sub-info CATHEDRAS
        if (data.cathedrals && data.cathedrals.length > 0)
        {
            var subNode = gHelper.createNode('div', [{ name: 'class', value: 'b_info_block' }]);
            subNode.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'b_info_header' }], gConst.LOCALE.CATHEDRAL));
            subNode.appendChild(document.createTextNode(data.cathedrals[0]));
            for (var i = 1; i < data.cathedrals.length; i++)
            {
                subNode.appendChild(gHelper.createNode('br'));
                subNode.appendChild(document.createTextNode(data.cathedrals[i]));
            }
            root.appendChild(subNode);
        }

        //sub-info DECANS
        if (data.decans && data.decans.length > 0)
        {
            var subNode = gHelper.createNode('div', [{ name: 'class', value: 'b_info_block' }]);
            subNode.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'b_info_header' }], gConst.LOCALE.DECANS));
            subNode.appendChild(document.createTextNode(data.decans[0]));
            for (var i = 1; i < data.decans.length; i++)
            {
                subNode.appendChild(gHelper.createNode('br'));
                subNode.appendChild(document.createTextNode(data.decans[i]));
            }
            root.appendChild(subNode);
        }

        if (data.transport && data.transport.length > 0)
        {
            var subNode = gHelper.createNode('div', [{ name: 'class', value: 'b_info_block' }]);
            subNode.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'b_info_header' }], gConst.LOCALE.HOWTO_GET_THERE));
            for (var i = 0; i < data.transport.length; i++)
            {
                var text = gConst.LOCALE.BUS_STOP + ' "' + data.transport[i].stopName + '"';
                subNode.appendChild(document.createTextNode(text));
                subNode.appendChild(gHelper.createNode('br'));
                var span = gHelper.createNode('span', [{ name: 'class', value: 'another_info' }]);
                var spanInner = '';
                if (data.transport[i].bus && data.transport[i].bus.length > 0)
                {
                    spanInner += gConst.LOCALE.BUSES + ': ' + data.transport[i].bus[0];
                    for (var j = 1; j < data.transport[i].bus.length; j++)
                        spanInner += ', ' + data.transport[i].bus[j];
                }
                if (data.transport[i].trollbus && data.transport[i].trollbus.length > 0)
                {
                    if (spanInner.length > 0)
                        spanInner += '<br>';
                    spanInner += gConst.LOCALE.TROLLBUSES + ': ' + data.transport[i].trollbus[0];
                    for (var j = 1; j < data.transport[i].trollbus.length; j++)
                        spanInner += ', ' + data.transport[i].trollbus[j];
                }
                if (data.transport[i].tram && data.transport[i].tram.length > 0)
                {
                    if (spanInner.length > 0)
                        spanInner += '<br>';
                    spanInner += gConst.LOCALE.TRAMS + ': ' + data.transport[i].tram[0];
                    for (var j = 1; j < data.transport[i].tram.length; j++)
                        spanInner += ', ' + data.transport[i].tram[j];
                }
                if (data.transport[i].taxi && data.transport[i].taxi.length > 0)
                {
                    if (spanInner.length > 0)
                        spanInner += '<br>';
                    spanInner += gConst.LOCALE.TAXI + ': ' + data.transport[i].tram[0];
                    for (var j = 1; j < data.transport[i].taxi.length; j++)
                        spanInner += ', ' + data.transport[i].taxi[j];
                }
                span.innerHTML = spanInner;
                subNode.appendChild(span);
                subNode.appendChild(gHelper.createNode('br'));
                root.appendChild(subNode);
            }
        }
        return root;
    }
};