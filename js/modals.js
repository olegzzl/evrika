/**
 * ==========================================================================
 * МОДАЛЬНЫЕ ОКНА И УВЕДОМЛЕНИЯ КЛУБА «ЭВРИКА»
 * Запись на занятия, просмотр деталей кружка/педагога/фото и всплывающие тосты
 * ==========================================================================
 */

/**
 * Открытие модального окна записи
 */
function openBookingModal(directionText = 'Пробное занятие') {
    const modal = document.getElementById('booking-modal');
    const dirInput = document.getElementById('booking-direction');
    if (dirInput) {
        dirInput.value = directionText;
    }
    if (modal) {
        modal.classList.remove('hidden');
    }
}

/**
 * Закрытие модального окна записи
 */
function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * Отправка формы записи
 */
function submitBookingForm(e) {
    e.preventDefault();
    const parentName = document.getElementById('parent-name').value;
    const direction = document.getElementById('booking-direction').value;
    closeBookingModal();
    e.target.reset();
    showToast(`Спасибо, ${parentName}! Ваша заявка (${direction}) принята. Мы свяжемся с вами в ближайшее время.`);
}

/**
 * Всплывающее уведомление (Toast)
 */
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 4200);
}

/**
 * Детальная карточка кружка
 */
function openClubDetail(clubId) {
    const club = SITE_DATA.clubs.find(c => c.id === clubId);
    if (!club) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="relative h-48 sm:h-56 bg-slate-100">
            <img src="${club.image}" alt="${club.title}" class="w-full h-full object-cover">
            <button onclick="closeDetailModal()" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <span class="absolute bottom-3 left-4 bg-brand-yellow text-navy text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                ${club.age}
            </span>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-extrabold text-navy mb-2">${club.title}</h3>
            <p class="text-xs sm:text-sm text-navy font-medium leading-relaxed mb-4">${club.description}</p>
            <div class="bg-white rounded-2xl p-3.5 space-y-1.5 text-xs mb-5 border border-slate-100">
                <div class="flex justify-between"><span class="text-navy font-bold">Расписание:</span><span class="font-extrabold text-navy">${club.schedule}</span></div>
                <div class="flex justify-between"><span class="text-navy font-bold">Размер группы:</span><span class="font-extrabold text-navy">${club.groupSize}</span></div>
                <div class="flex justify-between"><span class="text-navy font-bold">Стоимость:</span><span class="font-extrabold text-brand-blue">${club.demoPrice}</span></div>
            </div>
            <button onclick="closeDetailModal(); openBookingModal('Кружок: ${club.title}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm shadow-sm transition">
                Записаться в кружок «${club.title}»
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
}

/**
 * Детальная карточка программы развития
 */
function openProgramDetail(progId) {
    const prog = SITE_DATA.programs.find(p => p.id === progId);
    if (!prog) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-full ${prog.circleClass} flex items-center justify-center">
                    ${getProgramIcon(prog.icon)}
                </div>
                <button onclick="closeDetailModal()" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <span class="inline-block text-xs font-extrabold text-brand-blue bg-pastel-blue px-3 py-1 rounded-full mb-2">
                Возрастная группа: ${prog.age}
            </span>
            <h3 class="text-xl font-extrabold text-navy mb-2">${prog.title}</h3>
            <p class="text-sm text-navy font-medium leading-relaxed mb-5">${prog.details}</p>
            <button onclick="closeDetailModal(); openBookingModal('Программа: ${prog.title}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm transition">
                Записаться на направление
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
}

/**
 * Детальная карточка воспитателя
 */
function openTeacherDetail(teacherId) {
    const t = SITE_DATA.teachers.find(item => item.id === teacherId);
    if (!t) return;
    const imgUrl = t.imageOverride || t.image;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="p-6">
            <div class="flex items-start justify-between gap-4 mb-4">
                <div class="flex items-center gap-4">
                    <img src="${imgUrl}" alt="${t.name}" class="w-20 h-20 rounded-2xl object-cover object-top shadow-sm">
                    <div>
                        <h3 class="text-lg font-extrabold text-navy">${t.name}</h3>
                        <p class="text-xs font-bold text-brand-blue mt-0.5">${t.role}</p>
                        <p class="text-[11px] text-navy font-bold mt-1">${t.experience}</p>
                    </div>
                </div>
                <button onclick="closeDetailModal()" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <p class="text-xs sm:text-sm text-navy font-medium leading-relaxed mb-5">${t.bio}</p>
            <button onclick="closeDetailModal(); openBookingModal('Запись к педагогу: ${t.name}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm transition">
                Записаться в группу педагога
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
}

/**
 * Просмотр полноразмерного фото из галереи
 */
function openGalleryLightbox(photoId) {
    const photo = SITE_DATA.gallery.find(p => p.id === photoId);
    if (!photo) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="relative bg-navy">
            <img src="${photo.image}" alt="${photo.title}" class="w-full max-h-[70vh] object-contain">
            <button onclick="closeDetailModal()" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="p-4 flex items-center justify-between">
            <div>
                <span class="text-[11px] font-bold text-brand-blue">${photo.category}</span>
                <h4 class="text-sm font-extrabold text-navy">${photo.title}</h4>
            </div>
            <button onclick="closeDetailModal(); openBookingModal('Хочу на занятие')" class="px-4 py-2 rounded-full bg-brand-yellow text-navy text-xs font-extrabold">
                Записаться
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
}

/**
 * Закрытие модального окна деталей
 */
function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * Модальное окно отзывов родителей (пункт Отзывы в Верхнем меню)
 */
function openReviewsModal() {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    if (!modal || !body) return;

    const reviewsHtml = (SITE_DATA.reviews || []).map(r => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div class="flex items-center justify-between mb-2">
                <div>
                    <h4 class="text-sm font-extrabold text-navy">${r.name}</h4>
                    <span class="text-[11px] text-navy font-bold">${r.child}</span>
                </div>
                <div class="flex items-center text-amber-400 text-xs">
                    ★ ★ ★ ★ ★
                </div>
            </div>
            <p class="text-xs text-navy font-medium leading-relaxed">${r.text}</p>
        </div>
    `).join('');

    body.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-extrabold text-navy">Отзывы родителей</h3>
                        <p class="text-xs text-navy font-bold">Детский клуб «Эврика» • Средняя оценка: 5.0</p>
                    </div>
                </div>
                <button onclick="closeDetailModal()" aria-label="Закрыть" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="space-y-3 max-h-[60vh] overflow-y-auto pr-1 mb-5">
                ${reviewsHtml}
            </div>

            <div class="flex gap-2.5">
                <button onclick="closeDetailModal(); openBookingModal('Запись по отзыву родителей')" class="flex-1 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm transition">
                    Записаться на занятие
                </button>
                <button onclick="closeDetailModal(); showToast('Спасибо за интерес! Напишите нам в Telegram для публикации отзыва.')" class="px-5 py-3 rounded-full bg-white border border-slate-200 text-navy font-bold text-xs sm:text-sm hover:bg-slate-50 transition">
                    Оставить отзыв
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

/**
 * Модальное окно профиля / личного кабинета (пункт Профиль в Нижнем меню)
 */
function openProfileModal() {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-2xl bg-pink-100 flex items-center justify-center text-[#F472B6]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-extrabold text-navy">Личный кабинет родителя</h3>
                        <p class="text-xs text-navy font-bold">Детский клуб «Эврика»</p>
                    </div>
                </div>
                <button onclick="closeDetailModal()" aria-label="Закрыть" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="bg-white rounded-2xl p-4 border border-slate-100 mb-4 space-y-2">
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">Статус абонемента:</span>
                    <span class="font-bold text-brand-green bg-green-50 px-2.5 py-0.5 rounded-full">Демо-доступ активен</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">Ваш филиал:</span>
                    <span class="font-bold text-navy">Харьков, ул. Любови Малой, 22</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">Связь с администратором:</span>
                    <a href="tel:${SITE_DATA.clubInfo.phone}" class="font-bold text-brand-blue">${SITE_DATA.clubInfo.phone}</a>
                </div>
            </div>

            <div class="space-y-2.5">
                <button onclick="closeDetailModal(); openBookingModal('Запись на кружок из профиля')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm transition">
                    Записаться в новую группу
                </button>
                <button onclick="closeDetailModal(); navigateTo('contacts')" class="w-full py-2.5 rounded-full bg-white border border-slate-200 text-navy font-bold text-xs sm:text-sm hover:bg-slate-50 transition">
                    Связаться с клубом
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

