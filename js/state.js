/**
 * ==========================================================================
 * СОСТОЯНИЕ ПРИЛОЖЕНИЯ «ЭВРИКА»
 * ==========================================================================
 */

const currentState = {
    currentPage: 'home',
    showAllTeachers: false,
    galleryFilter: 'Все',
    calendarMonthIndex: 0, // 0 = Апрель (по умолчанию как на референсе), 1 = Май
    selectedCalendarDay: null
};

const CALENDAR_MONTHS = [
    { name: 'Апрель 2026', short: 'апр', daysInMonth: 30, startOffset: 1 }, // Вт = 1 (как в референсе: 1 число во Вторник)
    { name: 'Май 2026', short: 'мая', daysInMonth: 31, startOffset: 4 }
];
