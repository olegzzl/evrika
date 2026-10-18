/**
 * ==========================================================================
 * SVG ИКОНКИ ДЛЯ ПРОЕКТА «ЭВРИКА»
 * Профессиональные векторные глифы высокой чёткости с единой сеткой 24x24
 * Точное соответствие референсам:
 * - «Верхнее меню.jpg» (О клубе, Программа, Кружки, Календарь, Галерея, Воспитатели, Контакты, Отзывы)
 * - «Нижнее меню.jpg» (Главная, Кружки, Календарь, Профиль)
 * ==========================================================================
 */

/**
 * Иконки для ВЕРХНЕГО МЕНЮ (8 элементов точно как на «Верхнее меню.jpg»)
 */
function getTopMenuIcon(name) {
    const icons = {
        // 1. О клубе (Яркий небесно-голубой домик с дымоходом и арочным порталом)
        about: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <!-- Дымоход справа -->
                <rect x="16.5" y="4" width="2.5" height="5" rx="0.6" fill="#0284C7"/>
                <!-- Контур дома: крыша + стены + арочный вырез дверцы -->
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.8c-.4 0-.8.2-1.1.5L2.4 10.8c-.5.5-.4 1.3.1 1.8.5.4 1.3.4 1.8-.1L5 11.8V19c0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5v-7.2l.7.7c.5.5 1.3.5 1.8.1.5-.5.6-1.3.1-1.8L13.1 3.3c-.3-.3-.7-.5-1.1-.5zM9.5 21.5h5v-4.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v4.5z" fill="#0284C7"/>
            </svg>
        `,
        // 2. Программа (Фиолетовая открытая детская книга со строчками на страницах)
        program: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <!-- Левая страница -->
                <path d="M11 5.5C8 4.6 4.6 5.1 2.8 6.2c-.5.3-.8.8-.8 1.4v10.8c0 1 .8 1.8 1.8 1.6 2.4-.4 5.2-.6 7.2.5V5.5z" fill="#A855F7"/>
                <!-- Правая страница -->
                <path d="M13 5.5c3-.9 6.4-.4 8.2.7.5.3.8.8.8 1.4v10.8c0 1-.8 1.8-1.8 1.6-2.4-.4-5.2-.6-7.2.5V5.5z" fill="#A855F7"/>
                <!-- Белые строчки на страницах книги -->
                <rect x="4.5" y="9.5" width="4.5" height="1.3" rx="0.65" fill="#FFFFFF"/>
                <rect x="4.5" y="13" width="4.5" height="1.3" rx="0.65" fill="#FFFFFF"/>
                <rect x="15" y="9.5" width="4.5" height="1.3" rx="0.65" fill="#FFFFFF"/>
                <rect x="15" y="13" width="4.5" height="1.3" rx="0.65" fill="#FFFFFF"/>
            </svg>
        `,
        // 3. Кружки (Яркий оранжевый пазл с круглыми замками)
        clubs: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <path fill="#F97316" d="M7 5.5 L9.5 5.5 C9.5 3.5, 10.3 2, 12 2 C13.7 2, 14.5 3.5, 14.5 5.5 L17 5.5 C17.8 5.5, 18.5 6.2, 18.5 7 L18.5 9.5 C20.5 9.5, 22 10.3, 22 12 C22 13.7, 20.5 14.5, 18.5 14.5 L18.5 17 C18.5 17.8, 17.8 18.5, 17 18.5 L14.5 18.5 C14.5 16.5, 13.7 15, 12 15 C10.3 15, 9.5 16.5, 9.5 18.5 L7 18.5 C6.2 18.5, 5.5 17.8, 5.5 17 L5.5 14.5 C7.5 14.5, 9 13.7, 9 12 C9 10.3, 7.5 9.5, 5.5 9.5 L5.5 7 C5.5 6.2, 6.2 5.5, 7 5.5 Z"/>
            </svg>
        `,
        // 4. Календарь (Бирюзовый настенный календарь с кольцами и точками дат 3х2)
        calendar: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <!-- Кольца крепления -->
                <rect x="7" y="1.5" width="2" height="4" rx="1" fill="#06B6D4"/>
                <rect x="15" y="1.5" width="2" height="4" rx="1" fill="#06B6D4"/>
                <!-- Корпус календаря -->
                <rect x="2.5" y="3.5" width="19" height="18" rx="3.5" fill="#06B6D4"/>
                <!-- Разделительная полоса шапки -->
                <rect x="2.5" y="8.5" width="19" height="1.8" fill="#FFFFFF"/>
                <!-- 6 круглых точек дат (3х2) -->
                <circle cx="6.5" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="12" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="17.5" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="6.5" cy="16.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="12" cy="16.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="17.5" cy="16.5" r="1.1" fill="#FFFFFF"/>
            </svg>
        `,
        // 5. Галерея (Розовый фотоаппарат с белым объективом и вспышкой)
        gallery: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <!-- Верхний выступ видоискателя -->
                <rect x="8" y="2.5" width="8" height="3" rx="1.2" fill="#FB7185"/>
                <!-- Корпус камеры -->
                <rect x="2" y="4.5" width="20" height="16" rx="3.5" fill="#FB7185"/>
                <!-- Объектив с белым кольцом -->
                <circle cx="12" cy="12.5" r="4.2" fill="#FFFFFF"/>
                <circle cx="12" cy="12.5" r="2.5" fill="#FB7185"/>
                <!-- Белая вспышка -->
                <circle cx="18.5" cy="8" r="1" fill="#FFFFFF"/>
            </svg>
        `,
        // 6. Воспитатели (Зелёная академическая шапочка выпускника с кисточкой)
        teachers: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <!-- Ромбовидный верх шапочки -->
                <path d="M12 4.2L2 9.2l10 5 10-5L12 4.2z" fill="#10B981"/>
                <!-- Купол под шапочкой -->
                <path d="M6 12.5v3.8c0 2.5 2.7 4.5 6 4.5s6-2 6-4.5v-3.8l-6 3-6-3z" fill="#10B981"/>
                <!-- Кисточка справа -->
                <circle cx="12" cy="9.2" r="1" fill="#059669"/>
                <path d="M12 9.2l7.5 3.5v4.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="18.5" y="17.2" width="1.8" height="2.8" rx="0.8" fill="#059669"/>
            </svg>
        `,
        // 7. Контакты (Кораллово-красная классическая телефонная трубка)
        contacts: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" fill="#FB7185"/>
            </svg>
        `,
        // 8. Отзывы (Золотистая пятиконечная звёздочка с идеальной геометрией)
        reviews: `
            <svg class="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill="#FBBF24"/>
            </svg>
        `
    };
    return icons[name] || icons.about;
}

/**
 * Иконки для ПРИКЛЕЕННОГО НИЖНЕГО МЕНЮ (4 элемента точно как на «Нижнее меню.jpg»)
 */
function getBottomMenuIcon(name) {
    const icons = {
        // Главная: домик точно как в верхней плашке «О клубе»
        home: `
            <svg class="w-6 h-6 drop-shadow-sm transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                <rect x="16.5" y="4" width="2.5" height="5" rx="0.6" fill="#0284C7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.8c-.4 0-.8.2-1.1.5L2.4 10.8c-.5.5-.4 1.3.1 1.8.5.4 1.3.4 1.8-.1L5 11.8V19c0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5v-7.2l.7.7c.5.5 1.3.5 1.8.1.5-.5.6-1.3.1-1.8L13.1 3.3c-.3-.3-.7-.5-1.1-.5zM9.5 21.5h5v-4.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v4.5z" fill="#0284C7"/>
            </svg>
        `,
        // Кружки: пазл точно как в верхней плашке «Кружки»
        clubs: `
            <svg class="w-6 h-6 drop-shadow-sm transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                <path fill="#F97316" d="M7 5.5 L9.5 5.5 C9.5 3.5, 10.3 2, 12 2 C13.7 2, 14.5 3.5, 14.5 5.5 L17 5.5 C17.8 5.5, 18.5 6.2, 18.5 7 L18.5 9.5 C20.5 9.5, 22 10.3, 22 12 C22 13.7, 20.5 14.5, 18.5 14.5 L18.5 17 C18.5 17.8, 17.8 18.5, 17 18.5 L14.5 18.5 C14.5 16.5, 13.7 15, 12 15 C10.3 15, 9.5 16.5, 9.5 18.5 L7 18.5 C6.2 18.5, 5.5 17.8, 5.5 17 L5.5 14.5 C7.5 14.5, 9 13.7, 9 12 C9 10.3, 7.5 9.5, 5.5 9.5 L5.5 7 C5.5 6.2, 6.2 5.5, 7 5.5 Z"/>
            </svg>
        `,
        // Календарь: календарь точно как в верхней плашке «Календарь»
        calendar: `
            <svg class="w-6 h-6 drop-shadow-sm transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="1.5" width="2" height="4" rx="1" fill="#06B6D4"/>
                <rect x="15" y="1.5" width="2" height="4" rx="1" fill="#06B6D4"/>
                <rect x="2.5" y="3.5" width="19" height="18" rx="3.5" fill="#06B6D4"/>
                <rect x="2.5" y="8.5" width="19" height="1.8" fill="#FFFFFF"/>
                <circle cx="6.5" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="12" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="17.5" cy="12.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="6.5" cy="16.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="12" cy="16.5" r="1.1" fill="#FFFFFF"/>
                <circle cx="17.5" cy="16.5" r="1.1" fill="#FFFFFF"/>
            </svg>
        `,
        // Профиль: сплошной гармоничный силуэт в том же стиле
        profile: `
            <svg class="w-6 h-6 drop-shadow-sm transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="4.2" fill="#FB7185"/>
                <path d="M4 20.5c0-4 3.6-7 8-7s8 3 8 7v.5H4v-.5z" fill="#FB7185"/>
            </svg>
        `
    };
    return icons[name] || icons.home;
}

/**
 * Иконки для полноэкранного мобильного меню (Шторка)
 */
function getMenuIcon(name, color) {
    const icons = {
        home: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z"/></svg>`,
        puzzle: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/></svg>`,
        book: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/></svg>`,
        palette: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
        calendar: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>`,
        gallery: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
        users: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
        mail: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    };
    return icons[name] || icons.home;
}

/**
 * Иконки для направлений комплексной программы
 */
function getProgramIcon(name) {
    const icons = {
        speech: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 9H7V9h4v2zm6 0h-4V9h4v2z"/></svg>`,
        palette: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
        runner: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>`,
        cap: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
    };
    return icons[name] || icons.speech;
}
