/**
 * ==========================================================================
 * 5. СТРАНИЦА «НАШИ ВОСПИТАТЕЛИ»
 * Точное соответствие Экрану 6 референса (мультиязычная версия)
 * ==========================================================================
 */

function renderTeachersPage() {
    const tp = SITE_DATA.teachersPage || {};
    const teachersList = SITE_DATA.teachers || [];
    const visibleTeachers = currentState.showAllTeachers 
        ? teachersList 
        : teachersList.slice(0, 4);

    const teachersHtml = visibleTeachers.map(t => {
        const imgUrl = t.imageOverride || t.image;
        const cleanExperience = (typeof tp.cleanExp === 'function') 
            ? tp.cleanExp(t.experience) 
            : t.experience.replace(' (Демо-профиль)', '').replace(' (Demo profile)', '');

        return `
        <div onclick="openTeacherDetail('${t.id}')" 
             class="bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col cursor-pointer border border-slate-100/90 hover:-translate-y-1 active:scale-[0.98] group">
            
            <!-- Портретная плитка фото 4 на 5 -->
            <div class="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-2.5 sm:mb-3 shrink-0 aspect-[4/5]" style="aspect-ratio: 4 / 5;">
                <img src="${imgUrl}" 
                     alt="${t.name}"
                     loading="lazy"
                     onerror="this.src='https://placehold.co/400x500/DCFCE7/1E3A5F?text=Teacher'"
                     class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
            </div>

            <!-- Информация под фото -->
            <div class="flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xs sm:text-sm md:text-base font-extrabold text-navy leading-tight group-hover:text-brand-blue transition-colors">
                        ${t.name}
                    </h3>
                    <p class="text-[11px] sm:text-xs text-navy font-medium mt-1 leading-snug line-clamp-2">
                        ${t.role}
                    </p>
                </div>
                <div class="mt-2.5 pt-2 border-t border-slate-100/90 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-brand-blue">
                    <span class="truncate">${cleanExperience}</span>
                    <span class="text-navy/70 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all text-xs font-bold">→</span>
                </div>
            </div>
        </div>
        `;
    }).join('');

    const toggleBtnText = currentState.showAllTeachers
        ? (tp.allBtnCollapse || 'Згорнути список вихователів')
        : (typeof tp.allBtnExpand === 'function' ? tp.allBtnExpand(teachersList.length) : `Всі вихователі (${teachersList.length})`);

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-2">${tp.title || 'Наші вихователі'}</h1>
        <p class="text-sm sm:text-base text-navy font-medium leading-relaxed mb-5">
            ${tp.description || 'З нами працюють турботливі, досвідчені та закохані у свою справу педагоги.'}
        </p>

        <!-- Карточки воспитателей: сетка по 2 плитки в ряд пропорцией 4:5 -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4.5 mb-6">
            ${teachersHtml}
        </div>

        <!-- Овальная кнопка «Все воспитатели» -->
        <button onclick="toggleAllTeachers()" class="w-full py-3 rounded-full border-2 border-[#60A5FA] text-[#2563EB] hover:bg-pastel-blue/40 font-bold text-sm transition active:scale-[0.99]">
            ${toggleBtnText}
        </button>
    </section>
    `;
}

/**
 * Переключатель раскрытия полного списка воспитателей
 */
function toggleAllTeachers() {
    currentState.showAllTeachers = !currentState.showAllTeachers;
    const section = document.getElementById('section-teachers');
    if (section) {
        section.innerHTML = renderTeachersPage();
    } else {
        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = renderTeachersPage();
        }
    }
}
