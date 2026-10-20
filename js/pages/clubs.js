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

        <div class="reveal-card card-hover-lift bg-pastel-yellow/70 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
                <div class="text-xs font-extrabold text-navy">${cp.ctaBoxTitle || 'Не знаєте, який гурток обрати?'}</div>
                <div class="text-xs text-navy font-medium">${cp.ctaBoxDesc || 'Приходьте на пробне заняття — дитина сама обере улюблену справу!'}</div>
            </div>
            <button onclick="openBookingModal('${cp.bookingSubject || 'Запис на пробне заняття в гурток'}')" class="px-5 py-2.5 rounded-full bg-navy text-white text-xs font-bold shrink-0 hover:bg-navy-light transition active:scale-95">
                ${cp.ctaBoxBtn || 'Записатися на пробне'}
            </button>
        </div>
    </section>
    `;
}
