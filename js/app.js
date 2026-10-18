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
        mobileList.innerHTML = (SITE_DATA.topMenuItems || []).map(item => {
            const isActive = currentState.currentPage === item.id;
            const clickHandler = item.id === 'reviews'
                ? `toggleMenuDrawer(false); openReviewsModal();`
                : `navigateTo('${item.id}')`;

            return `
            <button onclick="${clickHandler}" class="w-full flex items-center justify-between py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-2xl transition group ${isActive ? 'bg-amber-50/90 border border-amber-200/60 shadow-xs' : 'hover:bg-slate-50 active:scale-98'}">
                <div class="flex items-center gap-3 sm:gap-3.5">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-200">
                        ${getTopMenuIcon(item.icon)}
                    </div>
                    <span class="text-sm sm:text-base font-bold text-navy group-hover:text-brand-blue transition">${item.title}</span>
                </div>
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-navy/40 group-hover:text-navy group-hover:bg-navy/5 group-hover:translate-x-0.5 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
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

    // Подсветка активной кнопки в приклеенном нижнем меню (100% насыщенность, без полупрозрачности)
    const bottomNavMapping = {
        home: document.getElementById('bnav-home'),
        clubs: document.getElementById('bnav-clubs'),
        calendar: document.getElementById('bnav-calendar')
    };

    ['home', 'clubs', 'calendar'].forEach(key => {
        const btn = bottomNavMapping[key];
        if (btn) {
            btn.classList.remove('opacity-70');
            btn.classList.add('opacity-100');
            const label = btn.querySelector('.bnav-label');
            if (currentState.currentPage === key) {
                btn.classList.add('scale-105');
                if (label) label.className = 'bnav-label text-[11px] font-extrabold text-navy mt-1';
            } else {
                btn.classList.remove('scale-105');
                if (label) label.className = 'bnav-label text-[11px] font-bold text-navy mt-1';
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
        if (pageId === 'home' || window.innerWidth < 768) {
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
