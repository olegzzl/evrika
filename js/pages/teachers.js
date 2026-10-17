/**
 * ==========================================================================
 * 5. СТРАНИЦА «НАШИ ВОСПИТАТЕЛИ»
 * Точное соответствие Экрану 6 референса
 * ==========================================================================
 */

function renderTeachersPage() {
    const visibleTeachers = currentState.showAllTeachers 
        ? SITE_DATA.teachers 
        : SITE_DATA.teachers.slice(0, 3);

    const teachersHtml = visibleTeachers.map(t => {
        const imgUrl = t.imageOverride || t.image;
        return `
        <div onclick="openTeacherDetail('${t.id}')" class="bg-white rounded-2xl p-3 shadow-card hover:shadow-soft transition flex items-center gap-4 cursor-pointer border border-slate-100/80">
            <img src="${imgUrl}" 
                 alt="${t.name}"
                 onerror="this.src='https://placehold.co/200x200/DCFCE7/1E3A5F?text=Педагог'"
                 class="w-20 h-20 rounded-xl object-cover shrink-0 object-top">
            <div class="flex-1">
                <h3 class="text-sm sm:text-base font-extrabold text-navy">${t.name}</h3>
                <p class="text-xs text-navy/70 mt-1 leading-snug">${t.role}</p>
                <p class="text-[11px] text-brand-blue font-semibold mt-1.5">${t.experience}</p>
            </div>
        </div>
        `;
    }).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-2">Наши воспитатели</h1>
        <p class="text-sm sm:text-base text-navy/80 leading-relaxed mb-5">
            С нами работают заботливые, опытные и увлечённые своим делом педагоги.
        </p>

        <!-- Карточки воспитателей как на Экране 6 -->
        <div class="space-y-3.5 mb-6">
            ${teachersHtml}
        </div>

        <!-- Овальная кнопка с синей обводкой «Все воспитатели» как на Экране 6 -->
        <button onclick="toggleAllTeachers()" class="w-full py-3 rounded-full border-2 border-[#60A5FA] text-[#2563EB] hover:bg-pastel-blue/40 font-bold text-sm transition">
            ${currentState.showAllTeachers ? 'Свернуть список воспитателей' : 'Все воспитатели (' + SITE_DATA.teachers.length + ')'}
        </button>
    </section>
    `;
}

/**
 * Переключатель раскрытия полного списка воспитателей
 */
function toggleAllTeachers() {
    currentState.showAllTeachers = !currentState.showAllTeachers;
    const container = document.getElementById('main-content');
    if (container) {
        container.innerHTML = renderTeachersPage();
    }
}
