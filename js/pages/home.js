/**
 * ==========================================================================
 * 1. СТРАНИЦА «ГЛАВНАЯ»
 * Фон: Fon.jpg из папки Ref photo (волнистый пастельный фон)
 * Элементы:
 * - Приветственный блок (Заголовок, подзаголовок, кнопки действия)
 * - Карточка «Верхнее меню» (8 цветных иконок 4x2 по референсу Верхнее меню.jpg)
 * - Фотография Violet (прозрачный PNG), привязанная к нижнему краю фона
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

    return `
    <section class="page-transition home-page-bg relative h-full w-full flex flex-col justify-between overflow-hidden"
             style="background-image: url('images/fon.jpg'), url('Ref photo/Fon.jpg'); background-size: cover; background-position: center top; background-repeat: no-repeat;">
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

            <!-- ФОТОГРАФИЯ VIOLET, привязанная к нижнему краю фона -->
            <div class="w-full flex justify-center items-end mt-auto z-10 shrink-0 leading-none">
                <img id="violet-hero-img"
                     src="images/violet.png" 
                     onerror="this.onerror=null; this.src='Ref photo/Violet.png'; this.src='Ref photo/Violet.jpg';" 
                     alt="Ребенок в детском клубе Эврика" 
                     class="block mx-auto max-h-[28vh] sm:max-h-[32vh] md:max-h-[38vh] max-w-[340px] sm:max-w-[400px] md:max-w-[460px] object-contain object-bottom drop-shadow-md cursor-pointer select-none -mb-px">
            </div>

        </div>
    </section>
    `;
}
