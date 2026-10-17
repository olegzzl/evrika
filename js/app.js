/**
 * ==========================================================================
 * ГЛАВНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ «ЭВРИКА» (РОУТИНГ И ИНИЦИАЛИЗАЦИЯ)
 * ==========================================================================
 */

/**
 * Рендер элементов навигации:
 * 1. Мобильное выпадающее меню (Экран 2 референса)
 * 2. Нижняя панель быстрого перехода между всеми 8 экранами
 * 3. Десктопное меню
 */
function renderNavigationElements() {
    const mobileList = document.getElementById('mobile-menu-list');
    if (mobileList) {
        mobileList.innerHTML = SITE_DATA.navigation.map(item => {
            const isActive = currentState.currentPage === item.id;
            return `
            <button onclick="navigateTo('${item.id}')" class="w-full flex items-center justify-between py-2.5 px-3 rounded-2xl transition ${isActive ? 'bg-white shadow-card' : 'hover:bg-white/60'}">
                <div class="flex items-center gap-3.5">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: ${item.bg}; color: ${item.color}">
                        ${getMenuIcon(item.icon, item.color)}
                    </div>
                    <span class="text-sm font-bold text-navy">${item.title}</span>
                </div>
                <svg class="w-4 h-4 text-navy/40" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
            `;
        }).join('');
    }

    // Нижний переключатель всех страниц для мгновенного перехода
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

    // Подсветка активной ссылки в десктопном меню
    document.querySelectorAll('.nav-pill').forEach(btn => {
        const page = btn.getAttribute('data-nav');
        if (page === currentState.currentPage) {
            btn.className = 'nav-pill px-3 py-1.5 rounded-full text-sm font-extrabold bg-brand-yellow text-navy transition';
        } else {
            btn.className = 'nav-pill px-3 py-1.5 rounded-full text-sm font-bold text-navy/75 hover:text-navy hover:bg-navy/5 transition';
        }
    });

    // Подсветка активной кнопки в приклеенном нижнем меню (Нижнее меню.jpg)
    const bottomNavMapping = {
        home: document.getElementById('bnav-home'),
        clubs: document.getElementById('bnav-clubs'),
        calendar: document.getElementById('bnav-calendar')
    };

    ['home', 'clubs', 'calendar'].forEach(key => {
        const btn = bottomNavMapping[key];
        if (btn) {
            if (currentState.currentPage === key) {
                btn.classList.add('scale-105', 'opacity-100');
                btn.classList.remove('opacity-70');
                const label = btn.querySelector('.bnav-label');
                if (label) label.className = 'bnav-label text-[11px] font-extrabold text-navy mt-1';
            } else {
                btn.classList.remove('scale-105', 'opacity-100');
                btn.classList.add('opacity-70');
                const label = btn.querySelector('.bnav-label');
                if (label) label.className = 'bnav-label text-[11px] font-bold text-navy/70 mt-1';
            }
        }
    });
}


/**
 * Переход на выбранную страницу сайта
 */
function navigateTo(pageId) {
    currentState.currentPage = pageId;
    toggleMenuDrawer(false);

    // Управляем классом активной страницы (для изоляции стилей главной)
    if (pageId === 'home') {
        document.body.classList.add('page-home-active');
    } else {
        document.body.classList.remove('page-home-active');
    }

    // Старый подвал со списком разделов полностью скрываем на главной и в мобильном режиме
    const footer = document.getElementById('site-footer');
    if (footer) {
        if (pageId === 'home' || document.body.classList.contains('mobile-frame-mode') || window.innerWidth < 768) {
            footer.classList.add('hidden');
        } else {
            footer.classList.remove('hidden');
        }
    }

    const container = document.getElementById('main-content');
    if (!container) return;

    switch (pageId) {
        case 'home': 
            container.innerHTML = renderHomePage(); 
            break;
        case 'about': 
            container.innerHTML = renderAboutPage(); 
            break;
        case 'program': 
            container.innerHTML = renderProgramPage(); 
            break;
        case 'clubs': 
            container.innerHTML = renderClubsPage(); 
            break;
        case 'teachers': 
            container.innerHTML = renderTeachersPage(); 
            break;
        case 'gallery': 
            container.innerHTML = renderGalleryPage(); 
            break;
        case 'calendar': 
            container.innerHTML = renderCalendarPage(); 
            break;
        case 'contacts': 
            container.innerHTML = renderContactsPage(); 
            break;
        default: 
            container.innerHTML = renderHomePage();
    }

    renderNavigationElements();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Открытие / закрытие мобильного полноэкранного меню (Экран 2 референса)
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
 * Переключение между адаптивным режимом (ПК + телефон) и рамкой смартфона (как на макете)
 */
function setViewportMode(mode) {
    const body = document.body;
    const btnResp = document.getElementById('btn-mode-responsive');
    const btnMob = document.getElementById('btn-mode-mobile');
    const desktopNav = document.getElementById('desktop-nav');
    const desktopCta = document.getElementById('desktop-cta');

    if (!btnResp || !btnMob) return;

    const footer = document.getElementById('site-footer');

    if (mode === 'mobile') {
        body.classList.add('mobile-frame-mode');
        if (desktopNav) desktopNav.classList.remove('lg:flex');
        if (desktopCta) desktopCta.classList.remove('sm:inline-flex');
        if (footer) footer.classList.add('hidden');
        btnMob.className = 'px-2.5 py-1 rounded-md bg-brand-blue text-white font-semibold transition';
        btnResp.className = 'px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition';
    } else {
        body.classList.remove('mobile-frame-mode');
        if (desktopNav) desktopNav.classList.add('lg:flex');
        if (desktopCta) desktopCta.classList.add('sm:inline-flex');
        if (footer && currentState.currentPage !== 'home') footer.classList.remove('hidden');
        btnResp.className = 'px-2.5 py-1 rounded-md bg-brand-blue text-white font-semibold transition';
        btnMob.className = 'px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition';
    }
}

// Закрытие модальных окон при клике на оверлей
window.addEventListener('click', (e) => {
    const bookingModal = document.getElementById('booking-modal');
    const detailModal = document.getElementById('detail-modal');
    if (e.target === bookingModal) closeBookingModal();
    if (e.target === detailModal) closeDetailModal();
});

// Инициализация сайта после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
