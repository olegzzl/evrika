/**
 * ==========================================================================
 * 6. СТРАНИЦА «ГАЛЕРЕЯ»
 * Точное соответствие Экрану 7 референса (сетка в 2 колонки на моб. + фильтры)
 * ==========================================================================
 */

function renderGalleryPage() {
    const categories = ['Все', 'Творчество', 'Робототехника', 'Игры', 'Атмосфера'];
    const filteredPhotos = currentState.galleryFilter === 'Все'
        ? SITE_DATA.gallery
        : SITE_DATA.gallery.filter(item => item.category === currentState.galleryFilter);

    const filterButtonsHtml = categories.map(cat => {
        const active = currentState.galleryFilter === cat;
        return `
            <button onclick="setGalleryFilter('${cat}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition ${active ? 'bg-navy text-white' : 'bg-white text-navy/75 hover:bg-slate-100'}">
                ${cat}
            </button>
        `;
    }).join('');

    const photosGridHtml = filteredPhotos.map(photo => `
        <div onclick="openGalleryLightbox('${photo.id}')" class="group relative rounded-2xl overflow-hidden shadow-card bg-white aspect-[4/3] cursor-pointer">
            <img src="${photo.image}" 
                 alt="${photo.title}"
                 onerror="this.src='https://placehold.co/400x300/FEF3C7/1E3A5F?text=Эврика'"
                 class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2.5">
                <span class="text-[11px] font-bold text-white leading-tight">${photo.title}</span>
            </div>
        </div>
    `).join('');

    return `
    <section class="page-transition max-w-3xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-navy mb-2">Галерея</h1>
        <p class="text-sm sm:text-base text-navy/80 mb-4">
            Как проходит жизнь в нашем клубе — смотрите в фотографиях!
        </p>

        <!-- Фильтр категорий -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4">
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
function setGalleryFilter(category) {
    currentState.galleryFilter = category;
    const section = document.getElementById('section-gallery');
    if (section) {
        section.innerHTML = renderGalleryPage();
    } else {
        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = renderGalleryPage();
        }
    }
}
