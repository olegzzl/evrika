/**
 * ==========================================================================
 * 3. СТРАНИЦА «НАША ПРОГРАММА»
 * Точное соответствие Экрану 4 референса
 * ==========================================================================
 */

function renderProgramPage() {
    const cardsHtml = SITE_DATA.programs.map(prog => `
        <div onclick="openProgramDetail('${prog.id}')" class="${prog.bgClass} rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3.5 cursor-pointer hover:brightness-98 transition shadow-sm">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-full ${prog.circleClass} flex items-center justify-center shrink-0 shadow-sm">
                    ${getProgramIcon(prog.icon)}
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-bold text-navy leading-snug">${prog.title}</h3>
                    <span class="inline-block text-[11px] font-semibold text-navy/65 mt-0.5">Возраст: ${prog.age} • Нажмите для подробностей</span>
                </div>
            </div>
            <svg class="w-4 h-4 text-navy/50 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
        </div>
    `).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-2.5">Наша программа</h1>
        
        <p class="text-sm sm:text-base text-navy/85 leading-relaxed mb-5">
            Мы предлагаем комплексную программу развития для детей от 3 до 10 лет.
        </p>

        <!-- 4 цветные пастельные плашки точно как на Экране 4 -->
        <div class="space-y-3 mb-6">
            ${cardsHtml}
        </div>

        <p class="text-xs sm:text-sm text-navy/80 leading-relaxed mb-6">
            Занятия проходят в игровой форме, с учётом возраста и индивидуальных особенностей каждого ребёнка.
        </p>

        <!-- Возрастные ступени -->
        <div class="bg-white rounded-3xl p-5 shadow-card border border-white mb-6">
            <h3 class="text-sm font-extrabold text-navy mb-3">Возрастные группы клуба «Эврика»</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div class="p-3 rounded-2xl bg-milk">
                    <div class="font-extrabold text-brand-blue">Малыши 3–4 года</div>
                    <div class="text-navy/70 mt-1">Сенсорика, речь, музыкально-ритмические игры и творчество.</div>
                </div>
                <div class="p-3 rounded-2xl bg-milk">
                    <div class="font-extrabold text-amber-600">Почемучки 5–6 лет</div>
                    <div class="text-navy/70 mt-1">Подготовка к школе, английский, робототехника и шахматы.</div>
                </div>
                <div class="p-3 rounded-2xl bg-milk">
                    <div class="font-extrabold text-emerald-600">Школьники 7–10 лет</div>
                    <div class="text-navy/70 mt-1">Инженерные проекты, разговорный английский, арт и турниры.</div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-3">
            <button onclick="navigateTo('clubs')" class="px-6 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm shadow-sm transition">
                Выбрать кружок →
            </button>
            <button onclick="openBookingModal('Подбор программы по возрасту')" class="px-6 py-3 rounded-full bg-white border border-slate-200 text-navy font-bold text-sm hover:bg-slate-50 transition">
                Подобрать группу
            </button>
        </div>
    </section>
    `;
}
