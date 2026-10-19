/**
 * ==========================================================================
 * ЕДИНОЕ ХРАНИЛИЩЕ ДАННЫХ ПРОЕКТА «ЭВРИКА» (МУЛЬТИЯЗЫЧНЫЙ РЕЖИМ)
 * Все данные загружаются из активного языкового пакета (js/translations.js).
 * По умолчанию: УКРАИНСКИЙ ('uk').
 * ==========================================================================
 */

let currentSiteLang = localStorage.getItem('evrika_lang') || 'uk';
if (!['uk', 'en', 'ru'].includes(currentSiteLang)) {
    currentSiteLang = 'uk';
}

const SITE_DATA = {};

function applyLanguageData(lang) {
    if (!['uk', 'en', 'ru'].includes(lang)) {
        lang = 'uk';
    }
    currentSiteLang = lang;
    const data = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) 
        ? window.TRANSLATIONS[lang] 
        : (window.TRANSLATIONS ? window.TRANSLATIONS.uk : {});

    // Полная синхронизация свойств SITE_DATA
    Object.keys(SITE_DATA).forEach(k => delete SITE_DATA[k]);
    Object.assign(SITE_DATA, JSON.parse(JSON.stringify(data)));

    if (typeof syncCalendarMonths === 'function') {
        syncCalendarMonths();
    }
}

// Первичная инициализация данных
if (typeof window !== 'undefined' && window.TRANSLATIONS) {
    applyLanguageData(currentSiteLang);
}
