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
    //init in JSON/*.js files, loaded async from index.js when device is ready
    GLOBAL_STAFF_DATA: [],

    SHEDULE_MAX_WORD_LEN: 13,
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
        { start: '15:15', end: '16:50' },
        { start: '17:00', end: '18:35' }
    ],
    //init below
    SHEDULE_TYPE_CLASSES: {},
    ERR_NO_SUBJECT: 1,
    ERR_NO_INSTRUCTOR: 2,
    ERR_NO_ROOM: 3,

    CAMPUS_TYPE_TRAINING: 1,
    CAMPUS_TYPE_SPORT: 2,
    CAMPUS_TYPE_SCIENCE: 3,
    //init below
    CAMPUS: [],

    PATHS: {
        STAFF: 'JSON/',
        SHEDULE: 'SHEDULE'
    },
    debug: true,
    LOCALE: {
        BUILDING: 'дом',
        BUILDING_LETTER: 'литера',
        TEL: 'тел.',
        IS_MAIN: 'основное',
        CATHEDRAL: 'Кафедра',
        DECANS: 'Деканат',
        HOWTO_GET_THERE: 'Как проехать',
        BUS_STOP: 'остановка',
        BUSES: 'Автобусы',
        TROLLBUSES: 'Троллейбусы',
        TRAMS: 'Трамваи',
        TAXI: 'Марш. такси',
        NO_TEXT_ENTERED: 'Пожалуйста, введите текст в поле ввода',
        THREE_CHARS_MIN: 'Введите минимум три символа',
        WEEK_DAYS: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        ROOM: 'ауд.',
        BUILDING: 'дом',
        NO_LESSON: 'Нет занятий',
        LESSON_TYPE: 'Тип занятия',
        //init below
        SHEDULE_TYPE: {},
        CAMPUS: {},
        ERROR: {},
        CLEAR_SHEDULE_CONFIRM: 'Вы действительно хотите очистить расписание?'
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

gConst.LOCALE.CAMPUS[gConst.CAMPUS_TYPE_SCIENCE] = 'Научный корпус';
gConst.LOCALE.CAMPUS[gConst.CAMPUS_TYPE_SPORT] = 'Спортивный корпус';
gConst.LOCALE.CAMPUS[gConst.CAMPUS_TYPE_TRAINING] = 'Учебный корпус';

gConst.CAMPUS[0] = {
    name: '1',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Молодогвардейская', house: '236', letter: 'а' },
    cathedrals: ['Техническая кибернетика', 'Геоинформатика', 'Коммуникационные системы и сети'],
    decans: ['Факультет информатики (6)'],
    transport: [
        { stopName: 'Самарская площадь', bus: [2, 23, 41, 46, 47, 50, 217], tram: [5, 20, '20к', 22]},
        { stopName: 'Волжский проспект', bus: ['247', '297'], trollbus: [19, 20] }
    ]
};

gConst.CAMPUS[1] = {
    name: '3',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'шоссе Московское', house: '34', letter: 'а' },
    decans: ['Факультет летательных аппаратов (1)'],
    transport: [
        {
            stopName: 'Аэрокосмический университет',
            bus: [1, 22, 37, 42, 47, 56],
            trollbus: [4, 12, 15, 17, 19, 20],
            tram: [4, 13, 23],
            taxi: [1, 4, 22, 23, 37, 44, 46, 47, 67, 94, 126, 247, 410]
        }
    ]
};

gConst.CAMPUS[2] = {
    name: '3а',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'шоссе Московское', house: '34', letter: '' },
    decans: ['Радиотехнический факультет (5)'],
    transport: [
        {
            stopName: 'Аэрокосмический университет',
            bus: [1, 22, 37, 42, 47, 56],
            trollbus: [4, 12, 15, 17, 19, 20],
            tram: [4, 13, 23],
            taxi: [1, 4, 22, 23, 37, 44, 46, 47, 67, 94, 126, 247, 410]
        }
    ]
};

gConst.CAMPUS[3] = {
    name: '5',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Лукачёва', house: '45', letter: '' },
    decans: [
        'Факультет двигателей летательных аппаратов (2)',
        'Факультет инженеров воздушного транспорта (3)',
        'Инженерно-технологический факультет (4)',
        'Факультет экономики и управления (7)'
    ],
    transport: [
        {
            stopName: 'Аэрокосмический университет',
            bus: [1, 22, 37, 42, 47, 56],
            trollbus: [4, 12, 15, 17, 19, 20],
            tram: [4, 13, 23],
            taxi: [1, 4, 22, 23, 37, 44, 46, 47, 67, 94, 126, 247, 410]
        }
    ]
};

gConst.CAMPUS[4] = {
    name: '14',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Гая', house: '43', letter: '' },
    decans: [
        'Факультет информатики (6)'
    ],
    transport: [
        {
            stopName: 'Аэрокосмический университет',
            bus: [1, 22, 37, 42, 47, 56],
            trollbus: [4, 12, 15, 17, 19, 20],
            tram: [4, 13, 23],
            taxi: [1, 4, 22, 23, 37, 44, 46, 47, 67, 94, 126, 247, 410]
        }
    ]
};

gConst.SHEDULE_STRUCTURE = function () {
    return {
        0: {
            0: {
                0: { subject: 'Военная подготовка', instructor: '', room: '', building: '', type: '5' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            1: {
                0: { subject: 'Параллельное программирование', instructor: 'Козлова', room: '303', building: '1', type: '2' },
                1: { subject: 'Параллельное программирование', instructor: 'Козлова', room: '303', building: '1', type: '2' },
                2: { subject: 'Численные методы / Теория игр', instructor: 'Сметанникова Елена Николаевна / Головашкин', room: '212', building: '1', type: '0' },
                3: { subject: 'Крмпьютерные телекоммуникации', instructor: 'Суханов', room: '220', building: '1', type: '2' },
                4: { subject: 'Крмпьютерные телекоммуникации', instructor: 'Суханов', room: '220', building: '1', type: '2' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            2: {
                0: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '209', building: '1', type: '2' },
                1: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '209', building: '1', type: '2' },
                2: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '309', building: '1', type: '1' },
                3: { subject: 'УМФ', instructor: 'Харитонов', room: '211', building: '1', type: '1' },
                4: { subject: 'Экономика', instructor: 'МИСТЕР ИКС', room: '307a', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            3: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '2' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: 'Компьютерные телекоммуникации', instructor: 'Суханов С. В.', room: '315', building: '1', type: '0' },
                5: { subject: 'Параллельное программирование', instructor: 'Попов С. Б.', room: '209', building: '1', type: '0' },
            },
            4: {
                0: { subject: 'УМФ', instructor: 'Харитонов С. И.', room: '315', building: '1', type: '0' },
                1: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '315', building: '1', type: '0' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: 'Экономика', instructor: 'Антонов Е. А.', room: '503', building: '14', type: '0' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            5: {
                0: { subject: 'Теория управления', instructor: 'Соболев', room: '315', building: '1', type: '0' },
                1: { subject: 'Теория управления', instructor: 'Головашкин', room: '307б', building: '1', type: '1' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '307б', building: '1', type: '1' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            6: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            }
        },
        1: {
            0: {
                0: { subject: 'Военная подготовка', instructor: '', room: '', building: '', type: '5' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            1: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '310б', building: '1', type: '1' },
                2: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '315', building: '1', type: '0' },
                3: { subject: 'УМФ', instructor: 'Харитонов С. И.', room: '315', building: '1', type: '0' },
                4: { subject: 'УМФ', instructor: 'Хариотнов С. И.', room: '211', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            2: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'ТСП', instructor: 'Храмов Александр Григорьевич', room: '334', building: '1', type: '4' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '211', building: '1', type: '1' },
                3: { subject: 'Теория управления', instructor: 'Шварценеггер', room: '307б', building: '1', type: '1' },
                4: { subject: 'Теория игр', instructor: 'Досколович', room: '204', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            3: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '2' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '517', building: '14', type: '0' },
                3: { subject: 'Экономика', instructor: 'Антонов Е. А.', room: '517', building: '14', type: '0' },
                4: { subject: 'УМФ', instructor: 'Хариотнов С. И.', room: '517', building: '14', type: '0' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            4: {
                0: { subject: 'Теория управления', instructor: 'Соболев', room: '315', building: '1', type: '0' },
                1: { subject: 'Компьютерные телекоммуникации', instructor: 'Суханов С. В.', room: '315', building: '1', type: '0' },
                2: { subject: 'Параллельное программирование', instructor: 'Попов С. Б.', room: '209', building: '1', type: '0' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            5: {
                0: { subject: 'Теория игр', instructor: 'Досколович Л. Л.', room: '212', building: '1', type: '0' },
                1: { subject: 'УМФ', instructor: 'Харитонов', room: '309', building: '1', type: '1' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '1' }
            },
            6: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' }
            }
        }
    }
};
/*
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
};*/