/**
 * ==========================================================================
 * 4. СТРАНИЦА «КРУЖКИ»
 * Точное соответствие Экрану 5 референса (мультиязычная версия)
 * ==========================================================================
 */

function renderClubsPage() {
    const cp = SITE_DATA.clubsPage || {};

    const clubsListHtml = (SITE_DATA.clubs || []).map((club, idx) => `
        <div onclick="openClubDetail('${club.id}')" 
             style="--stagger-delay: ${idx * 60}ms"
             class="reveal-card card-hover-lift bg-white rounded-2xl p-2.5 sm:p-3 shadow-card hover:shadow-soft transition flex items-center justify-between gap-3.5 cursor-pointer group border border-slate-100/80">
            <div class="flex items-center gap-3.5">
                <img src="${club.image}" 
                     alt="${club.title}"
                     onerror="this.src='https://placehold.co/200x200/E0F2FE/1E3A5F?text=${encodeURIComponent(club.title)}'"
                     class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0">
                <div>
                    <h3 class="text-sm sm:text-base font-extrabold text-navy group-hover:text-brand-blue transition">${club.title}</h3>
                    <p class="text-xs text-navy font-bold mt-0.5">${club.age}</p>
                    <p class="text-[11px] text-brand-blue font-bold mt-1 hidden sm:block">${club.schedule}</p>
                </div>
            </div>
            <div class="pr-2 text-navy/70 group-hover:text-navy group-hover:translate-x-0.5 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `).join('');

    // Инициализация Lottie анимации Moods после рендера страницы
    setTimeout(initClubsLottie, 50);

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="reveal-on-scroll text-2xl sm:text-3xl font-extrabold text-navy mb-2">${cp.title || 'Гуртки'}</h1>
        <p class="reveal-on-scroll text-sm sm:text-base text-navy font-medium mb-5">
            ${cp.description || 'Обирайте те, що подобається вашій дитині!'}
        </p>

        <!-- Список карточек кружков как на Экране 5 -->
        <div class="space-y-3 mb-6">
            ${clubsListHtml}
        </div>

        <!-- Блок призыва к действию (~2/3 ширины) + Lottie анимация Moods (квадрат справа) -->
        <div class="reveal-card flex items-stretch gap-3">
            <!-- Левая карточка: ~2/3 ширины с текстом и кнопкой записи -->
            <div class="card-hover-lift flex-1 min-w-0 bg-pastel-yellow/70 rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 border border-amber-200/50 shadow-card">
                <div>
                    <div class="text-xs sm:text-sm font-extrabold text-navy leading-snug">${cp.ctaBoxTitle || 'Не знаєте, який гурток обрати?'}</div>
                    <div class="text-[11px] sm:text-xs text-navy/80 font-medium mt-1 leading-relaxed">${cp.ctaBoxDesc || 'Приходьте на пробне заняття — дитина сама обере улюблену справу!'}</div>
                </div>
                <div>
                    <button onclick="openBookingModal('${cp.bookingSubject || 'Запис на пробне заняття в гурток'}')" class="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-navy text-white text-xs font-bold hover:bg-navy-light transition active:scale-95 text-center shadow-xs">
                        ${cp.ctaBoxBtn || 'Записатися на пробне'}
                    </button>
                </div>
            </div>

            <!-- Правый блок: один персонаж без белого фона -->
            <div id="clubs-lottie-moods-box" class="clubs-lottie-moods-box w-[108px] sm:w-[136px] md:w-[150px] shrink-0 aspect-square flex items-center justify-center cursor-pointer select-none" title="Дитячий клуб «Еврика»">
                <div id="clubs-lottie-player" class="w-full h-full flex items-center justify-center"></div>
            </div>
        </div>
    </section>
    `;
}

// Экземпляр Lottie анимации Moods на странице "Гуртки"
let clubsLottieAnim = null;

function initClubsLottie() {
    const container = document.getElementById('clubs-lottie-player');
    if (!container || typeof lottie === 'undefined') return;

    if (clubsLottieAnim) {
        try {
            clubsLottieAnim.destroy();
        } catch (e) {}
        clubsLottieAnim = null;
    }

    try {
        const animData = window.LOTTIE_MOODS_DATA;
        clubsLottieAnim = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animData || undefined,
            path: animData ? undefined : 'Lottie animation/Moods.json'
        });
    } catch (err) {
        console.error('Ошибка инициализации Lottie анимации Moods:', err);
    }
}

