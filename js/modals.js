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
 * Состояние галерейного лайтбокса (просмотр и перелистывание фото)
 */
let currentGalleryPhotos = [];
let currentGalleryIndex = 0;
let galleryKeydownHandler = null;
let galleryTouchStartX = 0;
let galleryTouchStartY = 0;

/**
 * Просмотр полноразмерного фото из галереи в едином одинаковом контейнере с перелистыванием
 */
function openGalleryLightbox(photoId) {
    let photos = (SITE_DATA && SITE_DATA.gallery) ? SITE_DATA.gallery : [];
    
    if (typeof currentState !== 'undefined' && currentState.galleryFilter && currentState.galleryFilter !== 'Все') {
        const filtered = photos.filter(p => p.category === currentState.galleryFilter);
        if (filtered.some(p => p.id === photoId)) {
            photos = filtered;
        }
    }

    if (!photos || photos.length === 0) return;

    currentGalleryPhotos = photos;
    const foundIdx = currentGalleryPhotos.findIndex(p => p.id === photoId);
    currentGalleryIndex = foundIdx >= 0 ? foundIdx : 0;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    if (!modal || !body) return;

    renderGalleryLightboxModal(body);
    modal.classList.remove('hidden');

    // Подключаем стрелки клавиатуры (← → Esc) и свайпы для мобильных
    setupGalleryLightboxListeners();
}

/**
 * Отрисовка лайтбокса галереи с фиксированным одинаковым контейнером
 */
function renderGalleryLightboxModal(body) {
    const photo = currentGalleryPhotos[currentGalleryIndex];
    if (!photo) return;
    const total = currentGalleryPhotos.length;
    const isFiltered = typeof currentState !== 'undefined' && currentState.galleryFilter && currentState.galleryFilter !== 'Все' && total < (SITE_DATA.gallery ? SITE_DATA.gallery.length : 0);

    // Точки индикаторы
    const dotsHtml = currentGalleryPhotos.map((p, idx) => {
        const isActive = idx === currentGalleryIndex;
        return `
            <button onclick="goToGalleryLightboxIndex(${idx}, event)" 
                    aria-label="Перейти к фото ${idx + 1}"
                    class="transition-all duration-300 rounded-full cursor-pointer ${isActive ? 'w-5 h-2 bg-brand-yellow' : 'w-2 h-2 bg-white/50 hover:bg-white'}">
            </button>
        `;
    }).join('');

    body.innerHTML = `
        <!-- ЕДИНЫЙ ФИКСИРОВАННЫЙ КОНТЕЙНЕР ДЛЯ ВСЕХ ФОТО (одинаковая высота и пропорции) -->
        <div id="gallery-lightbox-container" class="relative w-full h-[320px] sm:h-[400px] max-h-[60vh] bg-slate-950 overflow-hidden flex items-center justify-center select-none">
            
            <!-- Мягкий эмбиент-размытый фон текущего фото (заполняет поля без пустых полос) -->
            <div id="lightbox-bg-blur" 
                 class="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-35 scale-125 transition-all duration-300 pointer-events-none" 
                 style="background-image: url('${photo.image}')">
            </div>
            <div class="absolute inset-0 bg-navy/60 pointer-events-none"></div>

            <!-- Сама фотография (object-contain в одинаковом контейнере) -->
            <img id="lightbox-main-img" 
                 src="${photo.image}" 
                 alt="${photo.title}" 
                 onerror="this.src='https://placehold.co/600x450/FEF3C7/1E3A5F?text=Эврика'"
                 class="relative z-10 max-h-full max-w-full object-contain transition-opacity duration-200 drop-shadow-lg select-none pointer-events-none">

            <!-- Бейдж счетчика и категории -->
            <div class="absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-navy/85 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md border border-white/10">
                <span class="w-2 h-2 rounded-full bg-brand-yellow"></span>
                <span id="lightbox-counter-badge">${currentGalleryIndex + 1} из ${total}</span>
                ${isFiltered ? `
                    <button onclick="switchGalleryLightboxToAll(event)" class="text-[10px] text-brand-yellow font-bold underline hover:text-white transition ml-1 cursor-pointer">
                        Все (8)
                    </button>
                ` : ''}
            </div>

            <!-- Кнопка закрытия -->
            <button onclick="closeDetailModal()" 
                    aria-label="Закрыть" 
                    class="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-navy/85 hover:bg-navy text-white backdrop-blur-md flex items-center justify-center shadow-md border border-white/10 transition transform hover:scale-105 active:scale-95 cursor-pointer">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <!-- Кнопка перелистывания НАЗАД (←) -->
            <button onclick="navigateGalleryLightbox(-1, event)" 
                    aria-label="Предыдущее фото" 
                    class="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-navy shadow-floating flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer border border-slate-200/40">
                <svg class="w-6 h-6 -ml-0.5 text-navy" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <!-- Кнопка перелистывания ВПЕРЕД (→) -->
            <button onclick="navigateGalleryLightbox(1, event)" 
                    aria-label="Следующее фото" 
                    class="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-navy shadow-floating flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer border border-slate-200/40">
                <svg class="w-6 h-6 -mr-0.5 text-navy" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </button>

            <!-- Точки индикаторы внизу контейнера -->
            <div id="lightbox-dots-container" class="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/70 backdrop-blur-md border border-white/10">
                ${dotsHtml}
            </div>
        </div>

        <!-- СТАБИЛЬНЫЙ ПОДВАЛ С ОПИСАНИЕМ ФОТО И КНОПКОЙ ЗАПИСИ -->
        <div class="p-4 sm:p-5 bg-milk flex items-center justify-between gap-3 border-t border-slate-200/60 min-h-[76px]">
            <div class="min-w-0 pr-2">
                <div class="flex items-center gap-2 mb-1">
                    <span id="lightbox-category-badge" class="inline-block text-[11px] font-extrabold text-brand-blue uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        ${photo.category}
                    </span>
                </div>
                <h4 id="lightbox-photo-title" class="text-sm sm:text-base font-extrabold text-navy truncate" title="${photo.title}">
                    ${photo.title}
                </h4>
            </div>
            <button id="lightbox-booking-btn" onclick="openLightboxBooking()" class="shrink-0 px-4 py-2.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy text-xs sm:text-sm font-extrabold shadow-sm transition transform active:scale-95 cursor-pointer">
                Записаться
            </button>
        </div>
    `;
}

/**
 * Перелистывание фото вперед (+1) или назад (-1)
 */
function navigateGalleryLightbox(delta, event) {
    if (event) {
        event.stopPropagation();
    }
    if (!currentGalleryPhotos || currentGalleryPhotos.length <= 1) return;

    const total = currentGalleryPhotos.length;
    currentGalleryIndex = (currentGalleryIndex + delta + total) % total;
    updateGalleryLightboxView();
}

/**
 * Переход к конкретному фото по клику на точку
 */
function goToGalleryLightboxIndex(index, event) {
    if (event) {
        event.stopPropagation();
    }
    if (!currentGalleryPhotos || index < 0 || index >= currentGalleryPhotos.length) return;
    currentGalleryIndex = index;
    updateGalleryLightboxView();
}

/**
 * Переключение фильтрованного лайтбокса на полный каталог фото (8 фото)
 */
function switchGalleryLightboxToAll(event) {
    if (event) {
        event.stopPropagation();
    }
    const currentPhoto = currentGalleryPhotos[currentGalleryIndex];
    currentGalleryPhotos = (SITE_DATA && SITE_DATA.gallery) ? SITE_DATA.gallery : [];
    if (currentPhoto) {
        const newIdx = currentGalleryPhotos.findIndex(p => p.id === currentPhoto.id);
        currentGalleryIndex = newIdx >= 0 ? newIdx : 0;
    }
    const body = document.getElementById('detail-modal-body');
    if (body) {
        renderGalleryLightboxModal(body);
    }
}

/**
 * Плавное обновление содержимого лайтбокса без дергания и изменения контейнера
 */
function updateGalleryLightboxView() {
    const photo = currentGalleryPhotos[currentGalleryIndex];
    if (!photo) return;
    const total = currentGalleryPhotos.length;

    const imgEl = document.getElementById('lightbox-main-img');
    const blurEl = document.getElementById('lightbox-bg-blur');
    const counterEl = document.getElementById('lightbox-counter-badge');
    const catEl = document.getElementById('lightbox-category-badge');
    const titleEl = document.getElementById('lightbox-photo-title');
    const dotsContainer = document.getElementById('lightbox-dots-container');

    // Плавный эффект смены фото
    if (imgEl) {
        imgEl.style.opacity = '0.35';
        imgEl.src = photo.image;
        imgEl.alt = photo.title;
        imgEl.onload = () => {
            imgEl.style.opacity = '1';
        };
        setTimeout(() => {
            imgEl.style.opacity = '1';
        }, 120);
    }

    if (blurEl) {
        blurEl.style.backgroundImage = `url('${photo.image}')`;
    }

    if (counterEl) {
        counterEl.textContent = `${currentGalleryIndex + 1} из ${total}`;
    }

    if (catEl) {
        catEl.textContent = photo.category;
    }

    if (titleEl) {
        titleEl.textContent = photo.title;
        titleEl.title = photo.title;
    }

    if (dotsContainer) {
        dotsContainer.innerHTML = currentGalleryPhotos.map((p, idx) => {
            const isActive = idx === currentGalleryIndex;
            return `
                <button onclick="goToGalleryLightboxIndex(${idx}, event)" 
                        aria-label="Перейти к фото ${idx + 1}"
                        class="transition-all duration-300 rounded-full cursor-pointer ${isActive ? 'w-5 h-2 bg-brand-yellow' : 'w-2 h-2 bg-white/50 hover:bg-white'}">
                </button>
            `;
        }).join('');
    }
}

/**
 * Запись на пробное занятие из открытого фото
 */
function openLightboxBooking() {
    const currentPhoto = currentGalleryPhotos[currentGalleryIndex];
    const title = currentPhoto ? currentPhoto.title : 'Занятия в клубе';
    closeDetailModal();
    openBookingModal(`Запись после просмотра галереи: ${title}`);
}

/**
 * Подключение событий клавиатуры и свайпов
 */
function setupGalleryLightboxListeners() {
    destroyGalleryLightboxListeners();

    galleryKeydownHandler = function(e) {
        if (e.key === 'ArrowLeft') {
            navigateGalleryLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGalleryLightbox(1);
        } else if (e.key === 'Escape') {
            closeDetailModal();
        }
    };
    window.addEventListener('keydown', galleryKeydownHandler);

    const container = document.getElementById('gallery-lightbox-container');
    if (container) {
        container.addEventListener('touchstart', onGalleryTouchStart, { passive: true });
        container.addEventListener('touchend', onGalleryTouchEnd, { passive: true });
    }
}

function onGalleryTouchStart(e) {
    if (e.changedTouches && e.changedTouches.length > 0) {
        galleryTouchStartX = e.changedTouches[0].clientX;
        galleryTouchStartY = e.changedTouches[0].clientY;
    }
}

function onGalleryTouchEnd(e) {
    if (e.changedTouches && e.changedTouches.length > 0) {
        const diffX = e.changedTouches[0].clientX - galleryTouchStartX;
        const diffY = e.changedTouches[0].clientY - galleryTouchStartY;
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
                navigateGalleryLightbox(1);
            } else {
                navigateGalleryLightbox(-1);
            }
        }
    }
}

/**
 * Очистка слушателей лайтбокса при закрытии модального окна
 */
function destroyGalleryLightboxListeners() {
    if (galleryKeydownHandler) {
        window.removeEventListener('keydown', galleryKeydownHandler);
        galleryKeydownHandler = null;
    }
    const container = document.getElementById('gallery-lightbox-container');
    if (container) {
        container.removeEventListener('touchstart', onGalleryTouchStart);
        container.removeEventListener('touchend', onGalleryTouchEnd);
    }
}

/**
 * Закрытие модального окна деталей
 */
function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    destroyGalleryLightboxListeners();
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

