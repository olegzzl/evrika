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
            <button onclick="${clickHandler}" class="flex flex-col items-center justify-start group cursor-pointer transition transform active:scale-95 py-1.5 px-1 rounded-2xl hover:bg-slate-50">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 group-hover:scale-110 transition duration-200">
                    ${getTopMenuIcon(item.icon)}
                </div>
                <span class="text-[11px] sm:text-xs font-bold text-navy group-hover:text-brand-blue transition text-center leading-tight">
                    ${item.title}
                </span>
            </button>
        `;
    }).join('');

    const carouselPhotos = (SITE_DATA.gallery || []).map(item => `
        <div class="home-placeholder-card">
            <img src="${item.image}" alt="${item.title || 'Фотозаглушка'}" loading="lazy"
                 onerror="this.style.display='none'; this.parentElement.classList.add('home-placeholder-fallback');">
            <span>${item.title || 'Фото скоро появится'}</span>
        </div>
    `).join('');

    return `
    <section class="page-transition home-page-bg relative h-full w-full flex flex-col justify-between overflow-hidden"
             style="background-image: url('images/fon.jpg'), url('Ref photo/Fon.jpg'); background-size: cover; background-position: center top; background-repeat: no-repeat;">
        <style>
            .home-photo-carousel { width: 100%; overflow: hidden; margin-top: auto; padding: 12px 0 0; }
            .home-photo-track { display: flex; width: max-content; gap: 12px; animation: home-photo-scroll 38s linear infinite; }
            .home-photo-carousel.is-paused .home-photo-track { animation-play-state: paused; }
            .home-placeholder-card { position: relative; flex: 0 0 auto; width: 34vw; max-width: 190px; min-width: 118px; aspect-ratio: 4 / 5; overflow: hidden; border: 3px solid rgba(255,255,255,.9); border-radius: 20px; background: linear-gradient(135deg,#fde68a,#fbcfe8 52%,#bfdbfe); box-shadow: 0 5px 16px rgba(30,41,59,.12); }
            .home-placeholder-card img { width: 100%; height: 100%; display: block; object-fit: cover; }
            .home-placeholder-card span { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 8px 9px; color: white; font-size: 11px; line-height: 1.25; font-weight: 700; background: linear-gradient(transparent,rgba(15,23,42,.68)); }
            .home-placeholder-fallback span { top: 50%; bottom: auto; transform: translateY(-50%); padding: 12px; color: #334155; background: transparent; text-align: center; }
            @keyframes home-photo-scroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 6px)); } }
            @media (prefers-reduced-motion: reduce) { .home-photo-track { animation: none; } }
        </style>
        <div class="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-between px-5 pt-3 sm:pt-5 pb-0 md:px-8 relative">

            <!-- Верхняя приветственная часть (Hero): чистый заголовок и кнопки без солнышка -->
            <div class="relative z-20 shrink-0">
                <h1 class="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-navy leading-[1.18] tracking-tight mb-2">
                    Место, где<br>детство становится<br>ярче!
                </h1>

                <p class="text-xs sm:text-sm text-navy/85 font-medium leading-relaxed mb-3 max-w-md">
                    ${SITE_DATA.clubInfo.subTagline}
                </p>

                <!-- Кнопки действия (Жёлтая овальная кнопка + Записаться) -->
                <div class="flex flex-wrap items-center gap-2.5">
                    <button onclick="navigateTo('about')" class="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#FDE047] hover:bg-[#FACC15] text-navy font-extrabold text-xs sm:text-sm shadow-sm transition transform active:scale-95">
                        Узнать больше
                    </button>
                    <button onclick="openBookingModal('Пробное занятие со скидкой')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 text-navy border border-slate-200 font-bold text-xs sm:text-sm shadow-card transition">
                        Записаться
                    </button>
                </div>
            </div>

            <!-- ВЕРХНЕЕ МЕНЮ (Точное соответствие референсу «Верхнее меню.jpg»: 8 иконок в белой карточке 4x2) -->
            <div class="bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-5 shadow-soft border border-white z-20 my-auto shrink-0">
                <div class="grid grid-cols-4 gap-y-3 gap-x-1 sm:gap-x-3">
                    ${topMenuButtonsHtml}
                </div>
            </div>

            <!-- ЛЕНТА ФОТОЗАГЛУШЕК ВМЕСТО ОДИНОЧНОЙ ФОТОГРАФИИ VIOLET -->
            <div class="home-photo-carousel relative z-10 shrink-0" aria-label="Фотографии детского клуба">
                <div class="home-photo-track">
                    ${carouselPhotos}
                    ${carouselPhotos}
                </div>
            </div>

        </div>
    </section>
    `;
}
