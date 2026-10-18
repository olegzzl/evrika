/**
 * ==========================================================================
 * ГЛАВНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ «ЭВРИКА» (ОДНОСТРАНИЧНЫЙ САЙТ И НАВИГАЦИЯ)
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
 * Рендер всех секций одностраничного сайта в заданном порядке:
 * 1. Главная страница
 * 2. Галерея
 * 3. О клубе (с разделом Программа)
 * 4. Кружки
 * 5. Календарь
 * 6. Воспитатели
 * 7. Отзывы
 * 8. Контакты
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
}

/**
 * Рендер элементов навигации:
 * 1. Мобильное выпадающее меню
 * 2. Десктопное меню в шапке
 * 3. Нижний переключатель
 */
function renderNavigationElements() {
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
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-navy/40 group-hover:text-navy group-hover:bg-navy/5 group-hover:translate-x-0.5 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </button>
            `;
        }).join('');
    }

    // Нижний переключатель (если отображается на ПК)
    const switcherBar = document.getElementById('screen-switcher-bar');
    if (switcherBar) {
        switcherBar.innerHTML = SITE_DATA.navigation.map(item => {
            const isActive = currentState.currentPage === item.id;
            return `
            <button onclick="navigateTo('${item.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-bold transition whitespace-nowrap ${isActive ? 'bg-navy text-white shadow-sm' : 'text-navy/70 hover:bg-navy/5'}">
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
            btn.className = 'nav-pill px-3 py-1.5 rounded-full text-sm font-bold text-navy/75 hover:text-navy hover:bg-navy/5 transition';
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
        // Учитываем высоту приклеенной шапки
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

// Закрытие модальных окон при клике на оверлей
window.addEventListener('click', (e) => {
    const bookingModal = document.getElementById('booking-modal');
    const detailModal = document.getElementById('detail-modal');
    if (e.target === bookingModal) closeBookingModal();
    if (e.target === detailModal) closeDetailModal();
});

// Инициализация одностраничного сайта после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
    renderAllSections();
});
