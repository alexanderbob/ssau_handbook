var gConst = {
    MYSQL_DB_NAME: 'SSAUHandbook',
    MYSQL_DB_SIZE: 200000,
    MYSQL_DB_VER: '1.0',
    MYSQL_TABLE_STAFF_NAME: 'ssau_staff',

    STAFF_LETTERS: [
        "а", "б", "в", "г", "д", "е", "ж",
        "з", "и", "к", "л", "м", "н", "о",
        "п", "р", "с", "т", "у", "ф", "х",
        "ц", "ч", "ш", "щ", "э", "ю", "я"
    ],
    STAFF_TRANSLIT: [
		'a', 'b', 'v', 'g', 'd', 'e', 'zh',
		'z', 'i', 'k', 'l', 'm', 'n', 'o',
		'p', 'r', 's', 't', 'u', 'f', 'h',
		'ts','ch','sh','sch','ye','yu','ya'
    ],
    STAFF_SEARCH_TYPE_TILE: 1,
    STAFF_SEARCH_TYPE_STR: 2,
    STAFF_SEARCH_MIN_LEN: 3,
    GLOBAL_STAFF_DATA: [],

    SHEDULE_LECTURE: 0,
    SHEDULE_PRACTICE: 1,
    SHEDULE_LAB: 2,
    SHEDULE_NIR: 3,
    SHEDULE_COURSE: 4,
    SHEDULE_UNK: 5,
    SHEDULE_INTERVALS: [
        { start: '8:15', end: '9:50' },
        { start: '10:00', end: '11:35' },
        { start: '11:45', end: '13:20' },
        { start: '13:30', end: '15:05' },
        { start: '15:15', end: '17:00' }
    ],
    SHEDULE_TYPE_CLASSES: {},
    ERR_NO_SUBJECT: 1,
    ERR_NO_INSTRUCTOR: 2,
    ERR_NO_ROOM: 3,

    PATHS: {
        STAFF: 'JSON/',
        SHEDULE: 'SHEDULE'
    },
    debug: true,
    LOCALE: {
        IS_MAIN: 'основное',
        NO_TEXT_ENTERED: 'Пожалуйста, введите текст в поле ввода',
        THREE_CHARS_MIN: 'Введите минимум три символа',
        WEEK_DAYS: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        ROOM: 'ауд.',
        BUILDING: 'корп.',
        NO_LESSON: 'Нет занятий',
        LESSON_TYPE: 'Тип занятия',
        SHEDULE_TYPE: {},
        ERROR: {}
    }
};

gConst.LOCALE.ERROR[gConst.ERR_NO_SUBJECT] = 'Не введено имя предмета';
gConst.LOCALE.ERROR[gConst.ERR_NO_INSTRUCTOR] = 'Не введено имя преподавателя';
gConst.LOCALE.ERROR[gConst.ERR_NO_ROOM] = 'Не введена аудитория';

gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_UNK] = 'Другое';
gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_LAB] = 'Лабораторная';
gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_LECTURE] = 'Лекция';
gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_PRACTICE] = 'Практика';
gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_NIR] = 'НИР';
gConst.LOCALE.SHEDULE_TYPE[gConst.SHEDULE_COURSE] = 'Курсовая';

gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_LECTURE] = ' lecture';
gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_LAB] = ' lab';
gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_PRACTICE] = ' practice';
gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_UNK] = '';
gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_NIR] = ' srw';
gConst.SHEDULE_TYPE_CLASSES[gConst.SHEDULE_COURSE] = ' course';

gConst.SHEDULE_STRUCTURE = function () {
    var ret = {};
    for (var w = 0; w < 2; w++)
    {
        ret[w] = {};
        for (var d = 0; d < gConst.LOCALE.WEEK_DAYS.length; d++)
        {
            ret[w][d] = {};
            for (var s = 0; s < gConst.SHEDULE_INTERVALS.length; s++)
            {
                ret[w][d][s] = {
                    subject: '',
                    instructor: '',
                    room: '',
                    building: '',
                    type: ''
                };
            }
        }
    }
    return ret;
};