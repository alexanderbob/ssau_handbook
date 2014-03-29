var gConst = {
    MYSQL_DB_NAME: 'SSAUHandbook',
    MYSQL_DB_SIZE: 200000,
    MYSQL_DB_VER: '1.0',
    MYSQL_TABLE_STAFF_NAME: 'ssau_staff',

    NEWS_COUNT: 5,
    NEWS_TIMEOUT: 20 * 1000,

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
        { start: '17:00', end: '18:35' },
        { start: '18:40', end: '20:15' },
        { start: '20:25', end: '22:00' }
    ],
    //init below
    SHEDULE_TYPE_CLASSES: {},
    ERR_NO_SUBJECT: 1,
    ERR_NO_INSTRUCTOR: 2,
    ERR_NO_ROOM: 3,

    CAMPUS_TYPE_TRAINING: 1,
    CAMPUS_TYPE_SPORT: 2,
    CAMPUS_TYPE_SCIENCE: 3,
    CAMPUS_TYPE_SERVICE: 4,
    CAMPUS_TYPE_WAR: 5,
    CAMPUS_TYPE_CULTURE: 6,

    //init below
    CAMPUS: [],
    DEPARTMENTS: [],
    FACS: [],

    PATHS: {
        STAFF: 'JSON/',
        SHEDULE: 'SHEDULE',
        NEWS: 'NEWS'
    },
    debug: true,
    LOCALE: {
        FACULTY: 'факультет',
        INSTITUTE: 'институт',
        DECANAT: 'Деканат',
        EDU_INTERNAL: 'Очное',
        EDU_EXTERNAL: 'Заочное',
        BACHELOR: 'Бакалавриат',
        SPECIALIST: 'Специалитет',
        MAGISTER: 'Магистратура',
        REFRESH: 'Обновить',
        LOADING: 'Загрузка',
        REQUEST_TIMEOUT: 'Превышено время ожидания ответа от сервера. Проверьте соединение с интернетом',
        ADDRESS: 'Адрес',
        EMAIL: 'e-mail',
        CORPUS: 'корп.',
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
        NO_LESSON: 'Нет занятий',
        LESSON_TYPE: 'Тип занятия',
        //init below
        SHEDULE_TYPE: {},
        CAMPUS: {},
        ERROR: {},
        CLEAR_SHEDULE_CONFIRM: 'Вы действительно хотите очистить эту запись?'
    }
};

/*
========================= DEPARTMENTS START =================
*/

gConst.DEPARTMENTS[0] = {
    number: '1',
    deps: {
        0: {
            nameHTML: 'Конструкция и проектирование<br>летательных аппаратов',
            leader: 'Комаров Валерий Андреевич'
        },
        1: {
            nameHTML: 'Космическое машиностроение',
            leader: 'Кирилин Александр Николаевич'
        },
        2: {
            nameHTML: 'Летательные аппараты',
            leader: 'Салмин Вадим Викторович',
            address: 'ул. Гая 45, ЭИК-3, комн. 402',
            tel: ['843348680', '2674688'],
            email: ['sputnik@ssau.ru']
        },
        3: {
            nameHTML: 'Производствo летательных <br>аппаратов и управление <br>качеством в машиностроении',
            leader: 'Барвинок Виталий Алексеевич',
            tel: ['2674623', '3344895']
        },
        4: {
            nameHTML: 'Сопротивление материалов',
            leader: 'Павлов Валентин Федорович',
            tel: ['2674526', '2674527']
        },
        5: {
            nameHTML: 'Теоретическая механика',
            leader: 'Асланов Владимир Степанович',
            address: 'ул. Московское шоссе, д. 34',
            tel: ['2674598', '2674599', '2674597']
        }
    }
};

gConst.DEPARTMENTS[1] = {
    number: '2',
    deps: {
        0: {
            nameHTML: 'Автоматические системы <br>энергетических установок',
            leader: 'Шахматов Евгений Владимирович',
            address: 'ул. Московское шоссе 34, корпус 14',
            tel: ['3351905', '3357221'],
            email: ['aseu@ssau.ru']
        },
        1: {
            nameHTML: 'Инженерная графика',
            leader: 'Иващенко Владимир Иванович',
            address: 'ул. Московское шоссе 34, корпус №3, комн 246',
            tel: ['2674510', '2674511']
        },
        2: {
            nameHTML: 'Конструкция и проектирование <br>двигателей летательных <br>аппаратов',
            leader: 'Фалалеев Сергей Викторинович',
            tel: ['3358767', '2674675', '2674676']
        },
        3: {
            nameHTML: 'Механическая обработка <br>материалов'/*,
            leader: 'UNKNOWN'*/
        },
        4: {
            nameHTML: 'Общеинженерная подготовка',
            leader: 'Головин Александр Николаевич',
            tel: ['9505477']
        },
        5: {
            nameHTML: 'Производство двигателей <br>летательных аппаратов',
            leader: 'Шитарев Игорь Леонидович',
            address: 'ул. Лукачева 45, корп №5, комн. 226',
            tel: ['3347491', '2674579']
        },
        6: {
            nameHTML: 'Теория двигателей <br>летательных аппаратов',
            leader: 'Матвеев Валерий Николаевич',
            address: 'ул. Московское шоссе 34, корпус №5, кафедра ТДЛА',
            tel: ['3347200']
        },
        7: {
            nameHTML: 'Теплотехника и тепловые <br>двигатели'/*,
            leader: 'UNKNOWN'*/
        },
        8: {
            nameHTML: 'Экология и безопасность<br> жизнедеятельности',
            leader: 'Морозов Владимир Васильевич',
            address: 'ул. Московское шоссе 34, корпус №14, комн 403',
            tel: ['2674686']
        }
    }
};

gConst.DEPARTMENTS[2] = {
    number: '3',
    deps: {
        0: {
            nameHTML: 'Военная кафедра',
            leader: 'Хабло Иван Игоревич',
            tel: ['2674422', '3345754']
        },
        1: {
            nameHTML: 'Организация и управление <br>перевозками на транспорте',
            leader: 'Титов Борис Александрович',
            address: 'ул. Лукачева 45, корпус №5, комн. 339',
            tel: ['2674674']
        },
        2: {
            nameHTML: 'Основы конструирования <br>машин',
            leader: 'Балякин Валерий Борисович',
            address: 'ул. Лукачева 45, корпус №5, комн. 406',
            tel: ['2674611'],
            email: ['okm@ssau.ru']
        },
        3: {
            nameHTML: 'Эксплуатация авиационной <br>техники',
            leader: 'Коптев Анатолий Никитович',
            address: 'ул. Лукачева 45, корпус №5, комн. 105',
            tel: ['3345683', '2674613', '2674614'],
            email: ['eat@ssau.ru']
        }
    }
};

gConst.DEPARTMENTS[3] = {
    number: '4',
    deps: {
        0: {
            nameHTML: 'Обработка металлов <br>давлением',
            leader: 'Зав. Гречников Федор Васильевич',
            address: 'ул.Московское Шоссе д.34, СГАУ, Кафедра обработки металлов давлением',
            tel: ['8462357070'],
            email: ['omd@ssau.ru']
        },
        1: {
            nameHTML: 'Технология металлов и <br>авиационного материаловедения',
            leader: 'Зав. Михеев Владимир Александрович',
            address: 'ул. Московское шоссе, 34, кафедра ТМиАМ',
            tel: ['8462674640', '2674641']
        }
    }
};

gConst.DEPARTMENTS[4] = {
    number: '5',
    deps: {
        0: {
            nameHTML: 'Конструирование и производство<br>радиоэлектронных средств',
            leader: 'Пиганов Михаил Николаевич',
            address: 'ул. Московское шоссе 34, главный корпус, комн. 502б',
            tel: ['2677446', '3347443'],
        },
        1: {
            nameHTML: 'Наноинженерии',
            leader: 'Павельев Владимир Сергеевич',
            tel: ['2674843']
        },
        2: {
            nameHTML: 'Радиотехника и медицинские<br>диагностические системы',
            leader: 'Калакутский Лев Иванович',
            tel: ['2674549'],
            email: ['bme@ssau.ru']
        },
        3: {
            nameHTML: 'Радиотехнические устройства',
            leader: 'Захаров Валерий Павлович',
            address: 'ул. Московское шоссе 34А, кафедра РТУ',
            tel: ['3356422', '3357079'],
            email: ['rtu@ssau.ru']
        },
        4: {
            nameHTML: 'Электронных систем и устройств',
            leader: 'Матюнин Сергей Александрович',
            address: 'ул. Московское шоссе 34А, корпус 3а, комн. 517',
            tel: ['2674544', '3356417'],
            email: ['mitrea.sgau@rambler.ru']
        },
        5: {
            nameHTML: 'Электротехника',
            leader: 'Гречичников Владимир Михайлович',
            address: 'ул. Московское шоссе 34А, каб 102а',
            tel: ['2674554']
        }
    }
};

gConst.DEPARTMENTS[5] = {
    number: '6',
    deps: {
        0: {
            nameHTML: 'Геоинформатика и <br>информационная безопасность',
            leader: 'Зав. СЕРГЕЕВ Владислав Викторович, д.т.н.',
            address: 'ул. Молодогвардейская, 151, корп. 1, комн. 230',
            tel: ['8463322994'],
            email: ['vserg@smr.ru']
        },
        1: {
            nameHTML: 'Информационные системы и <br>технологии',
            leader: 'Зав. ПРОХОРОВ Сергей Антонович',
            //address: '',
            tel: ['2674672', '2674671'],
            //email: ''
        },
        2: {
            nameHTML: 'Прикладная математика',
            leader: 'Зав. ЖДАНОВ Александр Иванович',
            address: 'ул. Молодогвардейская, 151, корп. № 1, комн. 214',
            tel: ['8463325607'],
            email: ['zhdanov@ssau.ru']
        },
        3: {
            nameHTML: 'Программные системы',
            leader: 'КОВАРЦЕВ Александр Николаевич',
            address: 'ул. Гая, 41, корп. № 14, комн. 515',
            tel: ['8462709087', '2674673']
        },
        4: {
            nameHTML: 'Техническая кибернетика',
            leader: 'Сойфер Виктор Александрович',
            address: 'ул Молодогвардейская,дом 151, ауд. 317',
            tel: ['8462325786'],
            email: ['soifer@ssau.ru', 'degtyarev@ssau.ru']
        }
    }
};

gConst.DEPARTMENTS[6] = {
    number: '7',
    deps: {
        0: {
            nameHTML: 'Математические методы<br>в экономике',
            leader: 'Гераськин Михаил Иванович',
            address: 'ул. Лукачева 45, корпус №5, комн. 505',
            tel: ['2674495', '2674503'],
            email: ['innovation@ssau.ru']
        },
        1: {
            nameHTML: 'Менеджмент',
            leader: 'Османкин Николай Николаевич',
            address: 'ул. Московское шоссе 34, корпус №5, комн. 525',
            tel: ['2674621', '3355410'],
            email: ['kmos@ssau.ru']
        },
        2: {
            nameHTML: 'Организация производства',
            leader: 'Засканов Виктор Гаврилович',
            address: 'ул. Лукачева 45, корпус №5, комн. 530',
            tel: ['3351919'],
            email: ['zaskan@ssau.ru']
        },
        3: {
            nameHTML: 'Социальные системы и право',
            leader: 'Чумак Вадим Геннадьевич',
            address: 'ул. Лукачева 45, корпус №5, комн. 503а',
            tel: ['2674479', '3351813']
        },
        4: {
            nameHTML: 'Финансы и кредит',
            leader: 'Сорокина Марина Геннадьевна',
            tel: ['2674469']
        },
        5: {
            nameHTML: 'Экономика',
            leader: 'Гришанов Геннадий Михайлович',
            tel: ['2674620']
        }
    }
};

/*
========================= DEPARTMENTS END ===================
*/


/*
========================== CAMPUS START ======================
*/

gConst.CAMPUS[0] = {
    name: '1',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Молодогвардейская', house: '236', letter: 'а' },
    cathedrals: ['Техническая кибернетика', 'Геоинформатика', 'Коммуникационные системы и сети'],
    decans: ['Факультет информатики (6)'],
    transport: [
        { stopName: 'Самарская площадь', bus: [2, 23, 41, 46, 47, 50, 217], tram: [5, 20, '20к', 22] },
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

gConst.CAMPUS[5] = {
    name: '3б',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Московское шоссе', house: '34', letter: 'а к3б' },
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

gConst.CAMPUS[6] = {
    name: '7',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Гая / Лукачёва', house: '59/37', letter: '' },
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

gConst.CAMPUS[7] = {
    name: '9',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Гая', house: '43', letter: '' },
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

gConst.CAMPUS[8] = {
    name: '10',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Московское шоссе', house: '34', letter: 'к10' },
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

gConst.CAMPUS[9] = {
    name: '11',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Московское шоссе', house: '34', letter: '' },
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

gConst.CAMPUS[10] = {
    name: '15',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Московское шоссе', house: '34', letter: 'к15' },
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

gConst.CAMPUS[11] = {
    tileName: 'дк',
    name: '16',
    type: gConst.CAMPUS_TYPE_CULTURE,
    address: { street: 'ул. Московское шоссе', house: '34', letter: 'к16' },
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

gConst.CAMPUS[12] = {
    name: 'АХЧ',
    type: gConst.CAMPUS_TYPE_SERVICE,//не тот тип
    address: { street: 'ул. Врубеля', house: '25', letter: '' },
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

gConst.CAMPUS[13] = {
    tileName: 'вк',
    name: 'военная кафедра',
    type: gConst.CAMPUS_TYPE_TRAINING,
    address: { street: 'ул. Врубеля', house: '27', letter: '' },
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

/*
gConst.CAMPUS[14] = {
    name: 'крытый манеж',
    type: gConst.CAMPUS_TYPE_SPORT,
    address: { street: 'ул. Врубеля', house: '29', letter: 'г' },
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

gConst.CAMPUS[15] = {
    name: 'спорт комплекс',
    type: gConst.CAMPUS_TYPE_SPORT,
    address: { street: 'ул. Врубеля / Московское шоссе ', house: '29/34', letter: 'к17' },
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

gConst.CAMPUS[16] = {
    name: 'научный корпус',
    type: gConst.CAMPUS_TYPE_SCIENCE,
    address: { street: '', house: '', letter: '' },//нет адреса на карте
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
*/
/*
========================== CAMPUS END ======================
*/

/*
======================== FACULTIES START ====================
*/

gConst.FACS[0] = {
    number: 1,
    name: 'летательных аппаратов',
    decan: 'Кирпичев Виктор Алексеевич',
    address: 'ул. Московское шоссе 34',
    tel: ['2674320'],
    bachelor: [
        '220700.62 "Автоматизация технологических процессов и производств"',
        '221400.62 "Управление качеством"',
        '151600.62 "Прикладная механика"',
        '160100.62 "Авиастроение"',
        '160400.62 "Ракетные комплексы и космонавтика"'
    ],
    specialist: [
        '160100.65 "Самолето- и вертолетостроение"',
        '160400.65 "Проектирование, производство и эксплуатация ракет и ракетно-космических комлексов"'
    ],
    magister: [
        '010800.68 "Механика и математическое моделирование"',
        '151600.68 "Прикладная механика"',
        '160100.68 "Авиастроение"',
        '160400.68 "Ракетные комплексы и космонавтика"'
        ]
};

gConst.FACS[1] = {
    number: 2,
    name: 'двигателей летательных аппаратов',
    decan: 'Ермаков Александр Иванович',
    address: 'ул. Московское шоссе 34',
    tel: ['2674322', '3347922'],
    bachelor: [
        '160700.62 "Двигатели летательных аппаратов"',
        '220700.62 "Автоматизация технологических процессов и производств"',
        '141100.62 "Энергетическое машиностроение"',
        '151900.62 "Конструкторско-технологическое обеспечение машиностроительных производств"'
    ],
    specialist: [
        '160700.65 "Проектирование авиационных и ракетных двигателей"'
    ],
    magister: [
        '160700.68 "Двигатели летательных аппаратов"'
    ]
};

gConst.FACS[2] = {
    number: 3,
    name: 'инженеров воздушного транспорта',
    decan: 'Тихонов Алексей Николаевич',
    address: 'ул. Московское шоссе 34',
    tel: ['2674325'],
    bachelor: [
        '162300.62 "Техническая эксплуатация летательных аппаратов и двигателей"',
        '162500.62 "Техническая эксплуатация авиационных электросистем и пилотажно-навигационных комплексов"',
        '190700.62 "Технология транспортных процессов"'
    ],
    magister: [
        '162300.68 "Техническая эксплуатация летательных аппаратов и двигателей"',
        '162500.68 "Техническая эксплуатация авиационных электросистем и пилотажно-навигационных комплексов"'
    ]
};

gConst.FACS[3] = {
    number: 4,
    name: 'инженерно-технологический',
    decan: 'Хардин Михаил Викторович',
    address: 'ул. Московское шоссе 34',
    tel: ['3347881', '2674327'],
    bachelor: [
        '150400.62 "Металлургия"',
        '150700.62 "Машиностроение"',
        '152200.62 "Наноинженерия"'
    ],
    magister: [
        '150400.68 "Металлургия"'
    ]
};

gConst.FACS[4] = {
    number: 5,
    name: 'радиотехнический',
    decan: 'Кудрявцев Илья Александрович',
    address: 'ул. Московское шоссе 34',
    tel: ['2674329', '3351855'],
    bachelor: [
        '200500.62 "Лазерная техника и лазерные технологии"',
        '201000.62 "Битехнические системы и технологии"',
        '210100.62 "Электроника и наноэлектроника"',
        '210400.62 "Радиотехника"',
        '211000.62 "Конструирование и технология электронных средств"'
    ],
    specialist: [
        '210601.65 "Радиоэлектронные системы и комплексы"'
    ],
    magister: [
        '010900.68 "Прикладные математика и физика"',
        '201000.68 "Биотехнические системы и технологии"',
        '210400.68 "Радиотехника"',
        '211000.68 "Конструирование и технология электронных средств"'
    ]
};

gConst.FACS[5] = {
    number: 6,
    name: 'информатики',
    decan: 'Коломиец Эдуард Иванович',
    address: 'ул. Московское шоссе 34',
    tel: ['2674331'],
    bachelor: [
        '010300.62 "Фундаментальные информатика и информационные технологии"',
        '010400.62 "Прикладная математика и информатика"',
        '010900.62 "Прикладные математика и физика"',
        '230100.62 "Информатика и вычислительная техника"'
    ],
    specialist: [
        '090303.65 "Информационная безопасность автоматизированных систем"'
    ],
    magister: [
        '010300.68 "Фундаментальные информатика и информационные технологии"',
        '010400.68 "Прикладная математика и информатика"',
        '010900.68 "Прикладные математика и физика"',
        '230100.68 "Информатика и вычислительная техника"'
    ]
};

gConst.FACS[6] = {
    number: 7,
    name: 'экономики и управления',
    decan: 'Павлов Олег Валерьевич',
    address: 'ул. Московское шоссе 34',
    tel: ['2674333', '2674334'],
    bachelor: [
        '080100.62 "Экономика"',
        '080200.62 "Менеджмент"',
        '080500.62 "Бизнес-информатика"',
    ],
    magister: [
        '080200.68 "Менеджмент"'
    ]
};

gConst.FACS[7] = {
    number: 'ИП',
    name: 'печати',
    decan: 'Нечитайло Александр Анатольевич',
    address: 'ул. Московское шоссе 34',
    tel: ['3325490'],
    bachelor: [
        '035000.62 "Издательское дело"',
        '261700.62 "Технология полиграфического и упаковочного производства"',
    ]
};
/*
======================== FACULTIES END ====================
*/

/*
========================== LOCALE START =====================
*/
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
gConst.LOCALE.CAMPUS[gConst.CAMPUS_TYPE_SERVICE] = 'Административный корпус';
gConst.LOCALE.CAMPUS[gConst.CAMPUS_TYPE_CULTURE] = 'Дом культуры';

/*
=========================== LOCALE END ==========================
*/
/*
gConst.SHEDULE_STRUCTURE = function () {
    return {
        0: {
            0: {
                0: { subject: 'Военная подготовка', instructor: '', room: '', building: '', type: '5' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            1: {
                0: { subject: 'Параллельное программирование', instructor: 'Козлова', room: '303', building: '1', type: '2' },
                1: { subject: 'Параллельное программирование', instructor: 'Козлова', room: '303', building: '1', type: '2' },
                2: { subject: 'Численные методы / Теория игр', instructor: 'Сметанникова Елена Николаевна / Головашкин', room: '212', building: '1', type: '0' },
                3: { subject: 'Крмпьютерные телекоммуникации', instructor: 'Суханов', room: '220', building: '1', type: '2' },
                4: { subject: 'Крмпьютерные телекоммуникации', instructor: 'Суханов', room: '220', building: '1', type: '2' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            2: {
                0: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '209', building: '1', type: '2' },
                1: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '209', building: '1', type: '2' },
                2: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '309', building: '1', type: '1' },
                3: { subject: 'УМФ', instructor: 'Харитонов', room: '211', building: '1', type: '1' },
                4: { subject: 'Экономика', instructor: 'МИСТЕР ИКС', room: '307a', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            3: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '2' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: 'Компьютерные телекоммуникации', instructor: 'Суханов С. В.', room: '315', building: '1', type: '0' },
                5: { subject: 'Параллельное программирование', instructor: 'Попов С. Б.', room: '209', building: '1', type: '0' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            4: {
                0: { subject: 'УМФ', instructor: 'Харитонов С. И.', room: '315', building: '1', type: '0' },
                1: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '315', building: '1', type: '0' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: 'Экономика', instructor: 'Антонов Е. А.', room: '503', building: '14', type: '0' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            5: {
                0: { subject: 'Теория управления', instructor: 'Соболев', room: '315', building: '1', type: '0' },
                1: { subject: 'Теория управления', instructor: 'Головашкин', room: '307б', building: '1', type: '1' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '307б', building: '1', type: '1' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            6: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            }
        },
        1: {
            0: {
                0: { subject: 'Военная подготовка', instructor: '', room: '', building: '', type: '5' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            1: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '310б', building: '1', type: '1' },
                2: { subject: 'Численные методы', instructor: 'Сметанникова Елена Николаевна', room: '315', building: '1', type: '0' },
                3: { subject: 'УМФ', instructor: 'Харитонов С. И.', room: '315', building: '1', type: '0' },
                4: { subject: 'УМФ', instructor: 'Хариотнов С. И.', room: '211', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            2: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'ТСП', instructor: 'Храмов Александр Григорьевич', room: '334', building: '1', type: '4' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '211', building: '1', type: '1' },
                3: { subject: 'Теория управления', instructor: 'Шварценеггер', room: '307б', building: '1', type: '1' },
                4: { subject: 'Теория игр', instructor: 'Досколович', room: '204', building: '1', type: '1' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            3: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '2' },
                2: { subject: 'Методы параллельных вычислений', instructor: 'Головашкин', room: '517', building: '14', type: '0' },
                3: { subject: 'Экономика', instructor: 'Антонов Е. А.', room: '517', building: '14', type: '0' },
                4: { subject: 'УМФ', instructor: 'Хариотнов С. И.', room: '517', building: '14', type: '0' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            4: {
                0: { subject: 'Теория управления', instructor: 'Соболев', room: '315', building: '1', type: '0' },
                1: { subject: 'Компьютерные телекоммуникации', instructor: 'Суханов С. В.', room: '315', building: '1', type: '0' },
                2: { subject: 'Параллельное программирование', instructor: 'Попов С. Б.', room: '209', building: '1', type: '0' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            5: {
                0: { subject: 'Теория игр', instructor: 'Досколович Л. Л.', room: '212', building: '1', type: '0' },
                1: { subject: 'УМФ', instructor: 'Харитонов', room: '309', building: '1', type: '1' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: 'Физвоспитание', instructor: 'Койчев', room: '', building: '', type: '1' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            },
            6: {
                0: { subject: '', instructor: '', room: '', building: '', type: '' },
                1: { subject: '', instructor: '', room: '', building: '', type: '' },
                2: { subject: '', instructor: '', room: '', building: '', type: '' },
                3: { subject: '', instructor: '', room: '', building: '', type: '' },
                4: { subject: '', instructor: '', room: '', building: '', type: '' },
                5: { subject: '', instructor: '', room: '', building: '', type: '' },
                6: { subject: '', instructor: '', room: '', building: '', type: '' },
                7: { subject: '', instructor: '', room: '', building: '', type: '' }
            }
        }
    }
};*/

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