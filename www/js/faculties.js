var gFacs = {
    table: null,
    init: function (root) {
        this.table = document.getElementById(root);
        for (var i = 0; i < gConst.FACS.length; i++)
        {
            this.table.rows[0].cells[0].appendChild(this.createFaculty(gConst.FACS[i]));
        }
    },
    createFaculty: function (data) {
        /*<div class="building">
                <div class="mini_tile campus"><div class="b_name">1</div></div>
                <div class="b_info">факультет<br><span class="b_info_address">Двигателей и летательных<br>аппаратов</span></div>
            </div>*/
        var root = gHelper.createNode('div', [{ name: 'class', value: 'building' }]);
        var campus = gHelper.createNode('div', [{ name: 'class', value: 'mini_tile campus' }]);
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_name' }], data.number);
        campus.appendChild(div);
        root.appendChild(campus);
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_info' }]);
        var str = (isNaN(parseInt(data.number))) ? gConst.LOCALE.INSTITUTE : gConst.LOCALE.FACULTY;
        div.appendChild(document.createTextNode(str));
        div.appendChild(document.createElement('br'));
        var span = gHelper.createNode('span', [{ name: 'class', value: 'b_info_address' }], data.name);
        div.appendChild(span);
        root.appendChild(div);
        root.onmousedown = gHelper.subjectMouseDown;
        root.onclick = function () {
            if (gFacs.table.rows[0].cells[1].children.length > 0)
                gFacs.table.rows[0].cells[1].removeChild(gFacs.table.rows[0].cells[1].children[0]);
            gFacs.table.rows[0].cells[1].appendChild(gFacs.showMoreInfo(data));
            $(document).swipeleft();
        };
        return root;
    },
    showMoreInfo: function (data) {
        var ret = gHelper.createNode('div', [{ name: 'class', value: 'b_more_info_page' }]);
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_number' }], data.number);
        ret.appendChild(div);
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_name_more' }]);
        var str = (isNaN(parseInt(data.number))) ? gConst.LOCALE.INSTITUTE : gConst.LOCALE.FACULTY;
        div.appendChild(document.createTextNode(str));
        div.appendChild(document.createElement('br'));
        var span = gHelper.createNode('div', [{ name: 'style', value: 'font-size: 16px; line-height: 15px;' }], data.name);
        div.appendChild(span);
        ret.appendChild(div);
        ret.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'clear' }]));

        //decanat
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_info_block' }]);
        div.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'b_info_header' }], gConst.LOCALE.DECANAT));
        div.appendChild(document.createTextNode(data.decan));
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createTextNode(data.address));
        if (data.tel && data.tel.length > 0)
        {
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createTextNode(gConst.LOCALE.TEL + ' '));
            for (var i = 0; i < data.tel.length; i++)
            {
                div.appendChild(gHelper.createNode('a', [{ name: 'href', value: 'tel:' + data.tel[i] }], data.tel[i]));
                div.appendChild(document.createTextNode('; '));
            }
        }
        ret.appendChild(div);

        //internal
        var div = gHelper.createNode('div', [{ name: 'class', value: 'b_info_block' }]);
        div.appendChild(gHelper.createNode('div', [{ name: 'class', value: 'b_info_header' }], gConst.LOCALE.EDU_INTERNAL));
        if (data.bachelor)
        {
            div.appendChild(document.createTextNode(gConst.LOCALE.BACHELOR));
            div.appendChild(document.createElement('br'));
            for (var i = 0; i < data.bachelor.length; i++)
            {
                div.appendChild(gHelper.createNode('span', [{ name: 'class', value: 'another_info' }], data.bachelor[i]));
                div.appendChild(document.createElement('br'));
            }
        }
        ret.appendChild(div);
        if (data.specialist)
        {
            div.appendChild(document.createTextNode(gConst.LOCALE.SPECIALIST));
            div.appendChild(document.createElement('br'));
            for (var i = 0; i < data.specialist.length; i++)
            {
                div.appendChild(gHelper.createNode('span', [{ name: 'class', value: 'another_info' }], data.specialist[i]));
                div.appendChild(document.createElement('br'));
            }
        }
        ret.appendChild(div);
        if (data.magister)
        {
            div.appendChild(document.createTextNode(gConst.LOCALE.MAGISTER));
            div.appendChild(document.createElement('br'));
            for (var i = 0; i < data.magister.length; i++)
            {
                div.appendChild(gHelper.createNode('span', [{ name: 'class', value: 'another_info' }], data.magister[i]));
                div.appendChild(document.createElement('br'));
            }
        }
        ret.appendChild(div);
        return ret;
        //external

        /*<div class="b_more_info_page">
        <div class="b_number">6</div>
        <div class="b_name_more">факультет<br /><div style="font-size: 16px; line-height: 15px;">летательных аппаратов и двигательных систем</div></div>
        <div class="clear"></div>
        <div class="b_info_block">
            <div class="b_info_header">Деканат</div>
            Декан Сергеев Петр Игорич<br>ул. Молодгвардейская<br>дом 236 литера "а"<br>тел. 225-12-56, 225-12-56
        </div>                      
        <div class="b_info_block">
            <div class="b_info_header">Что нужно?</div>
            Очная форма<br><span class="another_info">физика, химия, русский</span><br>
            Очно-заочная<br><span class="another_info">вступительные экзамены</span><br>
        </div>                     
            <div class="b_info_block">
            <div class="b_info_header">Очная форма</div>
            Специалитет<br><span class="another_info">043543 "Обработка металлов давлением"</span><br>
            Бакалавриат<br><span class="another_info">345364 "Троссировка крупногабаритных самолетов"</span><br>
        </div>
        <div class="b_info_block">
            <div class="b_info_header">Очно-заочная форма</div>
            Специалитет<br><span class="another_info">043543 "Обработка металлов давлением"</span><br>
            Бакалавриат<br><span class="another_info">345364 "Троссировка крупногабаритных самолетов"</span><br>
        </div>
    </div>*/
    }
};