/**
 * ==========================================================================
 * СОСТОЯНИЕ ПРИЛОЖЕНИЯ «ЭВРИКА»
 * ==========================================================================
 */

const currentState = {
    currentLang: localStorage.getItem('evrika_lang') || 'uk',
    currentPage: 'home',
    showAllTeachers: false,
    galleryFilter: 'all', // 'all', 'creativity', 'games', 'atmosphere'
    calendarMonthIndex: 0, // 0 = Квітень / April / Апрель
    selectedCalendarDay: null
};

let CALENDAR_MONTHS = [];

function syncCalendarMonths() {
    if (typeof SITE_DATA !== 'undefined' && SITE_DATA.calendarMonths && SITE_DATA.calendarMonths.length) {
        CALENDAR_MONTHS = SITE_DATA.calendarMonths;
    } else {
        CALENDAR_MONTHS = [
            { name: 'Квітень 2026', short: 'квіт', daysInMonth: 30, startOffset: 1 },
            { name: 'Травень 2026', short: 'трав', daysInMonth: 31, startOffset: 4 }
        ];
    }
}

syncCalendarMonths();
