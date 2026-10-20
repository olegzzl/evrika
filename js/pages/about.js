/**
 * ==========================================================================
 * 2. СТРАНИЦА «О НАШЕМ КЛУБЕ»
 * Точное соответствие Экрану 3 референса (мультиязычная версия)
 * ==========================================================================
 */

function renderAboutPage() {
    const ap = SITE_DATA.aboutPage || {};
    const ui = SITE_DATA.ui || {};
    const adv = ap.advantages || [
        {
            title: 'Затишна та безпечна атмосфера',
            desc: 'Світлі ігрові класи, екологічні меблі та турбота про комфорт кожного малюка.'
        },
        {
            title: 'Індивідуальний підхід до кожної дитини',
            desc: 'Невеликі групи до 8–10 дітей дозволяють приділити максимум уваги кожному.'
        },
        {
            title: 'Розвиток, творчість, дружба',
            desc: 'Гармонійне поєднання інтелектуальних, творчих та рухливих занять.'
        }
    ];

    // Инициализация Lottie анимации зеркального шара после рендера страницы
    setTimeout(initAboutLottie, 50);

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <div class="reveal-on-scroll flex items-center gap-2 sm:gap-2.5 mb-3">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-navy">${ap.title || 'Про наш клуб'}</h1>
            <!-- Синий персонаж (чудик) справа от текста "Про наш клуб" в высоту заглавной буквы -->
            <div id="about-mood-character-box" class="about-mood-character-box shrink-0 select-none cursor-pointer w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] flex items-center justify-center -mt-0.5" title="Дитячий клуб «Еврика»">
                <div id="about-mood-lottie-player" class="w-full h-full flex items-center justify-center"></div>
            </div>
        </div>
        
        <p class="reveal-on-scroll text-sm sm:text-base text-navy font-medium leading-relaxed mb-5">
            ${ap.description || '«Еврика» — це сучасний дитячий клуб, де кожна дитина може розкрити свій потенціал, знайти друзів та із задоволенням проводити час.'}
        </p>

        <!-- Фото уютной игровой комнаты в скруглённой карточке -->
        <div class="reveal-card rounded-3xl overflow-hidden shadow-soft border-4 border-white mb-6 bg-white">
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80" 
                 alt="${ap.altImage || 'Затишна ігрова кімната дитячого клубу Еврика'}"
                 onerror="this.src='https://placehold.co/800x500/FEF3C7/1E3A5F?text=Evrika+Club'"
                 class="w-full h-52 sm:h-72 object-cover">
        </div>

        <!-- 3 ключевых преимущества с контурными иконками (Сердце, Звезда, Росток как на Экране 3) -->
        <div class="space-y-4 mb-7">
            <!-- 1. Уютная и безопасная атмосфера -->
            <div style="--stagger-delay: 0ms" class="reveal-card card-hover-lift flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card border border-white">
                <div class="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center text-[#EF4444] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-extrabold text-navy leading-snug">${adv[0].title}</h3>
                    <p class="text-xs sm:text-sm text-navy font-medium mt-0.5">${adv[0].desc}</p>
                </div>
            </div>

            <!-- 2. Индивидуальный подход к каждому ребёнку -->
            <div style="--stagger-delay: 90ms" class="reveal-card card-hover-lift flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card border border-white">
                <div class="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center text-[#FBBF24] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-extrabold text-navy leading-snug">${adv[1].title}</h3>
                    <p class="text-xs sm:text-sm text-navy font-medium mt-0.5">${adv[1].desc}</p>
                </div>
            </div>

            <!-- 3. Развитие, творчество, дружба -->
            <div style="--stagger-delay: 180ms" class="reveal-card card-hover-lift flex items-center gap-4 bg-white/75 rounded-2xl p-3.5 shadow-card border border-white">
                <div class="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#22C55E] shrink-0">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-sm sm:text-base font-extrabold text-navy leading-snug">${adv[2].title}</h3>
                    <p class="text-xs sm:text-sm text-navy font-medium mt-0.5">${adv[2].desc}</p>
                </div>
            </div>
        </div>

        <!-- Кнопки перехода к программе и записи + Lottie анимация Mirror Ball -->
        <div class="reveal-card flex items-center justify-between gap-3 sm:gap-6 pt-1 pb-2">
            <div class="flex flex-col gap-2.5 flex-1 min-w-0 sm:flex-row sm:items-center sm:flex-initial">
                <button onclick="navigateTo('program')" class="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center">
                    ${ui.viewProgram || 'Дивитися нашу програму →'}
                </button>
                <button onclick="openBookingModal('${ap.tourModalSubject || 'Екскурсія клубом'}')" class="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-white text-navy border border-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-50 transition active:scale-95 text-center">
                    ${ui.bookIntro || 'Записатися на знайомство'}
                </button>
            </div>

            <!-- Диско-шар (mirror-ball) справа напротив двух кнопок для мобильной и десктопной версий -->
            <div id="about-lottie-mirror-ball-box" class="about-lottie-mirror-ball-box shrink-0 select-none cursor-pointer w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] md:w-[98px] md:h-[98px] flex items-center justify-center -mr-1" title="Дитячий клуб «Еврика»">
                <div id="about-lottie-player" class="w-full h-full flex items-center justify-center"></div>
            </div>
        </div>
    </section>
    `;
}

// Экземпляры Lottie анимаций на странице "О клубе"
let aboutLottieAnim = null;
let aboutMoodAnim = null;

function initAboutLottie() {
    // 1. Диско-шар возле кнопок перехода
    const ballContainer = document.getElementById('about-lottie-player');
    if (ballContainer && typeof lottie !== 'undefined') {
        if (aboutLottieAnim) {
            try { aboutLottieAnim.destroy(); } catch (e) {}
            aboutLottieAnim = null;
        }

        try {
            const animData = window.LOTTIE_MIRROR_BALL_DATA;
            aboutLottieAnim = lottie.loadAnimation({
                container: ballContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animData || undefined,
                path: animData ? undefined : 'Lottie animation/mirror-ball.json'
            });
        } catch (err) {
            console.error('Ошибка инициализации Lottie анимации диско-шара:', err);
        }
    }

    // 2. Синий персонаж (чудик) слева от описания клуба
    const moodContainer = document.getElementById('about-mood-lottie-player');
    if (moodContainer && typeof lottie !== 'undefined') {
        if (aboutMoodAnim) {
            try { aboutMoodAnim.destroy(); } catch (e) {}
            aboutMoodAnim = null;
        }

        try {
            const moodData = window.LOTTIE_MOODS_DATA;
            aboutMoodAnim = lottie.loadAnimation({
                container: moodContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: moodData || undefined,
                path: moodData ? undefined : 'Lottie animation/Moods.json'
            });
        } catch (err) {
            console.error('Ошибка инициализации Lottie анимации чудика:', err);
        }
    }
}
