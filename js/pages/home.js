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

    // Фотографии клуба из папки «Club photoes» в живых фигурных пузырях
    const baseHeroPhotos = [
        {
            src: 'Club photoes/photo_2026-10-18_19-46-06.jpg',
            alt: 'Детский клуб Эврика - Занятия',
            shape: 'blob-shape-1',
            trackItem: 'blob-track-item-1'
        },
        {
            src: 'Club photoes/photo_2026-10-18_19-46-07.jpg',
            alt: 'Детский клуб Эврика - Обучение',
            shape: 'blob-shape-2',
            trackItem: 'blob-track-item-2'
        },
        {
            src: 'Club photoes/photo_2026-10-18_19-46-08.jpg',
            alt: 'Детский клуб Эврика - Творчество',
            shape: 'blob-shape-3',
            trackItem: 'blob-track-item-3'
        },
        {
            src: 'Club photoes/photo_2026-10-18_19-46-10 (2).jpg',
            alt: 'Детский клуб Эврика - Развитие',
            shape: 'blob-shape-1',
            trackItem: 'blob-track-item-4'
        },
        {
            src: 'Club photoes/photo_2026-10-18_19-46-10.jpg',
            alt: 'Детский клуб Эврика - Атмосфера',
            shape: 'blob-shape-2',
            trackItem: 'blob-track-item-5'
        },
        {
            src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=80',
            alt: 'Развивающие игры',
            shape: 'blob-shape-3',
            trackItem: 'blob-track-item-6'
        }
    ];

    // Дублируем массив 3 раза для создания непрерывного кругового цикла (инфинити)
    const infinitePhotos = [...baseHeroPhotos, ...baseHeroPhotos, ...baseHeroPhotos];

    const photosSlidesHtml = infinitePhotos.map(p => `
        <div class="blob-item ${p.shape} ${p.trackItem} select-none">
            <img src="${p.src}" alt="${p.alt}" class="pointer-events-none" loading="lazy">
        </div>
    `).join('');

    // Запуск автоскролла после рендера страницы
    setTimeout(initHeroCarousel, 50);

    return `
    <section class="page-transition home-page-bg relative min-h-full w-full flex flex-col justify-between">
        
        <!-- Верхняя часть: Приветствие + Карточка меню (аккуратно центрирована) -->
        <div class="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-start px-5 pt-3 sm:pt-4 pb-2 md:px-8 relative z-20">
            
            <!-- Приветственный блок (Hero) -->
            <div class="shrink-0 pt-1">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <h1 class="text-[28px] sm:text-3xl md:text-4xl font-black text-navy leading-[1.15] tracking-tight">
                        Место, где<br>детство становится<br>ярче!
                    </h1>
                    <!-- Солнышко в верхнем правом углу: центр по высоте совпадает со строчкой «детство становится», а по горизонтали расположен точно под иконкой телефона в шапке -->
                    <div class="hero-sun-box shrink-0 select-none pointer-events-none">
                        <img src="Club photoes/Sun.png" alt="Солнышко" class="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] md:w-[96px] md:h-[96px] object-contain drop-shadow-sm">
                    </div>
                </div>

                <p class="text-sm sm:text-base text-navy/90 font-bold leading-relaxed mb-3 max-w-lg">
                    ${SITE_DATA.clubInfo.subTagline}
                </p>

                <!-- Крупные кнопки действия: одинаковая геометрия, без лишних обводок и эффектов -->
                <div class="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-3.5 mb-1.5">
                    <button onclick="navigateTo('about')" class="w-full py-3.5 sm:py-4 px-3 sm:px-4 rounded-[30px] sm:rounded-[36px] bg-[#FDE047] hover:bg-[#FACC15] text-navy font-black text-sm sm:text-base shadow-sm transition transform active:scale-95 flex items-center justify-center text-center">
                        Узнать больше
                    </button>
                    <button onclick="openBookingModal('Пробное занятие со скидкой')" class="w-full py-3.5 sm:py-4 px-3 sm:px-4 rounded-[30px] sm:rounded-[36px] bg-[#10B981] hover:bg-[#059669] text-white font-black text-sm sm:text-base shadow-sm transition transform active:scale-95 flex items-center justify-center text-center">
                        Записаться
                    </button>
                </div>
            </div>

            <!-- Карточка с 8 иконками: слегка опущена на мобильной версии (mt-4 sm:mt-5) -->
            <div class="bg-white/95 backdrop-blur-md rounded-3xl px-3 py-2 sm:px-5 sm:py-3 shadow-soft border border-white z-20 mt-4 sm:mt-5 mb-2 shrink-0">
                <div class="grid grid-cols-4 gap-y-1.5 sm:gap-y-2 gap-x-1 sm:gap-x-3">
                    ${topMenuButtonsHtml}
                </div>
            </div>

        </div>

        <!-- Интерактивная карусель фотографий: НА ВСЮ ШИРИНУ ОТ САМОГО КРАЯ САЙТА (без скрывающих слоёв и обрезки) -->
        <div class="relative w-full mt-auto mb-2 sm:mb-3 -translate-y-[20px] z-20 py-1">
            <!-- Стрелка влево -->
            <button onclick="scrollHeroCarousel(-1)" aria-label="Предыдущее фото" class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 shadow-card border border-slate-200/60 flex items-center justify-center text-navy hover:bg-white active:scale-90 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <!-- Контейнер скролла с достаточным запасом снизу, чтобы пузыри не обрезались -->
            <div id="hero-photos-carousel" class="w-full flex items-center overflow-x-auto no-scrollbar pt-8 sm:pt-10 pb-12 sm:pb-16 px-0 cursor-grab active:cursor-grabbing select-none">
                ${photosSlidesHtml}
            </div>

            <!-- Стрелка вправо -->
            <button onclick="scrollHeroCarousel(1)" aria-label="Следующее фото" class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 shadow-card border border-slate-200/60 flex items-center justify-center text-navy hover:bg-white active:scale-90 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>

    </section>
    `;
}

/**
 * Бесшовная круговая карусель фотографий:
 * - Бесконечный цикл по кругу (при листании влево и вправо)
 * - Автоматическое плавное вращение
 * - Пауза при касании/свайпе/кликах
 * - Поддержка свайпа и мыши (drag-to-scroll)
 */
let heroCarouselInterval = null;
let pauseHeroCarouselMotion = null;

function initHeroCarousel() {
    const el = document.getElementById('hero-photos-carousel');
    if (!el) return;

    if (heroCarouselInterval) {
        clearInterval(heroCarouselInterval);
        heroCarouselInterval = null;
    }

    // Выставляем начальную позицию в средний блок дубликатов для свободного скролла в обе стороны
    const setInitialPos = () => {
        const loopWidth = el.scrollWidth / 3;
        if (loopWidth > 0 && (el.scrollLeft === 0 || el.scrollLeft < 10)) {
            el.scrollLeft = loopWidth;
        }
    };
    setInitialPos();
    requestAnimationFrame(setInitialPos);

    let isUserInteracting = false;
    let resumeTimeout = null;

    const pauseMotion = () => {
        isUserInteracting = true;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
            isUserInteracting = false;
        }, 3500);
    };

    pauseHeroCarouselMotion = pauseMotion;

    el.addEventListener('touchstart', pauseMotion, { passive: true });
    el.addEventListener('wheel', pauseMotion, { passive: true });

    // Drag-to-scroll для мыши на ПК
    let isMouseDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    el.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - el.offsetLeft;
        startScrollLeft = el.scrollLeft;
        pauseMotion();
    });

    window.addEventListener('mouseup', () => {
        if (isMouseDown) {
            isMouseDown = false;
        }
    });

    el.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        pauseMotion();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.2;
        el.scrollLeft = startScrollLeft - walk;
        checkInfiniteLoop();
    });

    // Функция проверки и мгновенного закольцовывания без видимого скачка
    const checkInfiniteLoop = () => {
        const loopWidth = el.scrollWidth / 3;
        if (loopWidth <= 0) return;

        // Если докрутили вправо дальше второго набора — перепрыгиваем назад на 1 набор
        if (el.scrollLeft >= loopWidth * 2) {
            el.scrollLeft -= loopWidth;
        }
        // Если прокрутили влево в начало первого набора — перепрыгиваем вперёд на 1 набор
        else if (el.scrollLeft <= 15) {
            el.scrollLeft += loopWidth;
        }
    };

    el.addEventListener('scroll', checkInfiniteLoop, { passive: true });

    // Плавное медленное автодвижение по 1 пикселю
    heroCarouselInterval = setInterval(() => {
        if (isUserInteracting || !document.getElementById('hero-photos-carousel')) return;

        checkInfiniteLoop();
        el.scrollLeft += 1;
    }, 30);
}

function scrollHeroCarousel(direction) {
    const el = document.getElementById('hero-photos-carousel');
    if (!el) return;
    
    if (typeof pauseHeroCarouselMotion === 'function') {
        pauseHeroCarouselMotion();
    }

    const step = 250; // шаг одной фигурной формы
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
}

