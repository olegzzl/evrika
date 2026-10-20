/**
 * ==========================================================================
 * 6. СТРАНИЦА «ГАЛЕРЕЯ»
 * Точное соответствие Экрану 7 референса (сетка в 2 колонки на моб. + фильтры) (мультиязычная)
 * ==========================================================================
 */

function renderGalleryPage() {
    const gp = SITE_DATA.galleryPage || {};
    const ui = SITE_DATA.ui || {};

    const categories = [
        { id: 'all', label: ui.filterAll || 'Всі' },
        { id: 'creativity', label: ui.filterCreativity || 'Творчість' },
        { id: 'games', label: ui.filterGames || 'Ігри' },
        { id: 'atmosphere', label: ui.filterAtmosphere || 'Атмосфера' }
    ];

    const currentFilter = currentState.galleryFilter || 'all';
    const galleryItems = SITE_DATA.gallery || [];
    const filteredPhotos = currentFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.categoryId === currentFilter);

    const filterButtonsHtml = categories.map(cat => {
        const active = currentFilter === cat.id;
        return `
            <button onclick="setGalleryFilter('${cat.id}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition ${active ? 'bg-navy text-white shadow-sm' : 'bg-white text-navy font-bold hover:bg-slate-100 border border-slate-200/60'}">
                ${cat.label}
            </button>
        `;
    }).join('');

    const photosGridHtml = filteredPhotos.map((photo, idx) => `
        <div onclick="openGalleryLightbox('${photo.id}')" 
             style="--stagger-delay: ${(idx % 8) * 55}ms"
             class="reveal-card card-hover-lift group relative rounded-2xl overflow-hidden shadow-card bg-white aspect-[4/3] cursor-pointer">
            <img src="${photo.image}" 
                 alt="${photo.title}"
                 onerror="this.src='https://placehold.co/400x300/FEF3C7/1E3A5F?text=Evrika'"
                 class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2.5">
                <span class="text-[11px] font-bold text-white leading-tight">${photo.title}</span>
            </div>
        </div>
    `).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="reveal-on-scroll text-2xl sm:text-3xl font-extrabold text-navy mb-2">${gp.title || 'Галерея'}</h1>
        <p class="reveal-on-scroll text-sm sm:text-base text-navy font-medium mb-4">
            ${gp.description || 'Як проходить життя в нашому клубі — дивіться на світлинах!'}
        </p>

        <!-- Фильтр категорий -->
        <div class="reveal-on-scroll flex items-center gap-1.5 overflow-x-auto pb-2 mb-4">
            ${filterButtonsHtml}
        </div>

        <!-- Сетка 2 колонки на мобильном (как на Экране 7 референса) и до 4 на широком экране -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            ${photosGridHtml}
        </div>
    </section>
    `;
}

/**
 * Переключение фильтра в галерее
 */
function setGalleryFilter(categoryId) {
    currentState.galleryFilter = categoryId;
    const section = document.getElementById('section-gallery');
    if (section) {
        section.innerHTML = renderGalleryPage();
        if (typeof initAppearanceAnimations === 'function') {
            initAppearanceAnimations(section);
        }
    } else {
        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = renderGalleryPage();
            if (typeof initAppearanceAnimations === 'function') {
                initAppearanceAnimations(container);
            }
        }
    }
}
