﻿var gShedule = {
    data: [
        [
            [], [], [], [], [], [], [], []
        ],
        [
            [], [], [], [], [], [], [], []
        ]
    ],
    rootTable: null,
    init: function (rootTableId) {
        this.rootTable = document.getElementById(rootTableId);
        for (var i = 0; i < 7; i++)
        {
            this.rootTable.rows[0].cells[0].appendChild(this.generateDayTable(0, i));
            this.rootTable.rows[0].cells[1].appendChild(this.generateDayTable(1, i));
        }
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
        
        div.appendChild( gHelper.createNode('div', [{ name: 'class', value: 'mini_tile_name' }], gConst.LOCALE.WEEK_DAYS[day]));
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
            var td = gHelper.createNode('td', [{ name: 'class', value: 'time_interval' }], interval);
            tr.appendChild(td);
            //subject
            var shedule = this.data[week].day;
            if (shedule && shedule.subject)
            {
                var subj = 'subject';
                if (shedule.type)
                    subj += ' ' + shedule.type;
                var td = gHelper.createNode('td', [{ name: 'class', value: subj }]);
                td.appendChild(document.createTextNode(shedule.subject));
                var more = shedule.instuctor + '<br>' + shedule.room + gConst.LOCALE.ROOM + shedule.building + gConst.LOCALE.BUILDING;
                td.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'more' }], more));
                tr.appendChild(td);
            }
            else
            {
                var td = gHelper.createNode('td', [{ name: 'class', value: 'subject none' }], gConst.LOCALE.NO_LESSON);
                td.appendChild(gHelper.createNode('div', [{name: 'class', value: 'more'}]));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
        /*<table class="shedule_item" cellspacing="10">
                                    <tr>
                                        <td colspan="2"><div class="mini_tile"><div class="mini_tile_name">ПН</div></div></td>
                                    </tr>
                                    <tr>
                                        <td class="time_interval">8:15<br>9:50</td>
                                        <td class="subject">Термодинамика
                                            <div class="more">
                                                Абрамов А.И.<br>212 ауд. 1 корпус
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="time_interval">9:50<br>11:35</td>
                                        <td class="subject none">Нет занятий
                                             <div class="more">
                                            </div>
                                        </td>
                                    </tr>
                                   <tr>
                                        <td class="time_interval">11:45<br>13:20</td>
                                        <td class="subject lab">Математика
                                            <div class="more">
                                                Абрамов А.И.<br>212 ауд. 1 корпус
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="time_interval">13:30<br>15:05</td>
                                        <td class="subject lecture">Математика
                                            <div class="more">
                                                Абрамов А.И.<br>212 ауд. 1 корпус
                                            </div>
                                        </td>
                                    </tr>
                                   <tr>
                                        <td class="time_interval">15:15<br>16:50</td>
                                        <td class="subject lecture">Математика
                                            <div class="more">
                                                Абрамов А.И.<br>212 ауд. 1 корпус
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="time_interval">17:00<br>18:35</td>
                                        <td class="subject">Математика
                                            <div class="more">
                                                Абрамов А.И.<br>212 ауд. 1 корпус
                                            </div>
                                        </td>
                                    </tr>
                                </table>*/
    }
};