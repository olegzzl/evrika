/**
 * ==========================================================================
 * ГЛАВНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ «ЭВРИКА» (ОДНОСТРАНИЧНЫЙ САЙТ, i18n И НАВИГАЦИЯ)
 * ==========================================================================
 */

/**
 * Карта секций на странице для якорной навигации
 */
const SECTION_MAP = {
    'home': 'section-home',
    'gallery': 'section-gallery',
    'about': 'section-about',
    'program': 'section-program',
    'clubs': 'section-clubs',
    'calendar': 'section-calendar',
    'teachers': 'section-teachers',
    'reviews': 'section-reviews',
    'contacts': 'section-contacts'
};

/**
 * Рендер всех секций одностраничного сайта
 */
function renderAllSections() {
    const container = document.getElementById('main-content');
    if (!container) return;

    container.innerHTML = `
        <!-- 1. Главная страница (Hero + 8 цветных иконок + карусель) -->
        <div id="section-home" class="page-section">
            ${renderHomePage()}
        </div>

        <!-- 2. Галерея -->
        <div id="section-gallery" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderGalleryPage()}
        </div>

        <!-- 3. О клубе -->
        <div id="section-about" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderAboutPage()}
        </div>

        <!-- Программа развития (дополнение раздела «О клубе») -->
        <div id="section-program" class="page-section pt-6 sm:pt-10 px-4 sm:px-6">
            ${renderProgramPage()}
        </div>

        <!-- 4. Кружки -->
        <div id="section-clubs" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderClubsPage()}
        </div>

        <!-- 5. Календарь -->
        <div id="section-calendar" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderCalendarPage()}
        </div>

        <!-- 6. Воспитатели -->
        <div id="section-teachers" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderTeachersPage()}
        </div>

        <!-- 7. Отзывы -->
        <div id="section-reviews" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderReviewsPage()}
        </div>

        <!-- 8. Контакты -->
        <div id="section-contacts" class="page-section pt-8 sm:pt-14 px-4 sm:px-6">
            ${renderContactsPage()}
        </div>
    `;

    renderNavigationElements();
    initScrollSpy();
    initAppearanceAnimations();
}

/**
 * Рендер элементов навигации:
 * 1. Десктопное меню в шапке
 * 2. Мобильное выпадающее меню
 * 3. Нижний переключатель
 */
function renderNavigationElements() {
    // 1. Десктопное меню в шапке
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav && SITE_DATA.navigation) {
        desktopNav.innerHTML = SITE_DATA.navigation.map(item => `
            <button onclick="navigateTo('${item.id}')" data-nav="${item.id}" class="nav-pill px-3 py-1.5 rounded-full text-sm font-bold transition">
                ${item.title}
            </button>
        `).join('');
    }

    // 2. Мобильное выпадающее меню
    const mobileList = document.getElementById('mobile-menu-list');
    if (mobileList) {
        mobileList.innerHTML = (SITE_DATA.topMenuItems || []).map(item => {
            const isActive = currentState.currentPage === item.id;
            return `
            <button onclick="navigateTo('${item.id}')" class="w-full flex items-center justify-between py-1.5 sm:py-2 px-3.5 sm:px-4 rounded-2xl transition group ${isActive ? 'bg-amber-50/90 border border-amber-200/60 shadow-xs' : 'hover:bg-slate-50 active:scale-98 border border-transparent hover:border-slate-100'}">
                <div class="flex items-center gap-3 sm:gap-3.5">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-200">
                        ${getTopMenuIcon(item.icon)}
                    </div>
                    <span class="text-[15px] sm:text-base font-bold text-navy group-hover:text-brand-blue transition">${item.title}</span>
                </div>
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-navy/70 group-hover:text-navy group-hover:bg-navy/5 group-hover:translate-x-0.5 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </button>
            `;
        }).join('');
    }

    // 3. Нижний переключатель
    const switcherBar = document.getElementById('screen-switcher-bar');
    if (switcherBar && SITE_DATA.navigation) {
        switcherBar.innerHTML = SITE_DATA.navigation.map(item => {
            const isActive = currentState.currentPage === item.id;
            return `
            <button onclick="navigateTo('${item.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-bold transition whitespace-nowrap ${isActive ? 'bg-navy text-white shadow-sm' : 'text-navy hover:bg-navy/10 font-bold'}">
                ${item.title}
            </button>
            `;
        }).join('');
    }

    updateActiveNavState(currentState.currentPage || 'home');
}

/**
 * Подсветка активных пунктов меню во всех элементах интерфейса
 */
function updateActiveNavState(activeKey) {
    currentState.currentPage = activeKey;

    // 1. Десктопные плашки меню в шапке
    document.querySelectorAll('.nav-pill').forEach(btn => {
        const page = btn.getAttribute('data-nav');
        if (page === activeKey) {
            btn.className = 'nav-pill px-3 py-1.5 rounded-full text-sm font-extrabold bg-brand-yellow text-navy transition';
        } else {
            btn.className = 'nav-pill px-3 py-1.5 rounded-full text-sm font-bold text-navy hover:bg-navy/10 transition';
        }
    });

    // 2. Нижний плавающий таб-бар
    const bnavHome = document.getElementById('bnav-home');
    const bnavClubs = document.getElementById('bnav-clubs');
    const bnavCalendar = document.getElementById('bnav-calendar');

    const isClubs = activeKey === 'clubs';
    const isCalendar = activeKey === 'calendar' || activeKey === 'teachers' || activeKey === 'reviews' || activeKey === 'contacts';
    const isHome = !isClubs && !isCalendar;

    const setBtnState = (btn, active) => {
        if (!btn) return;
        const label = btn.querySelector('.bnav-label');
        if (active) {
            btn.classList.add('scale-105');
            if (label) label.className = 'bnav-label text-[11px] font-extrabold text-navy mt-1';
        } else {
            btn.classList.remove('scale-105');
            if (label) label.className = 'bnav-label text-[11px] font-bold text-navy mt-1';
        }
    };

    setBtnState(bnavHome, isHome);
    setBtnState(bnavClubs, isClubs);
    setBtnState(bnavCalendar, isCalendar);

    // 3. Мобильное всплывающее меню
    document.querySelectorAll('#mobile-menu-list button').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        if (onclickAttr.includes(`'${activeKey}'`)) {
            btn.classList.add('bg-amber-50/90', 'border-amber-200/60');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('bg-amber-50/90', 'border-amber-200/60');
            btn.classList.add('border-transparent');
        }
    });
}

/**
 * Плавный скролл к выбранному разделу одностраничного сайта
 */
function navigateTo(pageId) {
    toggleMenuDrawer(false);

    if (pageId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateActiveNavState('home');
        return;
    }

    const sectionId = SECTION_MAP[pageId] || `section-${pageId}`;
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
        const headerOffset = 68;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = sectionEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
        updateActiveNavState(pageId);
    }
}

/**
 * Отслеживание скролла (Scroll Spy) для автоподсветки разделов
 */
function initScrollSpy() {
    const spySections = [
        { id: 'section-home', navId: 'home' },
        { id: 'section-gallery', navId: 'gallery' },
        { id: 'section-about', navId: 'about' },
        { id: 'section-program', navId: 'program' },
        { id: 'section-clubs', navId: 'clubs' },
        { id: 'section-calendar', navId: 'calendar' },
        { id: 'section-teachers', navId: 'teachers' },
        { id: 'section-reviews', navId: 'reviews' },
        { id: 'section-contacts', navId: 'contacts' }
    ];

    let isTicking = false;
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                const scrollPosition = window.scrollY + 160;
                for (let i = spySections.length - 1; i >= 0; i--) {
                    const el = document.getElementById(spySections[i].id);
                    if (el && el.offsetTop <= scrollPosition) {
                        if (currentState.currentPage !== spySections[i].navId) {
                            updateActiveNavState(spySections[i].navId);
                        }
                        break;
                    }
                }
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });
}

/**
 * Инициализация плавной анимации появления элементов и карточек (Scroll Reveal & Stagger)
 */
let appearanceObserver = null;

function initAppearanceAnimations(root = document) {
    // Режим пониженного движения в системе
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        root.querySelectorAll('.reveal-on-scroll, .reveal-card').forEach(el => el.classList.add('is-revealed'));
        return;
    }

    // Если IntersectionObserver не поддерживается старыми браузерами
    if (!('IntersectionObserver' in window)) {
        root.querySelectorAll('.reveal-on-scroll, .reveal-card').forEach(el => el.classList.add('is-revealed'));
        return;
    }

    if (!appearanceObserver) {
        appearanceObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -25px 0px',
            threshold: 0.05
        });
    }

    // Находим все нераскрытые элементы с классами reveal-on-scroll и reveal-card
    const items = root.querySelectorAll('.reveal-on-scroll:not(.is-revealed), .reveal-card:not(.is-revealed)');
    items.forEach(el => {
        appearanceObserver.observe(el);
    });
}

/**
 * Открытие / закрытие мобильного меню
 */
function toggleMenuDrawer(forceState) {
    const drawer = document.getElementById('mobile-menu-drawer');
    const iconHamburger = document.getElementById('icon-hamburger');
    const iconClose = document.getElementById('icon-close');

    if (!drawer || !iconHamburger || !iconClose) return;

    const isHidden = drawer.classList.contains('hidden');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : isHidden;

    if (shouldOpen) {
        drawer.classList.remove('hidden');
        drawer.classList.add('flex');
        iconHamburger.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
        drawer.classList.remove('flex');
        iconHamburger.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
}

/**
 * ==========================================================================
 * УПРАВЛЕНИЕ ЯЗЫКОМ (i18n): ВЫПАДАЮЩЕЕ МЕНЮ И ПЕРЕКЛЮЧЕНИЕ
 * ==========================================================================
 */

/**
 * Открытие / закрытие выпадающего меню языков в шапке
 */
function toggleLangDropdown(eventOrState) {
    const menu = document.getElementById('lang-dropdown-menu');
    const btn = document.getElementById('lang-dropdown-btn');
    const caret = document.getElementById('header-lang-caret');
    if (!menu) return;

    let shouldOpen;
    if (typeof eventOrState === 'boolean') {
        shouldOpen = eventOrState;
    } else {
        if (eventOrState && typeof eventOrState.stopPropagation === 'function') {
            eventOrState.stopPropagation();
        }
        shouldOpen = menu.classList.contains('hidden');
    }

    if (shouldOpen) {
        menu.classList.remove('hidden');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (caret) caret.classList.add('rotate-180');
    } else {
        menu.classList.add('hidden');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (caret) caret.classList.remove('rotate-180');
    }
}

/**
 * Переключение языка на сайте
 */
function changeLanguage(lang, event) {
    if (event && typeof event.stopPropagation === 'function') {
        event.stopPropagation();
    }
    if (!['uk', 'en', 'ru'].includes(lang)) {
        lang = 'uk';
    }

    currentState.currentLang = lang;
    localStorage.setItem('evrika_lang', lang);

    // Закрываем меню
    toggleLangDropdown(false);

    // Применяем новые данные
    applyLanguageData(lang);

    // Обновляем весь UI
    updateUILanguage(lang);
}

/**
 * Полное обновление всех элементов интерфейса под выбранный язык
 */
function updateUILanguage(lang) {
    if (!['uk', 'en', 'ru'].includes(lang)) {
        lang = 'uk';
    }

    // 1. Тег <html> и <title>
    document.documentElement.lang = lang;
    if (SITE_DATA.pageTitle) {
        document.title = SITE_DATA.pageTitle;
        const titleEl = document.getElementById('site-head-title');
        if (titleEl) titleEl.textContent = SITE_DATA.pageTitle;
    }

    // 2. Логотип: буквы и подпись
    const logoLetters = document.getElementById('logo-letters');
    if (logoLetters && SITE_DATA.logo && Array.isArray(SITE_DATA.logo.letters)) {
        logoLetters.innerHTML = SITE_DATA.logo.letters.map(char => `<span>${char}</span>`).join('');
    }
    const logoSub = document.getElementById('logo-subtitle');
    if (logoSub && SITE_DATA.logo) {
        logoSub.textContent = SITE_DATA.logo.subtitle || 'дитячий клуб';
    }

    // 3. Выпадающее меню переключения языка в шапке
    const headerCode = document.getElementById('header-lang-code');
    if (headerCode) headerCode.textContent = SITE_DATA.langLabel || 'Укр';

    // Галочки в выпадающем окне
    ['uk', 'en', 'ru'].forEach(l => {
        const check = document.getElementById(`check-${l}`);
        if (check) {
            if (l === lang) {
                check.classList.remove('hidden');
            } else {
                check.classList.add('hidden');
            }
        }
    });

    // 4. Кнопки языка в выезжающем мобильном меню
    ['uk', 'en', 'ru'].forEach(l => {
        const drawerBtn = document.getElementById(`drawer-lang-${l}`);
        if (drawerBtn) {
            if (l === lang) {
                drawerBtn.className = 'px-2.5 py-1 rounded-xl text-xs font-black transition flex items-center gap-1 bg-white text-navy shadow-xs';
            } else {
                drawerBtn.className = 'px-2.5 py-1 rounded-xl text-xs font-bold text-navy hover:bg-white/60 transition flex items-center gap-1';
            }
        }
    });

    // 5. Кнопка записи на ПК в шапке
    const desktopCtaText = document.getElementById('desktop-cta-text');
    if (desktopCtaText) {
        desktopCtaText.textContent = (SITE_DATA.ui && SITE_DATA.ui.bookSpot) || 'Записатися';
    }

    // 6. Подписи нижнего меню (айфоновского таббара)
    const bnav = SITE_DATA.bottomNav || {};
    const lblHome = document.getElementById('bnav-label-home');
    const lblClubs = document.getElementById('bnav-label-clubs');
    const lblCal = document.getElementById('bnav-label-calendar');
    const lblProf = document.getElementById('bnav-label-profile');

    if (lblHome) lblHome.textContent = bnav.home || 'Головна';
    if (lblClubs) lblClubs.textContent = bnav.clubs || 'Гуртки';
    if (lblCal) lblCal.textContent = bnav.calendar || 'Календар';
    if (lblProf) lblProf.textContent = bnav.profile || 'Профіль';

    // 7. Текст копирайта в футере
    const copyEl = document.getElementById('footer-copyright');
    if (copyEl && SITE_DATA.ui) {
        copyEl.textContent = SITE_DATA.ui.copyright || '© Дитячий клуб «Еврика», м. Харків, вул. Любові Малої, 22';
    }

    // 8. Модальное окно записи
    updateBookingModalTexts();

    // 9. Перерисовываем страницы
    renderAllSections();
}

/**
 * Локализация полей модального окна записи
 */
function updateBookingModalTexts() {
    const bk = (SITE_DATA.modals && SITE_DATA.modals.booking) || {};
    
    const titleEl = document.getElementById('modal-title');
    const subEl = document.getElementById('modal-subtitle');
    const lblParent = document.getElementById('lbl-parent-name');
    const inParent = document.getElementById('parent-name');
    const lblChild = document.getElementById('lbl-child-name');
    const inChild = document.getElementById('child-name');
    const lblAge = document.getElementById('lbl-child-age');
    const selAge = document.getElementById('child-age');
    const lblPhone = document.getElementById('lbl-parent-phone');
    const lblDir = document.getElementById('lbl-booking-direction');
    const inDir = document.getElementById('booking-direction');
    const btnSubmit = document.getElementById('booking-submit-btn');

    if (titleEl) titleEl.textContent = bk.title || 'Записатися на заняття';
    if (subEl) subEl.textContent = bk.subtitle || 'Залиште контакти, і ми зателефонуємо вам протягом 15 хвилин';
    if (lblParent) lblParent.textContent = bk.parentNameLabel || 'Ваше ім\'я (Один із батьків) *';
    if (inParent && bk.parentNamePlaceholder) inParent.placeholder = bk.parentNamePlaceholder;
    if (lblChild) lblChild.textContent = bk.childNameLabel || 'Ім\'я дитини';
    if (inChild && bk.childNamePlaceholder) inChild.placeholder = bk.childNamePlaceholder;
    if (lblAge) lblAge.textContent = bk.childAgeLabel || 'Вік дитини';
    if (lblPhone) lblPhone.textContent = bk.phoneLabel || 'Телефон для зв\'язку *';
    if (lblDir) lblDir.textContent = bk.directionLabel || 'Напрямок або запитання';
    if (inDir && bk.directionPlaceholder) inDir.placeholder = bk.directionPlaceholder;
    if (btnSubmit) btnSubmit.textContent = bk.submitButton || 'Надіслати заявку';

    if (selAge && bk.ageOptions && Array.isArray(bk.ageOptions)) {
        const curVal = selAge.value;
        selAge.innerHTML = bk.ageOptions.map(opt => `
            <option value="${opt.value}" ${opt.selected || opt.value === curVal ? 'selected' : ''}>${opt.label}</option>
        `).join('');
    }
}

// Закрытие выпадающих и модальных окон при клике вне их границ
window.addEventListener('click', (e) => {
    const langWrapper = document.getElementById('lang-dropdown-wrapper');
    if (langWrapper && !langWrapper.contains(e.target)) {
        toggleLangDropdown(false);
    }

    const bookingModal = document.getElementById('booking-modal');
    const detailModal = document.getElementById('detail-modal');
    if (e.target === bookingModal) closeBookingModal();
    if (e.target === detailModal) closeDetailModal();
});

// Закрытие по клавише Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleLangDropdown(false);
        toggleMenuDrawer(false);
        closeBookingModal();
        closeDetailModal();
    }
});

// Инициализация одностраничного сайта после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
    const initialLang = currentState.currentLang || 'uk';
    applyLanguageData(initialLang);
    updateUILanguage(initialLang);
});
