var gSheduleEdit = {
    day: 0,
    week: 0,
    index: 0,
    params: null,
    form: null,
    instructors: [],
    subjects: [],
    init: function () {
        this.instructors = this.collectSheduleData('instructor');
        this.subjects = this.collectSheduleData('subject');
        this.params = gShedule.data[this.week][this.day][this.index];
        this.form = document.getElementById('sheduleEditForm');
        this.form.subject.value = this.params.subject;
        this.form.teacher.value = this.params.instructor;
        this.form.auditore.value = this.params.room;
        this.form.corp.value = this.params.building;
        var label = gHelper.createNode('label', [
            { name: 'for', value: 'select-choice-a' },
            { name: 'class', value: 'select'}
        ], gConst.LOCALE.LESSON_TYPE + ':');
        this.form.appendChild(label);
        this.form.appendChild(this.createTypeSelect());
        this.form['select-choice-a'].value = this.params.type;
    },
    createTypeSelect: function () {
        var select = gHelper.createNode('select', [{name: 'name', value: 'select-choice-a'}]);
        for (var key in gConst.LOCALE.SHEDULE_TYPE)
        {
            var params = [{ name: 'value', value: key }];
            var option = gHelper.createNode('option', params, gConst.LOCALE.SHEDULE_TYPE[key]);
            select.appendChild(option);
        }
        return select;
    },
    collectSheduleData: function (key) {
        var len = 0;
        var ret = [];
        var days = gConst.LOCALE.WEEK_DAYS.length;
        for (var w = 0; w < 2; w++)
        {
            for (var d = 0; d < days; d++)
            {
                for (var i = 0; i < gConst.SHEDULE_INTERVALS.length; i++)
                {
                    if (gShedule.data[w][d][i][key].length > 0 && ret.indexOf(gShedule.data[w][d][i][key]) == -1)
                    {
                        ret[len++] = gShedule.data[w][d][i][key];
                    }
                }
            }
        }
        return ret;
    },
    acceptPressed: function () {
        var code = this.verifyForm();
        if (code != 0)
        {
            alert(gConst.LOCALE.ERROR[code]);
            return;
        }
        var data = {
            'subject': gSheduleEdit.form.subject.value.trim(),
            'instructor': gSheduleEdit.form.teacher.value.trim(),
            'room': gSheduleEdit.form.auditore.value.trim(),
            'building': gSheduleEdit.form.corp.value.trim(),
            'type': gSheduleEdit.form['select-choice-a'].value
        };
        gShedule.updateShedule(this.week, this.day, this.index, data);
        this.returnBack();
    },
    returnBack: function() {
        history.go(-1);
    },
    clearShedule: function () {
        if (confirm(gConst.LOCALE.CLEAR_SHEDULE_CONFIRM))
        {
            var data = {
                'subject': '',
                'instructor': '',
                'room': '',
                'building': '',
                'type': ''
            };
            gShedule.updateShedule(this.week, this.day, this.index, data);
            this.returnBack();
        }
    },
    verifyForm: function () {
        if (this.form.subject.value.trim().length == 0)
        {
            return gConst.ERR_NO_SUBJECT;
        }
        if (this.form.teacher.value.trim().length == 0)
        {
            return gConst.ERR_NO_INSTRUCTOR;
        }
        if (this.form.auditore.value.trim().length == 0)
        {
            return gConst.ERR_NO_ROOM;
        }
        return 0;
    }
};