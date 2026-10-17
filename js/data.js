/**
 * ==========================================================================
 * ЕДИНОЕ ХРАНИЛИЩЕ ДАННЫХ ПРОЕКТА «ЭВРИКА»
 * Все контакты, кружки, воспитатели, галерея и расписание собраны здесь.
 * ==========================================================================
 */

const SITE_DATA = {
    clubInfo: {
        name: 'Эврика',
        tagline: 'Место, где детство становится ярче!',
        subTagline: 'Развивающие занятия, кружки, друзья и заботливые воспитатели в детском клубе «Эврика»',
        city: 'г. Харьков',
        address: 'г. Харьков, ул. Любови Малой, 22',
        phone: '+38090000000',
        phoneFormatted: '+38 (090) 000-00-00',
        email: 'info@evrika-club.ua',
        workHours: 'Ежедневно с 8:00 до 20:00'
    },

    // Пункты меню (Точно соответствуют 2-му экрану референса: иконка, цвет, порядок)
    navigation: [
        { id: 'home', title: 'Главная', color: '#3B82F6', bg: '#DBEAFE', icon: 'home' },
        { id: 'about', title: 'О клубе', color: '#F59E0B', bg: '#FEF3C7', icon: 'puzzle' },
        { id: 'program', title: 'Наша программа', color: '#3B82F6', bg: '#DBEAFE', icon: 'book' },
        { id: 'clubs', title: 'Кружки', color: '#EC4899', bg: '#FCE7F3', icon: 'palette' },
        { id: 'calendar', title: 'Календарь событий', color: '#8B5CF6', bg: '#F3E8FF', icon: 'calendar' },
        { id: 'gallery', title: 'Галерея', color: '#F59E0B', bg: '#FEF3C7', icon: 'gallery' },
        { id: 'teachers', title: 'Наши воспитатели', color: '#10B981', bg: '#DCFCE7', icon: 'users' },
        { id: 'contacts', title: 'Контакты', color: '#EF4444', bg: '#FEE2E2', icon: 'mail' }
    ],

    // Направления программы развития (Экран 4 референса)
    programs: [
        {
            id: 'speech',
            title: 'Развитие речи и коммуникации',
            age: '3–6 лет',
            bgClass: 'bg-[#FFF3C4]',
            circleClass: 'bg-[#FBBF24]',
            icon: 'speech',
            details: 'Артикуляционная гимнастика, обогащение словарного запаса, развитие связной речи и уверенного общения со сверстниками в игровой форме.'
        },
        {
            id: 'creative',
            title: 'Творческое развитие',
            age: '3–10 лет',
            bgClass: 'bg-[#FCE4EC]',
            circleClass: 'bg-[#F472B6]',
            icon: 'palette',
            details: 'Лепка, живопись, аппликация, работа с природными материалами, развитие мелкой моторики и художественного вкуса.'
        },
        {
            id: 'physical',
            title: 'Физическое развитие',
            age: '3–10 лет',
            bgClass: 'bg-[#DCFCE7]',
            circleClass: 'bg-[#22C55E]',
            icon: 'runner',
            details: 'Подвижные игры, детская гимнастика, координация движений, ритмика и укрепление здоровой осанки.'
        },
        {
            id: 'school',
            title: 'Подготовка к школе',
            age: '5–7 лет',
            bgClass: 'bg-[#E0F2FE]',
            circleClass: 'bg-[#2563EB]',
            icon: 'cap',
            details: 'Чтение, занимательная математика, логика, подготовка руки к письму и психологическая готовность к первому классу.'
        }
    ],

    // Кружки (Экран 5 референса)
    clubs: [
        {
            id: 'robotics',
            title: 'Робототехника',
            age: 'От 5 лет',
            schedule: 'Вт, Чт • 16:00 – 17:00',
            groupSize: 'До 8 детей',
            demoPrice: 'Демо-тариф: 250 грн / занятие',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80',
            description: 'Конструирование настоящих подвижных механизмов и первые шаги в визуальном программировании. Развивает логику, инженерное мышление и работу в команде.'
        },
        {
            id: 'english',
            title: 'Английский язык',
            age: 'От 4 лет',
            schedule: 'Пн, Ср, Пт • 11:00 и 17:00',
            groupSize: 'До 8 детей',
            demoPrice: 'Демо-тариф: 220 грн / занятие',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
            description: 'Живой английский через песни, настольные игры, сценки и живое общение без зубрёжки. Дети начинают понимать и говорить с первых недель.'
        },
        {
            id: 'art-studio',
            title: 'Творческая мастерская',
            age: 'От 3 лет',
            schedule: 'Вт, Чт, Сб • 10:30 и 15:00',
            groupSize: 'До 10 детей',
            demoPrice: 'Демо-тариф: 200 грн / занятие',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80',
            description: 'Рисование акварелью и гуашью, лепка из глины и пластилина, создание поделок и открыток. Каждое занятие ребёнок уносит домой готовый шедевр.'
        },
        {
            id: 'dance',
            title: 'Танцы',
            age: 'От 4 лет',
            schedule: 'Пн, Ср, Пт • 16:30 – 17:30',
            groupSize: 'До 10 детей',
            demoPrice: 'Демо-тариф: 200 грн / занятие',
            image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=500&q=80',
            description: 'Современная детская хореография, чувство ритма, пластика и весёлые танцевальные постановки для праздничных концертов клуба.'
        },
        {
            id: 'chess',
            title: 'Шахматы',
            age: 'От 5 лет',
            schedule: 'Ср, Пт • 17:30, Сб • 12:00',
            groupSize: 'До 8 детей',
            demoPrice: 'Демо-тариф: 210 грн / занятие',
            image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=500&q=80',
            description: 'Обучение шахматной стратегии от знакомства с фигурами до дружеских турниров. Тренирует усидчивость, память и умение принимать решения.'
        }
    ],

    // Воспитатели (Экран 6 референса)
    teachers: [
        {
            id: 't1',
            name: 'Анна Петрова',
            role: 'Воспитатель, раннее развитие',
            experience: 'Опыт работы: 8 лет (Демо-профиль)',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
            bio: 'Специалист по мягкой адаптации малышей, развитию речи и эмоционального интеллекта через бережные игровые методики.'
        },
        {
            id: 't2',
            name: 'Иван Соколов',
            role: 'Педагог по робототехнике',
            experience: 'Опыт работы: 6 лет (Демо-профиль)',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
            imageOverride: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
            bio: 'Увлекает детей конструированием, физикой и алгоритмами. Проводит командные соревнования роботов и квесты.'
        },
        {
            id: 't3',
            name: 'Мария Иванова',
            role: 'Преподаватель английского языка',
            experience: 'Опыт работы: 7 лет (Демо-профиль)',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
            bio: 'Владеет игровыми коммуникативными методиками Кембриджа для дошкольников и младших школьников.'
        },
        {
            id: 't4',
            name: 'Елена Коваленко',
            role: 'Педагог творческой мастерской',
            experience: 'Опыт работы: 9 лет (Демо-профиль)',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
            bio: 'Художник-педагог, раскрывающий творческий потенциал каждого ребёнка через живопись, керамику и арт-терапию.'
        },
        {
            id: 't5',
            name: 'Дмитрий Бондаренко',
            role: 'Тренер по шахматам и логике',
            experience: 'Опыт работы: 10 лет (Демо-профиль)',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
            bio: 'Кандидат в мастера спорта по шахматам, автор детской игровой программы развития логического мышления.'
        }
    ],

    // Галерея (Экран 7 референса — 8 ярких фотографий в 2 колонки)
    gallery: [
        {
            id: 'g1',
            title: 'Урок рисования и раскраски',
            category: 'Творчество',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g2',
            title: 'Занятия в дружной группе',
            category: 'Атмосфера',
            image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g3',
            title: 'Весёлые переменки с друзьями',
            category: 'Игры',
            image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g4',
            title: 'Пальчиковые краски и фантазия',
            category: 'Творчество',
            image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g5',
            title: 'Конструирование и роботы',
            category: 'Робототехника',
            image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g6',
            title: 'Совместные настольные игры',
            category: 'Игры',
            image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g7',
            title: 'Первые инженерные проекты',
            category: 'Робототехника',
            image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'g8',
            title: 'Развитие мелкой моторики',
            category: 'Атмосфера',
            image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80'
        }
    ],

    // События календаря (Экран 8 референса)
    calendarEvents: [
        {
            day: 5,
            monthLabel: 'апр',
            title: 'Мастер-класс по рисованию «Весенние цветы»',
            time: '15:00 – 17:00',
            badgeBg: 'bg-[#FBBF24]',
            badgeText: 'text-navy',
            circleColor: '#3B82F6',
            age: '4–9 лет'
        },
        {
            day: 12,
            monthLabel: 'апр',
            title: 'Открытое занятие по английскому языку',
            time: '16:00 – 17:00',
            badgeBg: 'bg-[#F9A8D4]',
            badgeText: 'text-navy',
            circleColor: '#2563EB',
            age: '4–8 лет'
        },
        {
            day: 18,
            monthLabel: 'апр',
            title: 'Театральный кружок «Сказка»',
            time: '17:00 – 18:30',
            badgeBg: 'bg-[#4ADE80]',
            badgeText: 'text-navy',
            circleColor: '#2563EB',
            age: '3–7 лет'
        },
        {
            day: 25,
            monthLabel: 'апр',
            title: 'День открытых дверей',
            time: '10:00 – 14:00',
            badgeBg: 'bg-[#60A5FA]',
            badgeText: 'text-white',
            circleColor: '#EF4444',
            age: 'Для всей семьи'
        }
    ],

    // Отзывы родителей (пункт Отзывы в верхнем меню)
    reviews: [
        {
            name: 'Елена К.',
            child: 'мама Миши (5 лет)',
            rating: 5,
            text: 'Замечательный клуб! Ходим на робототехнику и творчество уже полгода. Ребёнок идёт на занятия вприпрыжку, а дома с гордостью показывает свои поделки.'
        },
        {
            name: 'Ольга Васильева',
            child: 'мама Софии (4 года)',
            rating: 5,
            text: 'Очень чуткие и внимательные воспитатели! Мягкая адаптация прошла буквально за 3 дня без слез. Огромная благодарность Анне Петровой.'
        },
        {
            name: 'Сергей Бондарь',
            child: 'папа Артёма (7 лет)',
            rating: 5,
            text: 'Отличный уровень подготовки к школе и сильные шахматы. Чисто, светло, безопасно и с душой. Рекомендую родителям Харькова!'
        }
    ],

    // Элементы Верхнего меню (точно как на референсе Верхнее меню.jpg)
    topMenuItems: [
        { id: 'about', title: 'О клубе', icon: 'about' },
        { id: 'program', title: 'Программа', icon: 'program' },
        { id: 'clubs', title: 'Кружки', icon: 'clubs' },
        { id: 'calendar', title: 'Календарь', icon: 'calendar' },
        { id: 'gallery', title: 'Галерея', icon: 'gallery' },
        { id: 'teachers', title: 'Воспитатели', icon: 'teachers' },
        { id: 'contacts', title: 'Контакты', icon: 'contacts' },
        { id: 'reviews', title: 'Отзывы', icon: 'reviews' }
    ]
};

