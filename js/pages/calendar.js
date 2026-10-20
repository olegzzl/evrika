/**
 * ==========================================================================
 * 7. СТРАНИЦА «КАЛЕНДАРЬ СОБЫТИЙ»
 * Точное соответствие Экрану 8 референса с интерактивом выбора дней (мультиязычная)
 * ==========================================================================
 */

function renderCalendarPage() {
    if (typeof syncCalendarMonths === 'function') {
        syncCalendarMonths();
    }
    const calMonths = (typeof CALENDAR_MONTHS !== 'undefined' && CALENDAR_MONTHS.length) 
        ? CALENDAR_MONTHS 
        : (SITE_DATA.calendarMonths || []);

    const monthObj = calMonths[currentState.calendarMonthIndex] || calMonths[0] || { name: 'Квітень 2026', short: 'квіт', daysInMonth: 30, startOffset: 1 };
    const calP = SITE_DATA.calendarPage || {};
    const ui = SITE_DATA.ui || {};

    const eventDaysMap = {};
    (SITE_DATA.calendarEvents || []).forEach(ev => {
        eventDaysMap[ev.day] = ev;
    });

    // Пустые ячейки перед 1 числом месяца
    let calendarCellsHtml = '';
    for (let i = 0; i < monthObj.startOffset; i++) {
        calendarCellsHtml += `<div class="h-8"></div>`;
    }

    for (let d = 1; d <= monthObj.daysInMonth; d++) {
        const ev = eventDaysMap[d];
        const isSelected = currentState.selectedCalendarDay === d;
        if (ev) {
            const bgColor = d === 25 ? 'bg-[#F87171] text-white' : 'bg-[#2563EB] text-white';
            calendarCellsHtml += `
                <button onclick="selectCalendarDay(${d})" class="w-8 h-8 mx-auto rounded-full ${bgColor} font-extrabold text-xs flex items-center justify-center shadow-sm transform hover:scale-110 transition ${isSelected ? 'ring-4 ring-brand-yellow' : ''}">
                    ${d}
                </button>
            `;
        } else {
            calendarCellsHtml += `
                <button onclick="selectCalendarDay(${d})" class="w-8 h-8 mx-auto rounded-full text-navy hover:bg-slate-100 font-bold text-xs flex items-center justify-center transition ${isSelected ? 'bg-pastel-yellow font-extrabold' : ''}">
                    ${d}
                </button>
            `;
        }
    }

    // Список карточек событий под календарём
    const eventsListHtml = (SITE_DATA.calendarEvents || []).map((ev, idx) => {
        const isHighlighted = currentState.selectedCalendarDay === ev.day;
        const bookingPrompt = (typeof calP.bookingSubject === 'function')
            ? calP.bookingSubject(ev.title, ev.day, monthObj.short)
            : `Запис на подію: ${ev.title} (${ev.day} ${monthObj.short})`;

        return `
        <div onclick="openBookingModal('${bookingPrompt.replace(/'/g, "\\'")}')" 
             style="--stagger-delay: ${idx * 60}ms"
             class="reveal-card card-hover-lift flex items-center justify-between gap-3.5 p-3 rounded-2xl transition duration-200 cursor-pointer ${isHighlighted ? 'bg-white shadow-soft ring-2 ring-brand-blue border border-brand-blue/30' : 'bg-white shadow-sm border border-slate-100 hover:shadow-card hover:border-slate-200 active:scale-[0.99]'}">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-full ${ev.badgeBg} ${ev.badgeText} flex flex-col items-center justify-center shrink-0 leading-none shadow-sm">
                    <span class="text-xs font-extrabold">${ev.day}</span>
                    <span class="text-[10px] font-bold">${monthObj.short}</span>
                </div>
                <div>
                    <h3 class="text-xs sm:text-sm font-extrabold text-navy leading-snug">${ev.title}</h3>
                    <p class="text-[11px] text-navy font-bold mt-0.5">${ev.time} • ${ev.age}</p>
                </div>
            </div>
            <span class="text-[11px] font-bold text-brand-blue shrink-0 px-2.5 py-1 rounded-full bg-pastel-blue/60 hover:bg-brand-blue hover:text-white transition">
                ${calP.bookBtn || 'Запис'}
            </span>
        </div>
        `;
    }).join('');

    const daysHeaderHtml = (ui.calendarHeaderDays || ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'])
        .map(d => `<div>${d}</div>`).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="reveal-on-scroll text-2xl sm:text-3xl font-extrabold text-navy mb-4">${calP.title || 'Календар подій'}</h1>

        <!-- Карточка сетки календаря как на Экране 8 -->
        <div class="reveal-card bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-slate-100 mb-5">
            <!-- Переключатель месяца -->
            <div class="flex items-center justify-between mb-4 px-2">
                <button onclick="changeCalendarMonth(-1)" aria-label="${ui.prevMonth || 'Попередній місяць'}" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-navy transition active:scale-90">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="text-sm sm:text-base font-extrabold text-navy">${monthObj.name}</div>
                <button onclick="changeCalendarMonth(1)" aria-label="${ui.nextMonth || 'Наступний місяць'}" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-navy transition active:scale-90">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>

            <!-- Дни недели -->
            <div class="grid grid-cols-7 text-center text-[11px] font-extrabold text-navy mb-2">
                ${daysHeaderHtml}
            </div>

            <!-- Числа месяца -->
            <div class="grid grid-cols-7 gap-y-1.5 text-center items-center">
                ${calendarCellsHtml}
            </div>
        </div>

        <!-- Список мероприятий с цветными кружками дат (Экран 8) -->
        <div class="space-y-2.5">
            ${eventsListHtml}
        </div>
    </section>
    `;
}

/**
 * Переключение месяца в календаре
 */
function changeCalendarMonth(delta) {
    if (typeof syncCalendarMonths === 'function') {
        syncCalendarMonths();
    }
    const calMonths = (typeof CALENDAR_MONTHS !== 'undefined' && CALENDAR_MONTHS.length) 
        ? CALENDAR_MONTHS 
        : (SITE_DATA.calendarMonths || []);

    const next = currentState.calendarMonthIndex + delta;
    if (next >= 0 && next < calMonths.length) {
        currentState.calendarMonthIndex = next;
        currentState.selectedCalendarDay = null;
        const section = document.getElementById('section-calendar');
        if (section) {
            section.innerHTML = renderCalendarPage();
            if (typeof initAppearanceAnimations === 'function') {
                initAppearanceAnimations(section);
            }
        } else {
            const container = document.getElementById('main-content');
            if (container) {
                container.innerHTML = renderCalendarPage();
                if (typeof initAppearanceAnimations === 'function') {
                    initAppearanceAnimations(container);
                }
            }
        }
    }
}

/**
 * Выбор дня в календаре
 */
function selectCalendarDay(day) {
    currentState.selectedCalendarDay = day;
    const section = document.getElementById('section-calendar');
    if (section) {
        section.innerHTML = renderCalendarPage();
        if (typeof initAppearanceAnimations === 'function') {
            initAppearanceAnimations(section);
        }
    } else {
        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = renderCalendarPage();
            if (typeof initAppearanceAnimations === 'function') {
                initAppearanceAnimations(container);
            }
        }
    }
}
