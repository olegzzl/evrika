/**
 * ==========================================================================
 * 9. РАЗДЕЛ «ОТЗЫВЫ РОДИТЕЛЕЙ»
 * Блок с реальными отзывами родителей детского клуба «Эврика»
 * ==========================================================================
 */

function renderReviewsPage() {
    const reviewsHtml = (SITE_DATA.reviews || []).map(r => `
        <div class="bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-white hover:shadow-soft transition duration-200">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                        ${r.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="text-sm sm:text-base font-extrabold text-navy leading-snug">${r.name}</h4>
                        <span class="text-xs text-navy font-bold">${r.child}</span>
                    </div>
                </div>
                <div class="flex items-center text-amber-400 text-sm gap-0.5" aria-label="Оценка 5 из 5">
                    ★ ★ ★ ★ ★
                </div>
            </div>
            <p class="text-xs sm:text-sm text-navy leading-relaxed font-medium">${r.text}</p>
        </div>
    `).join('');

    return `
    <section class="max-w-3xl mx-auto w-full">
        <div class="flex items-center justify-between gap-3 mb-2">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-navy">Отзывы родителей</h2>
            <div class="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-navy shadow-sm border border-white shrink-0">
                <span class="text-amber-500">★</span> 5.0 • Харьков
            </div>
        </div>
        <p class="text-sm sm:text-base text-navy font-medium mb-5">
            Что говорят мамы и папы о детском клубе «Эврика»:
        </p>

        <!-- Список отзывов -->
        <div class="space-y-3.5 mb-6">
            ${reviewsHtml}
        </div>

        <!-- Кнопки действий -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onclick="openBookingModal('Запись по отзыву родителей')" class="py-3.5 px-6 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-black text-sm shadow-sm transition transform active:scale-95 text-center">
                Записаться на занятие
            </button>
            <button onclick="showToast('Спасибо за интерес! Напишите нам в Telegram для публикации отзыва.')" class="py-3.5 px-6 rounded-full bg-white border border-slate-200 text-navy font-bold text-sm hover:bg-slate-50 transition transform active:scale-95 text-center shadow-xs">
                Оставить отзыв
            </button>
        </div>
    </section>
    `;
}
