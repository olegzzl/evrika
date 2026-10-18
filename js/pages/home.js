/**
 * ==========================================================================
 * 1. СТРАНИЦА «ГЛАВНАЯ»
 * Фон: Fon.jpg из папки Ref photo (волнистый пастельный фон)
 * Элементы:
 * - Приветственный блок (Заголовок, подзаголовок, кнопки действия)
 * - Карточка «Верхнее меню» (8 цветных иконок 4x2 по референсу Верхнее меню.jpg)
 * - Автоматически прокручиваемая лента фотозаглушек
 * ==========================================================================
 */

function renderHomePage() {
    // 8 пунктов Верхнего меню точно как на референсе Верхнее меню.jpg
    const topMenuButtonsHtml = (SITE_DATA.topMenuItems || []).map(item => {
        const clickHandler = item.id === 'reviews'
            ? `openReviewsModal()`
            : `navigateTo('${item.id}')`;

        return `
            <button onclick="${clickHandler}" class="flex flex-col items-center justify-start group cursor-pointer transition transform active:scale-95 py-1 px-1 rounded-2xl hover:bg-slate-50">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-0.5 group-hover:scale-110 transition duration-200">
                    ${getTopMenuIcon(item.icon)}
                </div>
                <span class="text-[11px] sm:text-xs font-bold text-navy group-hover:text-brand-blue transition text-center leading-tight">
                    ${item.title}
                </span>
            </button>
        `;
    }).join('');

    // Список фотографий для карусели на главной (с заглушками Unsplash)
    const heroPhotos = [
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80', alt: 'Творчество детей' },
        { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80', alt: 'Развивающие игры' },
        { src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=600&q=80', alt: 'Рисование и лепка' },
        { src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80', alt: 'Робототехника' },
        { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80', alt: 'Дружная атмосфера' }
    ];

    const photosSlidesHtml = heroPhotos.map(p => `
        <div class="shrink-0 w-44 sm:w-56 h-28 sm:h-36 rounded-2xl overflow-hidden shadow-card border-2 border-white/80 bg-white">
            <img src="${p.src}" alt="${p.alt}" class="w-full h-full object-cover select-none pointer-events-none" loading="lazy">
        </div>
    `).join('');

    // Запуск автоскролла после рендера страницы
    setTimeout(initHeroCarousel, 50);

    return `
    <section class="page-transition home-page-bg relative h-full w-full flex flex-col justify-between overflow-hidden"
             style="background-image: url('images/fon.jpg'), url('Ref photo/Fon.jpg'); background-size: cover; background-position: center top; background-repeat: no-repeat;">
        
        <!-- Верхняя часть: Приветствие + Карусель фото -->
        <div class="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-between px-5 pt-3 sm:pt-4 pb-2 md:px-8 relative z-20">
            
            <!-- Приветственный блок (Hero) -->
            <div class="shrink-0">
                <h1 class="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-navy leading-[1.18] tracking-tight mb-1.5">
                    Место, где<br>детство становится<br>ярче!
                </h1>

                <p class="text-xs sm:text-sm text-navy/85 font-medium leading-relaxed mb-2.5 max-w-md">
                    ${SITE_DATA.clubInfo.subTagline}
                </p>

                <!-- Кнопки действия -->
                <div class="flex flex-wrap items-center gap-2.5">
                    <button onclick="navigateTo('about')" class="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#FDE047] hover:bg-[#FACC15] text-navy font-extrabold text-xs sm:text-sm shadow-sm transition transform active:scale-95">
                        Узнать больше
                    </button>
                    <button onclick="openBookingModal('Пробное занятие со скидкой')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 text-navy border border-slate-200 font-bold text-xs sm:text-sm shadow-card transition">
                        Записаться
                    </button>
                </div>
            </div>

            <!-- Карточка с 8 иконками: на прежнем месте по центру -->
            <div class="bg-white/95 backdrop-blur-md rounded-3xl px-3 py-2 sm:px-5 sm:py-3 shadow-soft border border-white z-20 my-auto shrink-0">
                <div class="grid grid-cols-4 gap-y-1.5 sm:gap-y-2 gap-x-1 sm:gap-x-3">
                    ${topMenuButtonsHtml}
                </div>
            </div>

            <!-- Интерактивная карусель фотографий (внизу, вместо статичной квадратной фотографии) -->
            <div class="relative w-full mt-auto mb-1 z-20 py-1">
                <!-- Стрелка влево -->
                <button onclick="scrollHeroCarousel(-1)" aria-label="Предыдущее фото" class="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 shadow-card border border-slate-200/60 flex items-center justify-center text-navy hover:bg-white active:scale-90 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>

                <!-- Контейнер скролла с плавным движением -->
                <div id="hero-photos-carousel" class="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth px-1 py-1 cursor-grab active:cursor-grabbing">
                    ${photosSlidesHtml}
                </div>

                <!-- Стрелка вправо -->
                <button onclick="scrollHeroCarousel(1)" aria-label="Следующее фото" class="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 shadow-card border border-slate-200/60 flex items-center justify-center text-navy hover:bg-white active:scale-90 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>

        </div>

    </section>
    `;
}

/**
 * Управление каруселью фотографий на главной:
 * - Плавное медленное автодвижение
 * - Приостановка при ручном взаимодействии (пальцем/мышкой)
 * - Кнопки со стрелками по бокам
 */
let heroCarouselInterval = null;

function initHeroCarousel() {
    const el = document.getElementById('hero-photos-carousel');
    if (!el) return;

    if (heroCarouselInterval) {
        clearInterval(heroCarouselInterval);
        heroCarouselInterval = null;
    }

    let isUserInteracting = false;
    let resumeTimeout = null;

    const pauseMotion = () => {
        isUserInteracting = true;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
            isUserInteracting = false;
        }, 3500);
    };

    el.addEventListener('touchstart', pauseMotion, { passive: true });
    el.addEventListener('mousedown', pauseMotion, { passive: true });
    el.addEventListener('wheel', pauseMotion, { passive: true });

    // Плавное автодвижение вправо
    heroCarouselInterval = setInterval(() => {
        if (isUserInteracting || !document.getElementById('hero-photos-carousel')) return;

        // Если долистали до конца — плавно возвращаемся в начало
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            el.scrollBy({ left: 1, behavior: 'auto' });
        }
    }, 35);
}

function scrollHeroCarousel(direction) {
    const el = document.getElementById('hero-photos-carousel');
    if (!el) return;
    el.scrollBy({ left: direction * 220, behavior: 'smooth' });
}

