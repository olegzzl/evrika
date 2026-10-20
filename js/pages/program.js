/**
 * ==========================================================================
 * 3. СТРАНИЦА «НАША ПРОГРАММА»
 * Точное соответствие Экрану 4 референса (мультиязычная версия)
 * ==========================================================================
 */

function renderProgramPage() {
    const pp = SITE_DATA.programPage || {};
    const ui = SITE_DATA.ui || {};
    const ageGrps = SITE_DATA.ageGroups || { title: 'Вікові групи клубу «Еврика»', items: [] };

    const cardsHtml = (SITE_DATA.programs || []).map((prog, idx) => `
        <div onclick="openProgramDetail('${prog.id}')" 
             style="--stagger-delay: ${idx * 65}ms"
             class="reveal-card card-hover-lift ${prog.bgClass} rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3.5 cursor-pointer hover:brightness-98 transition shadow-sm border border-transparent hover:border-black/5">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-full ${prog.circleClass} flex items-center justify-center shrink-0 shadow-sm">
                    ${getProgramIcon(prog.icon)}
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-extrabold text-navy leading-snug">${prog.title}</h3>
                    <span class="inline-block text-[11px] font-bold text-navy mt-0.5">${pp.cardAgePrefix || 'Вік:'} ${prog.age} • ${pp.cardClickHint || 'Натисніть для деталей'}</span>
                </div>
            </div>
            <svg class="w-4 h-4 text-navy/80 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
        </div>
    `).join('');

    const ageGroupsHtml = (ageGrps.items || []).map((g, idx) => `
        <div style="--stagger-delay: ${idx * 70}ms" class="p-3 rounded-2xl bg-milk border border-slate-100">
            <div class="font-extrabold ${g.colorClass}">${g.title}</div>
            <div class="text-navy font-medium mt-1">${g.desc}</div>
        </div>
    `).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="reveal-on-scroll text-2xl sm:text-3xl font-extrabold text-navy mb-2.5">${pp.title || 'Наша програма'}</h1>
        
        <p class="reveal-on-scroll text-sm sm:text-base text-navy font-medium leading-relaxed mb-5">
            ${pp.description || 'Ми пропонуємо комплексну програму розвитку для дітей від 3 до 10 років.'}
        </p>

        <!-- 4 цветные пастельные плашки точно как на Экране 4 -->
        <div class="space-y-3 mb-6">
            ${cardsHtml}
        </div>

        <p class="reveal-on-scroll text-xs sm:text-sm text-navy font-medium leading-relaxed mb-6">
            ${pp.note || 'Заняття проходять в ігровій формі, з урахуванням віку та індивідуальних особливостей кожної дитини.'}
        </p>

        <!-- Возрастные ступени -->
        <div class="reveal-card bg-white rounded-3xl p-5 shadow-card border border-white mb-6">
            <h3 class="text-sm font-extrabold text-navy mb-3">${ageGrps.title}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                ${ageGroupsHtml}
            </div>
        </div>

        <div class="reveal-card flex flex-wrap gap-3">
            <button onclick="navigateTo('clubs')" class="px-6 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm shadow-sm transition active:scale-95">
                ${ui.chooseClub || 'Обрати гурток →'}
            </button>
            <button onclick="openBookingModal('${pp.programSelectSubject || 'Підбір програми за віком'}')" class="px-6 py-3 rounded-full bg-white border border-slate-200 text-navy font-bold text-sm hover:bg-slate-50 transition active:scale-95">
                ${ui.findGroup || 'Підібрати групу'}
            </button>
        </div>
    </section>
    `;
}
