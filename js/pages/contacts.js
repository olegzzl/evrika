/**
 * ==========================================================================
 * 8. СТРАНИЦА «КОНТАКТЫ»
 * Точное соответствие Экрану 9 референса:
 * г. Харьков, ул. Любови Малой, 22 • +38090000000 • Карта и форма
 * ==========================================================================
 */

function renderContactsPage() {
    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-2">Контакты</h1>
        <p class="text-sm sm:text-base text-navy/80 leading-relaxed mb-5">
            Мы всегда на связи!<br>Звоните, пишите, приходите в гости.
        </p>

        <!-- 3 контактных блока с синими круглыми иконками (Экран 9) -->
        <div class="space-y-4 mb-6">
            <!-- Телефон -->
            <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                </div>
                <div>
                    <a href="tel:${SITE_DATA.clubInfo.phone}" class="text-sm sm:text-base font-extrabold text-navy hover:text-brand-blue transition">
                        ${SITE_DATA.clubInfo.phone}
                    </a>
                    <p class="text-xs text-navy/65">${SITE_DATA.clubInfo.workHours}</p>
                </div>
            </div>

            <!-- Адрес -->
            <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div>
                    <div class="text-sm sm:text-base font-extrabold text-navy">
                        ${SITE_DATA.clubInfo.address}
                    </div>
                    <a href="#map-card" onclick="scrollToMap(event)" class="text-xs text-[#3B82F6] underline font-semibold">
                        Посмотреть на карте
                    </a>
                </div>
            </div>

            <!-- Почта -->
            <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div>
                    <a href="mailto:${SITE_DATA.clubInfo.email}" class="text-sm sm:text-base font-extrabold text-navy hover:text-brand-blue transition">
                        ${SITE_DATA.clubInfo.email}
                    </a>
                </div>
            </div>
        </div>

        <!-- Синяя овальная кнопка «Написать нам» во всю ширину (Экран 9) -->
        <button onclick="openBookingModal('Сообщение со страницы Контакты')" class="w-full py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm shadow-sm transition mb-5">
            Написать нам
        </button>

        <!-- Визуальная карта с пином «Эврика» точно как на Экране 9 + ссылка на Google Maps Харькова -->
        <div id="map-card" class="rounded-2xl overflow-hidden shadow-card border-2 border-white relative h-44 sm:h-56 bg-[#EEF2E6] mb-6">
            <!-- Стилизованная векторная схема кварталов и улиц (как на макете) -->
            <svg class="w-full h-full object-cover" viewBox="0 0 400 220" preserveAspectRatio="none">
                <rect width="400" height="220" fill="#F2EFE9"/>
                <!-- Парковые зоны -->
                <path d="M0 0 L120 0 L95 80 L0 60 Z" fill="#DCFCE7"/>
                <path d="M290 130 L400 110 L400 220 L260 220 Z" fill="#DCFCE7"/>
                <!-- Кварталы -->
                <rect x="130" y="15" width="90" height="55" rx="6" fill="#E7E5E4"/>
                <rect x="240" y="10" width="140" height="65" rx="6" fill="#E7E5E4"/>
                <rect x="20" y="95" width="110" height="95" rx="6" fill="#E7E5E4"/>
                <rect x="155" y="95" width="115" height="90" rx="6" fill="#E7E5E4"/>
                <!-- Дорожная сетка -->
                <path d="M0 80 L400 88" stroke="#FFFFFF" stroke-width="10"/>
                <path d="M140 0 L145 220" stroke="#FFFFFF" stroke-width="10"/>
                <path d="M280 0 L270 220" stroke="#FFFFFF" stroke-width="8"/>
                <path d="M0 195 L400 175" stroke="#FEF08A" stroke-width="7"/>
            </svg>

            <!-- Центральный бейдж с гео-пином «Эврика» как на макете -->
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div class="bg-white px-4 py-2 rounded-2xl shadow-soft flex items-center gap-2 border border-slate-100">
                    <svg class="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                    <div>
                        <div class="text-xs font-extrabold text-navy leading-none">Эврика</div>
                        <div class="text-[10px] text-navy/65 mt-0.5">ул. Любови Малой, 22</div>
                    </div>
                </div>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2+%D1%83%D0%BB+%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D0%B8+%D0%9C%D0%B0%D0%BB%D0%BE%D0%B9+22" 
               target="_blank" rel="noopener noreferrer"
               class="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-navy text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                Открыть Google Карты ↗
            </a>
        </div>

        <!-- Встроенная форма обратной связи -->
        <div class="bg-white rounded-3xl p-5 shadow-card border border-slate-100">
            <h3 class="text-base font-extrabold text-navy mb-1">Форма обратной связи</h3>
            <p class="text-xs text-navy/70 mb-4">Задайте вопрос или запишитесь на экскурсию по клубу</p>
            <form onsubmit="submitInlineContactForm(event)" class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" id="inline-name" required placeholder="Ваше имя *" class="w-full px-4 py-2.5 rounded-2xl bg-milk border border-slate-200 text-xs sm:text-sm text-navy focus:outline-none focus:border-brand-blue">
                    <input type="tel" id="inline-phone" required placeholder="Ваш телефон *" class="w-full px-4 py-2.5 rounded-2xl bg-milk border border-slate-200 text-xs sm:text-sm text-navy focus:outline-none focus:border-brand-blue">
                </div>
                <textarea id="inline-msg" rows="2" placeholder="Ваше сообщение или возраст ребёнка..." class="w-full px-4 py-2.5 rounded-2xl bg-milk border border-slate-200 text-xs sm:text-sm text-navy focus:outline-none focus:border-brand-blue"></textarea>
                <button type="submit" class="px-6 py-2.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm transition">
                    Отправить сообщение
                </button>
            </form>
        </div>
    </section>
    `;
}

/**
 * Скролл к карте
 */
function scrollToMap(e) {
    e.preventDefault();
    const mapEl = document.getElementById('map-card');
    if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Отправка контактной формы со страницы
 */
function submitInlineContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('inline-name').value;
    e.target.reset();
    showToast(`Спасибо, ${name}! Сообщение отправлено администратору клуба «Эврика».`);
}
