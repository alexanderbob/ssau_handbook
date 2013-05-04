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

    SHEDULE_INTERVALS: [
        { start: '8:15', end: '9:50' },
        { start: '10:00', end: '11:35' },
        { start: '11:45', end: '13:20' },
        { start: '13:30', end: '15:05' },
        { start: '15:15', end: '17:00' }
    ],
    PATHS: {
        STAFF: 'JSON/'
    },
    debug: true,
    LOCALE: {
        IS_MAIN: 'основное',
        NO_TEXT_ENTERED: 'Пожалуйста, введите текст в поле ввода',
        THREE_CHARS_MIN: 'Введите минимум три символа',
        WEEK_DAYS: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        ROOM: 'ауд.',
        BUILDING: 'корп.',
        NO_LESSON: 'Нет занятий'
    }
};