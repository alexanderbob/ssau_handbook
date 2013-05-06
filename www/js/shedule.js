var gShedule = {
    data: gConst.SHEDULE_STRUCTURE,
    rootTable: null,
    init: function (rootTableId) {
        this.rootTable = document.getElementById(rootTableId);
        for (var i = 0; i < 7; i++)
        {
            this.rootTable.appendChild(this.createNewRow());
            this.rootTable.rows[i].cells[0].appendChild(this.generateDayTable(0, i));
            this.rootTable.rows[i].cells[1].appendChild(this.generateDayTable(1, i));
        }
    },
    subjectMouseDown: function() {
        this.style.transform = 'scale(0.95)';
        var self = this;
        setTimeout(function (node) {
            node.style.transform = 'scale(1)';
        }, 200, self);
    },
    subjectClick: function () {
        gSheduleEdit.day = this.DAY;
        gSheduleEdit.week = this.WEEK;
        gSheduleEdit.index = this.INDEX;
        $.mobile.changePage("shedule_edit.html", {
            transition: "pop",
            reverse: false,
            changeHash: true
        });
    },
    createNewRow: function() {
        var tr = gHelper.createNode('tr');
        var td = gHelper.createNode('td', [{ name: 'style', value: 'width: 50%; vertical-align: top' }]);
        tr.appendChild(td);
        tr.appendChild( gHelper.createNode('td', [{ name: 'style', value: 'vertical-align: top' }]) );
        return tr;
    },
    updateShedule: function(week, day, index, data)
    {
        this.data[week][day][index] = data;
        gPhonegap.DATA.updateStorage(gConst.PATHS.SHEDULE, this.data);
    },
    fixStringWidth: function (str) {
        var arr = str.split(' ');
        var ret = '';
        for (var i = 0; i < arr.length; i++)
        {
            if (arr[i].length > gConst.SHEDULE_MAX_WORD_LEN)
            {
                arr[i] = arr[i].substring(0, gConst.SHEDULE_MAX_WORD_LEN - 1);
                arr[i] += '.';
            }
            ret = ret + arr[i] + ' ';
        }
        //delete last ' '
        ret = ret.substring(0, ret.length - 1);
        return ret;
    },
    //week - 0 when even, 1 when odd
    generateDayTable: function (week, day) {
        var table = gHelper.createNode('table', [{ name: 'class', value: 'shedule_item' },
                                                 { name: 'cellspacing', value: 10 }
        ]);

        //day header
        var tr = gHelper.createNode('tr');
        var td = gHelper.createNode('td', [{ name: 'colspan', value: 2 }]);
        var div = gHelper.createNode('div', [{ name: 'class', value: 'mini_tile' }]);
        
        div.appendChild(gHelper.createNode('div', [
            { name: 'class', value: 'mini_tile_name' },
            { name: 'onselectstart', value: 'return false;' }
        ], gConst.LOCALE.WEEK_DAYS[day]));
        td.appendChild(div);
        tr.appendChild(td);
        table.appendChild(tr);
        var len = gConst.SHEDULE_INTERVALS.length;
        for (var i = 0; i < len; i++)
        {
            //single lesson
            var tr = gHelper.createNode('tr');
            //time interval
            var interval = gConst.SHEDULE_INTERVALS[i].start + '<br>' + gConst.SHEDULE_INTERVALS[i].end;
            var td = gHelper.createNode('td', [
                { name: 'class', value: 'time_interval' },
                {name: 'onselectstart', value: 'return false'}
            ], interval);
            tr.appendChild(td);
            //subject
            var shedule = this.data[week][day][i];
            if (shedule && shedule.subject)
            {
                var subj = 'subject';
                if (shedule.type)
                    subj += gConst.SHEDULE_TYPE_CLASSES[shedule.type];
                var td = gHelper.createNode('td', [
                    { name: 'class', value: subj },
                    { name: 'onselectstart', value: 'return false' }
                ]);
                td.appendChild(document.createTextNode( this.fixStringWidth(shedule.subject) ));
                var more = shedule.instructor + '<br>';
                if (shedule.room.length > 0)
                    more += shedule.room + ' ' + gConst.LOCALE.ROOM;
                if (shedule.building.length > 0)
                    more += ' ' + shedule.building + ' ' + gConst.LOCALE.BUILDING;
                td.appendChild(gHelper.createNode('div', [
                    { name: 'class', value: 'more' },
                    { name: 'onselectstart', value: 'return false' }
                ], more));
            }
            else
            {
                var td = gHelper.createNode('td', [
                    { name: 'class', value: 'subject none' },
                    { name: 'onselectstart', value: 'return false' }
                ], gConst.LOCALE.NO_LESSON);
                td.appendChild(gHelper.createNode('div', [{name: 'class', value: 'more'}]));
                tr.appendChild(td);
            }
            td.WEEK = week;
            td.DAY = day;
            td.INDEX = i;
            td.onclick = gShedule.subjectClick;
            td.onmousedown = gShedule.subjectMouseDown;
            tr.appendChild(td);
            table.appendChild(tr);
        }
        return table;
    }
};