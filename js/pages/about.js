/**
 * ==========================================================================
 * 2. СТРАНИЦА «О НАШЕМ КЛУБЕ»
 * Точное соответствие Экрану 3 референса
 * ==========================================================================
 */

function renderAboutPage() {
    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-3">О нашем клубе</h1>
        
        <p class="text-sm sm:text-base text-navy/85 leading-relaxed mb-5">
            Эврика — это современный детский клуб, где каждый ребёнок может раскрыть свой потенциал, найти друзей и с удовольствием проводить время.
        </p>

        <!-- Фото уютной игровой комнаты в скруглённой карточке -->
        <div class="rounded-3xl overflow-hidden shadow-soft border-4 border-white mb-6 bg-white">
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80" 
                 alt="Уютная игровая комната детского клуба Эврика"
                 onerror="this.src='https://placehold.co/800x500/FEF3C7/1E3A5F?text=Интерьер+клуба+Эврика'"
                 class="w-full h-52 sm:h-72 object-cover">
        </div>

        <!-- 3 ключевых преимущества с контурными иконками (Сердце, Звезда, Росток как на Экране 3) -->
        <div class="space-y-4 mb-7">
            <!-- 1. Уютная и безопасная атмосфера -->
            <div class="flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card">
                <div class="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center text-[#EF4444] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-bold text-navy leading-snug">Уютная и безопасная атмосфера</h3>
                    <p class="text-xs text-navy/65 mt-0.5">Светлые игровые классы, экологичная мебель и забота о комфорте каждого малыша.</p>
                </div>
            </div>

            <!-- 2. Индивидуальный подход к каждому ребёнку -->
            <div class="flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card">
                <div class="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center text-[#FBBF24] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-bold text-navy leading-snug">Индивидуальный подход к каждому ребёнку</h3>
                    <p class="text-xs text-navy/65 mt-0.5">Небольшие группы до 8–10 детей позволяют уделить максимум внимания каждому.</p>
                </div>
            </div>

            <!-- 3. Развитие, творчество, дружба -->
            <div class="flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card">
                <div class="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#22C55E] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-bold text-navy leading-snug">Развитие, творчество, дружба</h3>
                    <p class="text-xs text-navy/65 mt-0.5">Гармоничное сочетание интеллектуальных, творческих и подвижных занятий.</p>
                </div>
            </div>
        </div>

        <!-- Кнопки перехода к программе и записи -->
        <div class="flex flex-wrap items-center gap-3">
            <button onclick="navigateTo('program')" class="px-6 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm shadow-sm transition">
                Смотреть нашу программу →
            </button>
            <button onclick="openBookingModal('Экскурсия по клубу')" class="px-6 py-3 rounded-full bg-white text-navy border border-slate-200 font-bold text-sm hover:bg-slate-50 transition">
                Записаться на знакомство
            </button>
        </div>
    </section>
    `;
}
