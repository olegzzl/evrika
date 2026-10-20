/**
 * ==========================================================================
 * МОДАЛЬНЫЕ ОКНА И УВЕДОМЛЕНИЯ КЛУБА «ЭВРИКА» (МУЛЬТИЯЗЫЧНЫЕ)
 * Запись на занятия, просмотр деталей кружка/педагога/фото и всплывающие тосты
 * ==========================================================================
 */

/**
 * Открытие модального окна записи с плавной анимацией
 */
function openBookingModal(directionText = 'Пробне заняття') {
    const modal = document.getElementById('booking-modal');
    const dirInput = document.getElementById('booking-direction');
    if (dirInput) {
        dirInput.value = directionText;
    }
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex', 'modal-backdrop-appear');
        const card = modal.querySelector('.modal-content-appear');
        if (card) {
            card.style.animation = 'none';
            card.offsetHeight; // reflow
            card.style.animation = '';
        }
    }
}

/**
 * Закрытие модального окна записи
 */
function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'modal-backdrop-appear');
    }
}

/**
 * Вспомогательная функция для плавного показа модального окна деталей
 */
function showDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex', 'modal-backdrop-appear');
        const body = document.getElementById('detail-modal-body');
        if (body) {
            body.style.animation = 'none';
            body.offsetHeight; // reflow
            body.style.animation = '';
        }
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

    const bk = (SITE_DATA.modals && SITE_DATA.modals.booking) || {};
    const successMsg = (typeof bk.successToast === 'function')
        ? bk.successToast(parentName, direction)
        : `Дякуємо, ${parentName}! Вашу заявку (${direction}) прийнято. Ми зв'яжемося з вами найближчим часом.`;

    showToast(successMsg);
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
    const club = (SITE_DATA.clubs || []).find(c => c.id === clubId);
    if (!club) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};

    const scheduleLabel = dt.schedule || 'Розклад:';
    const groupSizeLabel = dt.groupSize || 'Розмір групи:';
    const priceLabel = dt.price || 'Вартість:';
    const enrollBtnText = (typeof dt.enrollInClub === 'function') 
        ? dt.enrollInClub(club.title) 
        : `Записатися в гурток «${club.title}»`;

    body.innerHTML = `
        <div class="relative h-48 sm:h-56 bg-slate-100">
            <img src="${club.image}" alt="${club.title}" class="w-full h-full object-cover">
            <button onclick="closeDetailModal()" aria-label="${SITE_DATA.ui.close || 'Закрити'}" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md">
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
                <div class="flex justify-between"><span class="text-navy font-bold">${scheduleLabel}</span><span class="font-extrabold text-navy">${club.schedule}</span></div>
                <div class="flex justify-between"><span class="text-navy font-bold">${groupSizeLabel}</span><span class="font-extrabold text-navy">${club.groupSize}</span></div>
                <div class="flex justify-between"><span class="text-navy font-bold">${priceLabel}</span><span class="font-extrabold text-brand-blue">${club.demoPrice}</span></div>
            </div>
            <button onclick="closeDetailModal(); openBookingModal('Гурток: ${club.title}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm shadow-sm transition">
                ${enrollBtnText}
            </button>
        </div>
    `;
    showDetailModal();
}

/**
 * Детальная карточка программы развития
 */
function openProgramDetail(progId) {
    const prog = (SITE_DATA.programs || []).find(p => p.id === progId);
    if (!prog) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};

    const agePrefix = dt.ageGroupPrefix || 'Вікова група:';
    const enrollBtnText = dt.enrollInProgram || 'Записатися на напрямок';

    body.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-full ${prog.circleClass} flex items-center justify-center">
                    ${getProgramIcon(prog.icon)}
                </div>
                <button onclick="closeDetailModal()" aria-label="${SITE_DATA.ui.close || 'Закрити'}" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <span class="inline-block text-xs font-extrabold text-brand-blue bg-pastel-blue px-3 py-1 rounded-full mb-2">
                ${agePrefix} ${prog.age}
            </span>
            <h3 class="text-xl font-extrabold text-navy mb-2">${prog.title}</h3>
            <p class="text-sm text-navy font-medium leading-relaxed mb-5">${prog.details}</p>
            <button onclick="closeDetailModal(); openBookingModal('Програма: ${prog.title}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm transition">
                ${enrollBtnText}
            </button>
        </div>
    `;
    showDetailModal();
}

/**
 * Детальная карточка воспитателя
 */
function openTeacherDetail(teacherId) {
    const t = (SITE_DATA.teachers || []).find(item => item.id === teacherId);
    if (!t) return;
    const imgUrl = t.imageOverride || t.image;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};
    const enrollBtnText = dt.enrollWithTeacher || 'Записатися до групи педагога';

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
                <button onclick="closeDetailModal()" aria-label="${SITE_DATA.ui.close || 'Закрити'}" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <p class="text-xs sm:text-sm text-navy font-medium leading-relaxed mb-5">${t.bio}</p>
            <button onclick="closeDetailModal(); openBookingModal('Запис до педагога: ${t.name}')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-sm transition">
                ${enrollBtnText}
            </button>
        </div>
    `;
    showDetailModal();
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
    
    if (typeof currentState !== 'undefined' && currentState.galleryFilter && currentState.galleryFilter !== 'all') {
        const filtered = photos.filter(p => p.categoryId === currentState.galleryFilter);
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
    showDetailModal();

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
    const totalAll = (SITE_DATA.gallery ? SITE_DATA.gallery.length : total);
    const isFiltered = typeof currentState !== 'undefined' && currentState.galleryFilter && currentState.galleryFilter !== 'all' && total < totalAll;
    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};
    const ui = SITE_DATA.ui || {};

    const counterText = (typeof dt.counterBadge === 'function')
        ? dt.counterBadge(currentGalleryIndex + 1, total)
        : `${currentGalleryIndex + 1} з ${total}`;

    const viewAllText = (typeof dt.viewAllPhotos === 'function')
        ? dt.viewAllPhotos(totalAll)
        : `Всі (${totalAll})`;

    // Точки индикаторы
    const dotsHtml = currentGalleryPhotos.map((p, idx) => {
        const isActive = idx === currentGalleryIndex;
        return `
            <button onclick="goToGalleryLightboxIndex(${idx}, event)" 
                    aria-label="${idx + 1}"
                    class="transition-all duration-300 rounded-full cursor-pointer ${isActive ? 'w-5 h-2 bg-brand-yellow' : 'w-2 h-2 bg-white/50 hover:bg-white'}">
            </button>
        `;
    }).join('');

    body.innerHTML = `
        <!-- ЕДИНЫЙ ФИКСИРОВАННЫЙ КОНТЕЙНЕР ДЛЯ ВСЕХ ФОТО (одинаковая высота и пропорции) -->
        <div id="gallery-lightbox-container" class="relative w-full h-[320px] sm:h-[400px] max-h-[60vh] bg-slate-950 overflow-hidden flex items-center justify-center select-none">
            
            <!-- Мягкий эмбиент-размытый фон текущего фото -->
            <div id="lightbox-bg-blur" 
                 class="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-35 scale-125 transition-all duration-300 pointer-events-none" 
                 style="background-image: url('${photo.image}')">
            </div>
            <div class="absolute inset-0 bg-navy/60 pointer-events-none"></div>

            <!-- Сама фотография -->
            <img id="lightbox-main-img" 
                 src="${photo.image}" 
                 alt="${photo.title}" 
                 onerror="this.src='https://placehold.co/600x450/FEF3C7/1E3A5F?text=Evrika'"
                 class="relative z-10 max-h-full max-w-full object-contain transition-opacity duration-200 drop-shadow-lg select-none pointer-events-none">

            <!-- Бейдж счетчика и категории -->
            <div class="absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-navy/85 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md border border-white/10">
                <span class="w-2 h-2 rounded-full bg-brand-yellow"></span>
                <span id="lightbox-counter-badge">${counterText}</span>
                ${isFiltered ? `
                    <button onclick="switchGalleryLightboxToAll(event)" class="text-[10px] text-brand-yellow font-bold underline hover:text-white transition ml-1 cursor-pointer">
                        ${viewAllText}
                    </button>
                ` : ''}
            </div>

            <!-- Кнопка закрытия -->
            <button onclick="closeDetailModal()" 
                    aria-label="${ui.close || 'Закрити'}" 
                    class="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-navy/85 hover:bg-navy text-white backdrop-blur-md flex items-center justify-center shadow-md border border-white/10 transition transform hover:scale-105 active:scale-95 cursor-pointer">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <!-- Кнопка перелистывания НАЗАД (←) -->
            <button onclick="navigateGalleryLightbox(-1, event)" 
                    aria-label="${ui.prevPhoto || 'Попередня світлина'}" 
                    class="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-navy shadow-floating flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer border border-slate-200/40">
                <svg class="w-6 h-6 -ml-0.5 text-navy" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <!-- Кнопка перелистывания ВПЕРЕД (→) -->
            <button onclick="navigateGalleryLightbox(1, event)" 
                    aria-label="${ui.nextPhoto || 'Наступна світлина'}" 
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
                ${ui.bookSpot || 'Записатися'}
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
 * Переключение фильтрованного лайтбокса на полный каталог фото
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
 * Плавное обновление содержимого лайтбокса
 */
function updateGalleryLightboxView() {
    const photo = currentGalleryPhotos[currentGalleryIndex];
    if (!photo) return;
    const total = currentGalleryPhotos.length;
    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};

    const imgEl = document.getElementById('lightbox-main-img');
    const blurEl = document.getElementById('lightbox-bg-blur');
    const counterEl = document.getElementById('lightbox-counter-badge');
    const catEl = document.getElementById('lightbox-category-badge');
    const titleEl = document.getElementById('lightbox-photo-title');
    const dotsContainer = document.getElementById('lightbox-dots-container');

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
        counterEl.textContent = (typeof dt.counterBadge === 'function')
            ? dt.counterBadge(currentGalleryIndex + 1, total)
            : `${currentGalleryIndex + 1} з ${total}`;
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
                        aria-label="${idx + 1}"
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
    const title = currentPhoto ? currentPhoto.title : 'Заняття в клубі';
    closeDetailModal();
    openBookingModal(`Запис після перегляду галереї: ${title}`);
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
        modal.classList.remove('flex', 'modal-backdrop-appear');
    }
    destroyGalleryLightboxListeners();
}

/**
 * Модальное окно отзывов родителей
 */
function openReviewsModal() {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    if (!modal || !body) return;

    const dt = (SITE_DATA.modals && SITE_DATA.modals.details) || {};
    const ui = SITE_DATA.ui || {};

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

    const toastMsg = (ui.leaveReviewToast || 'Дякуємо за інтерес! Напишіть нам у Telegram для публікації відгуку.').replace(/'/g, "\\'");

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
                        <h3 class="text-lg font-extrabold text-navy">${dt.reviewsTitle || 'Відгуки батьків'}</h3>
                        <p class="text-xs text-navy font-bold">${dt.reviewsSubtitle || 'Дитячий клуб «Еврика» • Середня оцінка: 5.0'}</p>
                    </div>
                </div>
                <button onclick="closeDetailModal()" aria-label="${ui.close || 'Закрити'}" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="space-y-3 max-h-[60vh] overflow-y-auto pr-1 mb-5">
                ${reviewsHtml}
            </div>

            <div class="flex gap-2.5">
                <button onclick="closeDetailModal(); openBookingModal('Запис за відгуком батьків')" class="flex-1 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm transition">
                    ${ui.bookSession || 'Записатися на заняття'}
                </button>
                <button onclick="closeDetailModal(); showToast('${toastMsg}')" class="px-5 py-3 rounded-full bg-white border border-slate-200 text-navy font-bold text-xs sm:text-sm hover:bg-slate-50 transition">
                    ${ui.leaveReview || 'Залишити відгук'}
                </button>
            </div>
        </div>
    `;
    showDetailModal();
}

/**
 * Модальное окно профиля / личного кабинета (пункт Профиль в Нижнем меню)
 */
function openProfileModal() {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');
    if (!modal || !body) return;

    const prof = (SITE_DATA.modals && SITE_DATA.modals.profile) || {};
    const ui = SITE_DATA.ui || {};

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
                        <h3 class="text-lg font-extrabold text-navy">${prof.title || 'Особистий кабінет батьків'}</h3>
                        <p class="text-xs text-navy font-bold">${prof.subtitle || 'Дитячий клуб «Еврика»'}</p>
                    </div>
                </div>
                <button onclick="closeDetailModal()" aria-label="${ui.close || 'Закрити'}" class="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="bg-white rounded-2xl p-4 border border-slate-100 mb-4 space-y-2">
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">${prof.subStatus || 'Статус абонемента:'}</span>
                    <span class="font-bold text-brand-green bg-green-50 px-2.5 py-0.5 rounded-full">${prof.subStatusVal || 'Демо-доступ активний'}</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">${prof.branch || 'Ваш філіал:'}</span>
                    <span class="font-bold text-navy">${prof.branchVal || 'Харків, вул. Любові Малої, 22'}</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-navy font-bold">${prof.adminContact || 'Зв\'язок з адміністратором:'}</span>
                    <a href="tel:${SITE_DATA.clubInfo.phone}" class="font-bold text-brand-blue">${SITE_DATA.clubInfo.phone}</a>
                </div>
            </div>

            <div class="space-y-2.5">
                <button onclick="closeDetailModal(); openBookingModal('Запис на гурток із профілю')" class="w-full py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-navy font-extrabold text-xs sm:text-sm transition">
                    ${prof.newGroupBtn || 'Записатися в нову групу'}
                </button>
                <button onclick="closeDetailModal(); navigateTo('contacts')" class="w-full py-2.5 rounded-full bg-white border border-slate-200 text-navy font-bold text-xs sm:text-sm hover:bg-slate-50 transition">
                    ${prof.contactBtn || 'Зв\'язатися з клубом'}
                </button>
            </div>
        </div>
    `;
    showDetailModal();
}
