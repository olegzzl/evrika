/**
 * ==========================================================================
 * БАГАТОМОВНІСТЬ (i18n): УКРАЇНСЬКА (ЗА ЗАМОВЧУВАННЯМ), ENGLISH, РУССКИЙ
 * Проєкт: Дитячий клуб «Еврика» — м. Харків
 * ==========================================================================
 */

window.TRANSLATIONS = {
    // =========================================================================
    // 1. УКРАЇНСЬКА МОВА (ОСНОВНА / ЗА ЗАМОВЧУВАННЯМ)
    // =========================================================================
    uk: {
        pageTitle: 'Дитячий клуб «Еврика» — Харків',
        metaDescription: 'Дитячий клуб «Еврика» у Харкові: розвиваючі заняття, підготовка до школи, англійська мова, творчість, танці та шахи для дітей від 3 до 10 років.',
        
        clubInfo: {
            name: 'Еврика',
            tagline: 'Місце, де дитинство стає яскравішим!',
            subTagline: 'Розвиваючі заняття, гуртки, друзі та турботливі вихователі в дитячому клубі «Еврика»',
            city: 'м. Харків',
            address: 'м. Харків, вул. Любові Малої, 22',
            addressShort: 'вул. Любові Малої, 22',
            phone: '+38090000000',
            phoneFormatted: '+38 (090) 000-00-00',
            email: 'info@evrika-club.ua',
            workHours: 'Щодня з 8:00 до 20:00'
        },

        logo: {
            letters: ['Е', 'в', 'р', 'и', 'к', 'а'],
            subtitle: 'дитячий клуб'
        },

        langLabel: 'Укр',
        langFlag: '🇺🇦',

        navigation: [
            { id: 'home', title: 'Головна', color: '#3B82F6', bg: '#DBEAFE', icon: 'home' },
            { id: 'about', title: 'Про клуб', color: '#F59E0B', bg: '#FEF3C7', icon: 'puzzle' },
            { id: 'program', title: 'Наша програма', color: '#3B82F6', bg: '#DBEAFE', icon: 'book' },
            { id: 'clubs', title: 'Гуртки', color: '#EC4899', bg: '#FCE7F3', icon: 'palette' },
            { id: 'calendar', title: 'Календар подій', color: '#8B5CF6', bg: '#F3E8FF', icon: 'calendar' },
            { id: 'gallery', title: 'Галерея', color: '#F59E0B', bg: '#FEF3C7', icon: 'gallery' },
            { id: 'teachers', title: 'Наші вихователі', color: '#10B981', bg: '#DCFCE7', icon: 'users' },
            { id: 'contacts', title: 'Контакти', color: '#EF4444', bg: '#FEE2E2', icon: 'mail' }
        ],

        topMenuItems: [
            { id: 'about', title: 'Про клуб', icon: 'about' },
            { id: 'program', title: 'Програма', icon: 'program' },
            { id: 'clubs', title: 'Гуртки', icon: 'clubs' },
            { id: 'calendar', title: 'Календар', icon: 'calendar' },
            { id: 'gallery', title: 'Галерея', icon: 'gallery' },
            { id: 'teachers', title: 'Вихователі', icon: 'teachers' },
            { id: 'contacts', title: 'Контакти', icon: 'contacts' },
            { id: 'reviews', title: 'Відгуки', icon: 'reviews' }
        ],

        bottomNav: {
            home: 'Головна',
            clubs: 'Гуртки',
            calendar: 'Календар',
            profile: 'Профіль'
        },

        ui: {
            learnMore: 'Дізнатися більше',
            bookSpot: 'Записатися',
            bookTrial: 'Записатися на пробне',
            enrollClub: 'Записатися в гурток',
            viewProgram: 'Дивитися нашу програму →',
            bookIntro: 'Записатися на знайомство',
            chooseClub: 'Обрати гурток →',
            findGroup: 'Підібрати групу',
            viewOnMap: 'Подивитися на карті',
            openGoogleMaps: 'Відкрити Google Карти ↗',
            writeUs: 'Написати нам',
            sendMessage: 'Надіслати повідомлення',
            leaveReview: 'Залишити відгук',
            bookSession: 'Записатися на заняття',
            collapseTeachers: 'Згорнути список вихователів',
            allTeachers: 'Всі вихователі',
            prevPhoto: 'Попередня світлина',
            nextPhoto: 'Наступна світлина',
            prevMonth: 'Попередній місяць',
            nextMonth: 'Наступний місяць',
            close: 'Закрити',
            openMenu: 'Відкрити меню',
            callClub: 'Зателефонувати в дитячий клуб',
            instagramLabel: 'Instagram клубу',
            copyright: '© Дитячий клуб «Еврика», м. Харків, вул. Любові Малої, 22',
            filterAll: 'Всі',
            filterCreativity: 'Творчість',
            filterGames: 'Ігри',
            filterAtmosphere: 'Атмосфера',
            ratingBadge: '5.0 • Харків',
            calendarHeaderDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
            bookingToastSuccess: 'Заявку успішно надіслано!',
            leaveReviewToast: 'Дякуємо за інтерес! Напишіть нам у Telegram для публікації відгуку.'
        },

        programs: [
            {
                id: 'speech',
                title: 'Розвиток мовлення та комунікації',
                age: '3–6 років',
                bgClass: 'bg-[#FFF3C4]',
                circleClass: 'bg-[#FBBF24]',
                icon: 'speech',
                details: 'Артикуляційна гімнастика, збагачення словникового запасу, розвиток зв\'язного мовлення та впевненого спілкування з однолітками в ігровій формі.'
            },
            {
                id: 'creative',
                title: 'Творчий розвиток',
                age: '3–10 років',
                bgClass: 'bg-[#FCE4EC]',
                circleClass: 'bg-[#F472B6]',
                icon: 'palette',
                details: 'Ліплення, живопис, аплікація, робота з природними матеріалами, розвиток дрібної моторики та художнього смаку.'
            },
            {
                id: 'physical',
                title: 'Фізичний розвиток',
                age: '3–10 років',
                bgClass: 'bg-[#DCFCE7]',
                circleClass: 'bg-[#22C55E]',
                icon: 'runner',
                details: 'Рухливі ігри, дитяча гімнастика, координація рухів, ритміка та зміцнення здорової постави.'
            },
            {
                id: 'school',
                title: 'Підготовка до школи',
                age: '5–7 років',
                bgClass: 'bg-[#E0F2FE]',
                circleClass: 'bg-[#2563EB]',
                icon: 'cap',
                details: 'Читання, цікава математика, логіка, підготовка руки до письма та психологічна готовність до першого класу.'
            }
        ],

        ageGroups: {
            title: 'Вікові групи клубу «Еврика»',
            items: [
                {
                    title: 'Малюки 3–4 роки',
                    colorClass: 'text-brand-blue',
                    desc: 'Сенсорика, мовлення, музично-ритмічні ігри та творчість.'
                },
                {
                    title: 'Чомусики 5–6 років',
                    colorClass: 'text-amber-600',
                    desc: 'Підготовка до школи, англійська, творчість і шахи.'
                },
                {
                    title: 'Школярі 7–10 років',
                    colorClass: 'text-emerald-600',
                    desc: 'Інженерні проєкти, розмовна англійська, арт і турніри.'
                }
            ]
        },

        clubs: [
            {
                id: 'english',
                title: 'Англійська мова',
                age: 'Від 4 років',
                schedule: 'Пн, Ср, Пт • 11:00 та 17:00',
                groupSize: 'До 8 дітей',
                demoPrice: 'Демо-тариф: 220 грн / заняття',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
                description: 'Жива англійська через пісні, настільні ігри, сценки та живе спілкування без зубріння. Діти починають розуміти та говорити з перших тижнів.'
            },
            {
                id: 'art-studio',
                title: 'Творча майстерня',
                age: 'Від 3 років',
                schedule: 'Вт, Чт, Сб • 10:30 та 15:00',
                groupSize: 'До 10 дітей',
                demoPrice: 'Демо-тариф: 200 грн / заняття',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80',
                description: 'Малювання аквареллю та гуашшю, ліплення з глини та пластиліну, створення виробів та листівок. З кожного заняття дитина забирає додому готовий шедевр.'
            },
            {
                id: 'dance',
                title: 'Танці',
                age: 'Від 4 років',
                schedule: 'Пн, Ср, Пт • 16:30 – 17:30',
                groupSize: 'До 10 дітей',
                demoPrice: 'Демо-тариф: 200 грн / заняття',
                image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=500&q=80',
                description: 'Сучасна дитяча хореографія, відчуття ритму, пластика та веселі танцювальні постановки для святкових концертів клубу.'
            },
            {
                id: 'chess',
                title: 'Шахи',
                age: 'Від 5 років',
                schedule: 'Ср, Пт • 17:30, Сб • 12:00',
                groupSize: 'До 8 дітей',
                demoPrice: 'Демо-тариф: 210 грн / заняття',
                image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=500&q=80',
                description: 'Навчання шахової стратегії від знайомства з фігурами до дружніх турнірів. Тренує зосередженість, пам\'ять та вміння приймати рішення.'
            }
        ],

        teachers: [
            {
                id: 't1',
                name: 'Анна Петрова',
                role: 'Вихователь, ранній розвиток',
                experience: 'Досвід роботи: 8 років (Демо-профіль)',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
                bio: 'Фахівець із м\'якої адаптації малюків, розвитку мовлення та емоційного інтелекту через дбайливі ігрові методики.'
            },
            {
                id: 't2',
                name: 'Іван Соколов',
                role: 'Педагог із конструювання та логіки',
                experience: 'Досвід роботи: 6 років (Демо-профіль)',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
                imageOverride: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
                bio: 'Захоплює дітей конструюванням, фізикою та алгоритмами. Проводить командні квести та розвиваючі ігри.'
            },
            {
                id: 't3',
                name: 'Марія Іванова',
                role: 'Викладач англійської мови',
                experience: 'Досвід роботи: 7 років (Демо-профіль)',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
                bio: 'Володіє ігровими комунікативними методиками Кембриджу для дошкільнят та молодших школярів.'
            },
            {
                id: 't4',
                name: 'Олена Коваленко',
                role: 'Педагог творчої майстерні',
                experience: 'Досвід роботи: 9 років (Демо-профіль)',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
                bio: 'Художник-педагог, що розкриває творчий потенціал кожної дитини через живопис, кераміку та арт-терапію.'
            },
            {
                id: 't5',
                name: 'Дмитро Бондаренко',
                role: 'Тренер із шахів та логіки',
                experience: 'Досвід роботи: 10 років (Демо-профіль)',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
                bio: 'Кандидат у майстри спорту з шахів, автор дитячої ігрової програми розвитку логічного мислення.'
            }
        ],

        gallery: [
            {
                id: 'g1',
                title: 'Пікнік та активні ігри на свіжому повітрі',
                categoryId: 'games',
                category: 'Ігри',
                image: 'Club photoes/Gallery/photo_1_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g2',
                title: 'Святковий виїзд та смачні частування',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_2_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g3',
                title: 'Дружна команда клубу на екскурсії',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_3_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g4',
                title: 'Урочисті зустрічі та клубні події',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_4_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g5',
                title: 'Костюмоване свято та квести',
                categoryId: 'games',
                category: 'Ігри',
                image: 'Club photoes/Gallery/photo_5_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g6',
                title: 'Спільні клубні свята та чаювання',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_6_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g7',
                title: 'Арт-грим та творчі образи',
                categoryId: 'creativity',
                category: 'Творчість',
                image: 'Club photoes/Gallery/photo_7_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g8',
                title: 'Спільне малювання та арт-майстерня',
                categoryId: 'creativity',
                category: 'Творчість',
                image: 'Club photoes/Gallery/photo_8_2026-10-19_17-25-14.jpg'
            }
        ],

        calendarMonths: [
            { name: 'Квітень 2026', short: 'квіт', daysInMonth: 30, startOffset: 1 },
            { name: 'Травень 2026', short: 'трав', daysInMonth: 31, startOffset: 4 }
        ],

        calendarEvents: [
            {
                day: 5,
                monthIndex: 0,
                monthLabel: 'квіт',
                title: 'Майстер-клас із малювання «Весняні квіти»',
                time: '15:00 – 17:00',
                badgeBg: 'bg-[#FBBF24]',
                badgeText: 'text-navy',
                circleColor: '#3B82F6',
                age: '4–9 років'
            },
            {
                day: 12,
                monthIndex: 0,
                monthLabel: 'квіт',
                title: 'Відкрите заняття з англійської мови',
                time: '16:00 – 17:00',
                badgeBg: 'bg-[#F9A8D4]',
                badgeText: 'text-navy',
                circleColor: '#2563EB',
                age: '4–8 років'
            },
            {
                day: 18,
                monthIndex: 0,
                monthLabel: 'квіт',
                title: 'Театральний гурток «Казка»',
                time: '17:00 – 18:30',
                badgeBg: 'bg-[#4ADE80]',
                badgeText: 'text-navy',
                circleColor: '#2563EB',
                age: '3–7 років'
            },
            {
                day: 25,
                monthIndex: 0,
                monthLabel: 'квіт',
                title: 'День відкритих дверей',
                time: '10:00 – 14:00',
                badgeBg: 'bg-[#60A5FA]',
                badgeText: 'text-white',
                circleColor: '#EF4444',
                age: 'Для всієї родини'
            }
        ],

        reviews: [
            {
                name: 'Олена К.',
                child: 'мама Михайлика (5 років)',
                rating: 5,
                text: 'Чудовий клуб! Ходимо на шахи та творчість уже пів року. Дитина біжить на заняття з радістю, а вдома з гордістю показує свої вироби.'
            },
            {
                name: 'Ольга Васильєва',
                child: 'мама Софійки (4 роки)',
                rating: 5,
                text: 'Дуже чуйні та уважні вихователі! М\'яка адаптація пройшла буквально за 3 дні без сліз. Величезна подяка Анні Петровій.'
            },
            {
                name: 'Сергій Бондар',
                child: 'тато Артема (7 років)',
                rating: 5,
                text: 'Відмінний рівень підготовки до школи та сильні шахи. Чисто, світло, безпечно та з душею. Рекомендую батькам Харкова!'
            }
        ],

        modals: {
            booking: {
                title: 'Записатися на заняття',
                subtitle: 'Залиште контакти, і ми зателефонуємо вам протягом 15 хвилин',
                parentNameLabel: 'Ваше ім\'я (Один із батьків) *',
                parentNamePlaceholder: 'Наприклад, Олена',
                childNameLabel: 'Ім\'я дитини',
                childNamePlaceholder: 'Михайлик',
                childAgeLabel: 'Вік дитини',
                ageOptions: [
                    { value: '3 роки', label: '3 роки' },
                    { value: '4 роки', label: '4 роки' },
                    { value: '5 років', label: '5 років', selected: true },
                    { value: '6 років', label: '6 років' },
                    { value: '7-8 років', label: '7–8 років' },
                    { value: '9-10 років', label: '9–10 років' }
                ],
                phoneLabel: 'Телефон для зв\'язку *',
                directionLabel: 'Напрямок або запитання',
                directionPlaceholder: 'Пробне заняття / Консультація',
                submitButton: 'Надіслати заявку',
                successToast: (name, dir) => `Дякуємо, ${name}! Вашу заявку (${dir}) прийнято. Ми зв'яжемося з вами найближчим часом.`
            },
            details: {
                schedule: 'Розклад:',
                groupSize: 'Розмір групи:',
                price: 'Вартість:',
                enrollInClub: (title) => `Записатися в гурток «${title}»`,
                enrollInProgram: 'Записатися на напрямок',
                enrollWithTeacher: 'Записатися до групи педагога',
                ageGroupPrefix: 'Вікова група:',
                counterBadge: (curr, total) => `${curr} з ${total}`,
                viewAllPhotos: (total) => `Всі (${total})`,
                reviewsTitle: 'Відгуки батьків',
                reviewsSubtitle: 'Дитячий клуб «Еврика» • Середня оцінка: 5.0'
            },
            profile: {
                title: 'Особистий кабінет батьків',
                subtitle: 'Дитячий клуб «Еврика»',
                subStatus: 'Статус абонемента:',
                subStatusVal: 'Демо-доступ активний',
                branch: 'Ваш філіал:',
                branchVal: 'Харків, вул. Любові Малої, 22',
                adminContact: 'Зв\'язок з адміністратором:',
                newGroupBtn: 'Записатися в нову групу',
                contactBtn: 'Зв\'язатися з клубом'
            }
        },

        homePage: {
            heroTitle: 'Місце, де<br>дитинство стає<br>яскравішим!',
            sunAlt: 'Сонечко',
            trialPromo: 'Пробне заняття зі знижкою'
        },

        aboutPage: {
            title: 'Про наш клуб',
            description: '«Еврика» — це сучасний дитячий клуб, де кожна дитина може розкрити свій потенціал, знайти друзів та із задоволенням проводити час.',
            altImage: 'Затишна ігрова кімната дитячого клубу Еврика',
            advantages: [
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
            ],
            tourModalSubject: 'Екскурсія клубом'
        },

        programPage: {
            title: 'Наша програма',
            description: 'Ми пропонуємо комплексну програму розвитку для дітей від 3 до 10 років.',
            note: 'Заняття проходять в ігровій формі, з урахуванням віку та індивідуальних особливостей кожної дитини.',
            cardAgePrefix: 'Вік:',
            cardClickHint: 'Натисніть для деталей',
            programSelectSubject: 'Підбір програми за віком'
        },

        clubsPage: {
            title: 'Гуртки',
            description: 'Обирайте те, що подобається вашій дитині!',
            ctaBoxTitle: 'Не знаєте, який гурток обрати?',
            ctaBoxDesc: 'Приходьте на пробне заняття — дитина сама обере улюблену справу!',
            ctaBoxBtn: 'Записатися на пробне',
            bookingSubject: 'Запис на пробне заняття в гурток'
        },

        calendarPage: {
            title: 'Календар подій',
            bookBtn: 'Запис',
            bookingSubject: (title, day, month) => `Запис на подію: ${title} (${day} ${month})`
        },

        teachersPage: {
            title: 'Наші вихователі',
            description: 'З нами працюють турботливі, досвідчені та закохані у свою справу педагоги.',
            cleanExp: (exp) => exp.replace(' (Демо-профіль)', ''),
            allBtnCollapse: 'Згорнути список вихователів',
            allBtnExpand: (count) => `Всі вихователі (${count})`
        },

        galleryPage: {
            title: 'Галерея',
            description: 'Як проходить життя в нашому клубі — дивіться на світлинах!'
        },

        reviewsPage: {
            title: 'Відгуки батьків',
            subtitle: 'Що кажуть мами й тата про дитячий клуб «Еврика»:'
        },

        contactsPage: {
            title: 'Контакти',
            subtitle: 'Ми завжди на зв\'язку!<br>Телефонуйте, пишіть, приходьте в гості.',
            modalSubject: 'Повідомлення зі сторінки Контакти',
            formTitle: 'Форма зворотного зв\'язку',
            formSubtitle: 'Поставте запитання або запишіться на екскурсію по клубу',
            namePlaceholder: 'Ваше ім\'я *',
            phonePlaceholder: 'Ваш телефон *',
            msgPlaceholder: 'Ваше повідомлення або вік дитини...',
            formSuccessToast: (name) => `Дякуємо, ${name}! Повідомлення надіслано адміністратору клубу «Еврика».`
        }
    },

    // =========================================================================
    // 2. ENGLISH (INTERNATIONAL)
    // =========================================================================
    en: {
        pageTitle: 'Evrika Kids Club — Kharkiv',
        metaDescription: 'Evrika Children\'s Club in Kharkiv: early development, school prep, English classes, arts, dance, and chess for kids aged 3 to 10.',
        
        clubInfo: {
            name: 'Evrika',
            tagline: 'A place where childhood becomes brighter!',
            subTagline: 'Developmental classes, hobby clubs, friends and caring educators at Evrika kids club',
            city: 'Kharkiv',
            address: 'Kharkiv, 22 Liubovi Maloi Ave',
            addressShort: '22 Liubovi Maloi Ave',
            phone: '+38090000000',
            phoneFormatted: '+38 (090) 000-00-00',
            email: 'info@evrika-club.ua',
            workHours: 'Daily 8:00 AM – 8:00 PM'
        },

        logo: {
            letters: ['E', 'v', 'r', 'i', 'k', 'a'],
            subtitle: 'kids club'
        },

        langLabel: 'Eng',
        langFlag: '🇬🇧',

        navigation: [
            { id: 'home', title: 'Home', color: '#3B82F6', bg: '#DBEAFE', icon: 'home' },
            { id: 'about', title: 'About Us', color: '#F59E0B', bg: '#FEF3C7', icon: 'puzzle' },
            { id: 'program', title: 'Programs', color: '#3B82F6', bg: '#DBEAFE', icon: 'book' },
            { id: 'clubs', title: 'Clubs', color: '#EC4899', bg: '#FCE7F3', icon: 'palette' },
            { id: 'calendar', title: 'Calendar', color: '#8B5CF6', bg: '#F3E8FF', icon: 'calendar' },
            { id: 'gallery', title: 'Gallery', color: '#F59E0B', bg: '#FEF3C7', icon: 'gallery' },
            { id: 'teachers', title: 'Teachers', color: '#10B981', bg: '#DCFCE7', icon: 'users' },
            { id: 'contacts', title: 'Contacts', color: '#EF4444', bg: '#FEE2E2', icon: 'mail' }
        ],

        topMenuItems: [
            { id: 'about', title: 'About Us', icon: 'about' },
            { id: 'program', title: 'Programs', icon: 'program' },
            { id: 'clubs', title: 'Clubs', icon: 'clubs' },
            { id: 'calendar', title: 'Calendar', icon: 'calendar' },
            { id: 'gallery', title: 'Gallery', icon: 'gallery' },
            { id: 'teachers', title: 'Teachers', icon: 'teachers' },
            { id: 'contacts', title: 'Contacts', icon: 'contacts' },
            { id: 'reviews', title: 'Reviews', icon: 'reviews' }
        ],

        bottomNav: {
            home: 'Home',
            clubs: 'Clubs',
            calendar: 'Calendar',
            profile: 'Profile'
        },

        ui: {
            learnMore: 'Learn More',
            bookSpot: 'Book a Spot',
            bookTrial: 'Book a Trial',
            enrollClub: 'Join Club',
            viewProgram: 'View Our Programs →',
            bookIntro: 'Book an Introductory Visit',
            chooseClub: 'Choose a Club →',
            findGroup: 'Find a Group',
            viewOnMap: 'View on map',
            openGoogleMaps: 'Open Google Maps ↗',
            writeUs: 'Send Us a Message',
            sendMessage: 'Send Message',
            leaveReview: 'Leave a Review',
            bookSession: 'Book a Session',
            collapseTeachers: 'Collapse Teachers List',
            allTeachers: 'All Teachers',
            prevPhoto: 'Previous photo',
            nextPhoto: 'Next photo',
            prevMonth: 'Previous month',
            nextMonth: 'Next month',
            close: 'Close',
            openMenu: 'Open menu',
            callClub: 'Call kids club',
            instagramLabel: 'Club Instagram',
            copyright: '© Evrika Kids Club, Kharkiv, 22 Liubovi Maloi Ave',
            filterAll: 'All',
            filterCreativity: 'Art',
            filterGames: 'Games',
            filterAtmosphere: 'Atmosphere',
            ratingBadge: '5.0 • Kharkiv',
            calendarHeaderDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            bookingToastSuccess: 'Request sent successfully!',
            leaveReviewToast: 'Thank you for your feedback! Message us on Telegram to post your review.'
        },

        programs: [
            {
                id: 'speech',
                title: 'Speech & Communication',
                age: '3–6 years',
                bgClass: 'bg-[#FFF3C4]',
                circleClass: 'bg-[#FBBF24]',
                icon: 'speech',
                details: 'Articulation gymnastics, vocabulary building, fluent speech, and confident communication with peers through interactive play.'
            },
            {
                id: 'creative',
                title: 'Creative Arts & Craft',
                age: '3–10 years',
                bgClass: 'bg-[#FCE4EC]',
                circleClass: 'bg-[#F472B6]',
                icon: 'palette',
                details: 'Clay modeling, painting, papercraft, natural materials, fine motor skill development and aesthetic sensitivity.'
            },
            {
                id: 'physical',
                title: 'Physical Development',
                age: '3–10 years',
                bgClass: 'bg-[#DCFCE7]',
                circleClass: 'bg-[#22C55E]',
                icon: 'runner',
                details: 'Active games, kids gymnastics, movement coordination, rhythmics and healthy postural support.'
            },
            {
                id: 'school',
                title: 'School Preparation',
                age: '5–7 years',
                bgClass: 'bg-[#E0F2FE]',
                circleClass: 'bg-[#2563EB]',
                icon: 'cap',
                details: 'Reading, playful mathematics, logic puzzles, pre-writing hand dexterity, and emotional readiness for first grade.'
            }
        ],

        ageGroups: {
            title: 'Age Groups at Evrika Club',
            items: [
                {
                    title: 'Toddlers 3–4 yrs',
                    colorClass: 'text-brand-blue',
                    desc: 'Sensory discovery, speech, musical rhythm games and early creativity.'
                },
                {
                    title: 'Curious Explorers 5–6 yrs',
                    colorClass: 'text-amber-600',
                    desc: 'School readiness, English basics, arts and chess.'
                },
                {
                    title: 'Juniors 7–10 yrs',
                    colorClass: 'text-emerald-600',
                    desc: 'Hands-on STEM projects, conversational English, crafts and tournaments.'
                }
            ]
        },

        clubs: [
            {
                id: 'english',
                title: 'English Language',
                age: 'Ages 4+',
                schedule: 'Mon, Wed, Fri • 11:00 AM & 5:00 PM',
                groupSize: 'Up to 8 kids',
                demoPrice: 'Demo rate: 220 UAH / session',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
                description: 'Interactive English through songs, board games, role-play and natural dialogue without rote learning. Kids start understanding and speaking from week one.'
            },
            {
                id: 'art-studio',
                title: 'Art Studio & Crafts',
                age: 'Ages 3+',
                schedule: 'Tue, Thu, Sat • 10:30 AM & 3:00 PM',
                groupSize: 'Up to 10 kids',
                demoPrice: 'Demo rate: 200 UAH / session',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80',
                description: 'Watercolor and gouache painting, clay sculpting, handcrafted gifts and cards. Every session, each child takes home a completed masterpiece.'
            },
            {
                id: 'dance',
                title: 'Dance & Motion',
                age: 'Ages 4+',
                schedule: 'Mon, Wed, Fri • 4:30 PM – 5:30 PM',
                groupSize: 'Up to 10 kids',
                demoPrice: 'Demo rate: 200 UAH / session',
                image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=500&q=80',
                description: 'Modern dance choreography, sense of rhythm, flexibility and cheerful dance performances for club concerts.'
            },
            {
                id: 'chess',
                title: 'Chess Club',
                age: 'Ages 5+',
                schedule: 'Wed, Fri • 5:30 PM, Sat • 12:00 PM',
                groupSize: 'Up to 8 kids',
                demoPrice: 'Demo rate: 210 UAH / session',
                image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=500&q=80',
                description: 'Chess strategy coaching from basics to friendly tournaments. Develops patience, memory and critical thinking skills.'
            }
        ],

        teachers: [
            {
                id: 't1',
                name: 'Anna Petrova',
                role: 'Early Childhood Educator',
                experience: 'Experience: 8 years (Demo profile)',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
                bio: 'Expert in gentle toddler adaptation, speech development and emotional intelligence through playful guidance.'
            },
            {
                id: 't2',
                name: 'Ivan Sokolov',
                role: 'Robotics & Logic Teacher',
                experience: 'Experience: 6 years (Demo profile)',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
                imageOverride: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
                bio: 'Inspires children with building, physics and algorithms. Organizes team quests and cognitive games.'
            },
            {
                id: 't3',
                name: 'Maria Ivanova',
                role: 'English Language Teacher',
                experience: 'Experience: 7 years (Demo profile)',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
                bio: 'Certified in Cambridge playful communicative methods for preschoolers and primary school kids.'
            },
            {
                id: 't4',
                name: 'Elena Kovalenko',
                role: 'Art Studio Instructor',
                experience: 'Experience: 9 years (Demo profile)',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
                bio: 'Artist and pedagogue unlocking each child\'s creativity through fine art, ceramics and art therapy.'
            },
            {
                id: 't5',
                name: 'Dmitry Bondarenko',
                role: 'Chess & Logic Coach',
                experience: 'Experience: 10 years (Demo profile)',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
                bio: 'Candidate Master in Chess, author of a child-centered game syllabus for logical reasoning.'
            }
        ],

        gallery: [
            {
                id: 'g1',
                title: 'Outdoor picnic and active playground games',
                categoryId: 'games',
                category: 'Games',
                image: 'Club photoes/Gallery/photo_1_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g2',
                title: 'Holiday outdoor trip and delicious treats',
                categoryId: 'atmosphere',
                category: 'Atmosphere',
                image: 'Club photoes/Gallery/photo_2_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g3',
                title: 'Friendly club team on an exciting field trip',
                categoryId: 'atmosphere',
                category: 'Atmosphere',
                image: 'Club photoes/Gallery/photo_3_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g4',
                title: 'Celebrations and special club gatherings',
                categoryId: 'atmosphere',
                category: 'Atmosphere',
                image: 'Club photoes/Gallery/photo_4_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g5',
                title: 'Costume party and adventure quests',
                categoryId: 'games',
                category: 'Games',
                image: 'Club photoes/Gallery/photo_5_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g6',
                title: 'Cozy club holidays and friendly tea time',
                categoryId: 'atmosphere',
                category: 'Atmosphere',
                image: 'Club photoes/Gallery/photo_6_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g7',
                title: 'Face art and imaginative creative costumes',
                categoryId: 'creativity',
                category: 'Art',
                image: 'Club photoes/Gallery/photo_7_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g8',
                title: 'Collaborative painting in the art studio',
                categoryId: 'creativity',
                category: 'Art',
                image: 'Club photoes/Gallery/photo_8_2026-10-19_17-25-14.jpg'
            }
        ],

        calendarMonths: [
            { name: 'April 2026', short: 'Apr', daysInMonth: 30, startOffset: 1 },
            { name: 'May 2026', short: 'May', daysInMonth: 31, startOffset: 4 }
        ],

        calendarEvents: [
            {
                day: 5,
                monthIndex: 0,
                monthLabel: 'Apr',
                title: 'Painting Masterclass: "Spring Blossoms"',
                time: '3:00 PM – 5:00 PM',
                badgeBg: 'bg-[#FBBF24]',
                badgeText: 'text-navy',
                circleColor: '#3B82F6',
                age: 'Ages 4–9'
            },
            {
                day: 12,
                monthIndex: 0,
                monthLabel: 'Apr',
                title: 'Open English Language Play Session',
                time: '4:00 PM – 5:00 PM',
                badgeBg: 'bg-[#F9A8D4]',
                badgeText: 'text-navy',
                circleColor: '#2563EB',
                age: 'Ages 4–8'
            },
            {
                day: 18,
                monthIndex: 0,
                monthLabel: 'Apr',
                title: 'Kids Drama Club: "Fairy Tale"',
                time: '5:00 PM – 6:30 PM',
                badgeBg: 'bg-[#4ADE80]',
                badgeText: 'text-navy',
                circleColor: '#2563EB',
                age: 'Ages 3–7'
            },
            {
                day: 25,
                monthIndex: 0,
                monthLabel: 'Apr',
                title: 'Family Open House Day',
                time: '10:00 AM – 2:00 PM',
                badgeBg: 'bg-[#60A5FA]',
                badgeText: 'text-white',
                circleColor: '#EF4444',
                age: 'For entire family'
            }
        ],

        reviews: [
            {
                name: 'Elena K.',
                child: 'mom of Misha (5 y.o.)',
                rating: 5,
                text: 'Wonderful club! We have been taking chess and art classes for six months. Our son literally runs to class with excitement and shows his crafts with pride.'
            },
            {
                name: 'Olga Vasilyeva',
                child: 'mom of Sofia (4 y.o.)',
                rating: 5,
                text: 'Exceptionally caring and gentle teachers! The adaptation took only 3 days without tears. Huge gratitude to Anna Petrova.'
            },
            {
                name: 'Sergey Bondar',
                child: 'dad of Artem (7 y.o.)',
                rating: 5,
                text: 'Top-notch school readiness and strong chess coaching. Clean, bright, safe and heartfelt atmosphere. Highly recommended to Kharkiv parents!'
            }
        ],

        modals: {
            booking: {
                title: 'Book a Lesson',
                subtitle: 'Leave your contacts, and we will call you back within 15 minutes',
                parentNameLabel: 'Your Name (Parent) *',
                parentNamePlaceholder: 'e.g. Elena',
                childNameLabel: 'Child\'s Name',
                childNamePlaceholder: 'Michael',
                childAgeLabel: 'Child\'s Age',
                ageOptions: [
                    { value: '3 years', label: '3 years' },
                    { value: '4 years', label: '4 years' },
                    { value: '5 years', label: '5 years', selected: true },
                    { value: '6 years', label: '6 years' },
                    { value: '7-8 years', label: '7–8 years' },
                    { value: '9-10 years', label: '9–10 years' }
                ],
                phoneLabel: 'Contact Phone Number *',
                directionLabel: 'Program or Question',
                directionPlaceholder: 'Trial lesson / Consultation',
                submitButton: 'Submit Request',
                successToast: (name, dir) => `Thank you, ${name}! Your request (${dir}) has been received. We will contact you shortly.`
            },
            details: {
                schedule: 'Schedule:',
                groupSize: 'Group size:',
                price: 'Price:',
                enrollInClub: (title) => `Join "${title}" Club`,
                enrollInProgram: 'Enroll in this Program',
                enrollWithTeacher: 'Join this Teacher\'s Group',
                ageGroupPrefix: 'Age group:',
                counterBadge: (curr, total) => `${curr} of ${total}`,
                viewAllPhotos: (total) => `All (${total})`,
                reviewsTitle: 'Parents\' Reviews',
                reviewsSubtitle: 'Evrika Kids Club • Average Rating: 5.0'
            },
            profile: {
                title: 'Parent\'s Account',
                subtitle: 'Evrika Kids Club',
                subStatus: 'Subscription status:',
                subStatusVal: 'Demo access active',
                branch: 'Your branch:',
                branchVal: 'Kharkiv, 22 Liubovi Maloi Ave',
                adminContact: 'Contact administrator:',
                newGroupBtn: 'Enroll in a new group',
                contactBtn: 'Contact club'
            }
        },

        homePage: {
            heroTitle: 'A place where<br>childhood becomes<br>brighter!',
            sunAlt: 'Sun',
            trialPromo: 'Discounted trial session'
        },

        aboutPage: {
            title: 'About Our Club',
            description: 'Evrika is a modern children\'s club where every child can unlock their potential, make friends, and enjoy their time with curiosity and delight.',
            altImage: 'Cozy playroom at Evrika kids club',
            advantages: [
                {
                    title: 'Cozy and Safe Environment',
                    desc: 'Bright classrooms, eco-friendly furniture, and genuine care for every toddler\'s comfort.'
                },
                {
                    title: 'Individual Approach to Every Child',
                    desc: 'Small groups of up to 8–10 children allow us to give maximum attention to everyone.'
                },
                {
                    title: 'Development, Creativity, Friendship',
                    desc: 'A harmonious blend of intellectual, artistic, and active physical activities.'
                }
            ],
            tourModalSubject: 'Club tour request'
        },

        programPage: {
            title: 'Our Programs',
            description: 'We offer a comprehensive developmental program for children aged 3 to 10 years.',
            note: 'Classes are held in a playful format, respecting the age and unique traits of every child.',
            cardAgePrefix: 'Age:',
            cardClickHint: 'Click for details',
            programSelectSubject: 'Age-appropriate program selection'
        },

        clubsPage: {
            title: 'Clubs & Activities',
            description: 'Choose what your child loves best!',
            ctaBoxTitle: 'Not sure which club to pick?',
            ctaBoxDesc: 'Come to a trial class — your child will discover their favorite passion!',
            ctaBoxBtn: 'Book a Trial',
            bookingSubject: 'Trial session booking in club'
        },

        calendarPage: {
            title: 'Event Calendar',
            bookBtn: 'Book',
            bookingSubject: (title, day, month) => `Event booking: ${title} (${day} ${month})`
        },

        teachersPage: {
            title: 'Our Teachers',
            description: 'Our team brings together caring, seasoned, and inspiring educators.',
            cleanExp: (exp) => exp.replace(' (Demo profile)', '').replace(' (Демо-профиль)', ''),
            allBtnCollapse: 'Collapse Teachers List',
            allBtnExpand: (count) => `All Teachers (${count})`
        },

        galleryPage: {
            title: 'Gallery',
            description: 'See what daily life looks like in our club through photos!'
        },

        reviewsPage: {
            title: 'Parents\' Reviews',
            subtitle: 'What mothers and fathers say about Evrika Kids Club:'
        },

        contactsPage: {
            title: 'Contacts',
            subtitle: 'We are always in touch!<br>Call us, drop a note, or come visit in person.',
            modalSubject: 'Message from Contacts Page',
            formTitle: 'Feedback Form',
            formSubtitle: 'Ask a question or book an introductory tour of the club',
            namePlaceholder: 'Your name *',
            phonePlaceholder: 'Your phone *',
            msgPlaceholder: 'Your message or child\'s age...',
            formSuccessToast: (name) => `Thank you, ${name}! Your message has been sent to Evrika club administrator.`
        }
    },

    // =========================================================================
    // 3. РУССКИЙ (СОХРАНЁННЫЙ ОРИГИНАЛ)
    // =========================================================================
    ru: {
        pageTitle: 'Детский клуб «Эврика» — Харьков',
        metaDescription: 'Детский клуб «Эврика» в Харькове: развивающие занятия, подготовка к школе, английский язык, творчество, танцы и шахматы для детей от 3 до 10 лет.',
        
        clubInfo: {
            name: 'Эврика',
            tagline: 'Место, где детство становится ярче!',
            subTagline: 'Развивающие занятия, кружки, друзья и заботливые воспитатели в детском клубе «Эврика»',
            city: 'г. Харьков',
            address: 'г. Харьков, ул. Любови Малой, 22',
            addressShort: 'ул. Любови Малой, 22',
            phone: '+38090000000',
            phoneFormatted: '+38 (090) 000-00-00',
            email: 'info@evrika-club.ua',
            workHours: 'Ежедневно с 8:00 до 20:00'
        },

        logo: {
            letters: ['Э', 'в', 'р', 'и', 'к', 'а'],
            subtitle: 'детский клуб'
        },

        langLabel: 'Рус',
        langFlag: '🇷🇺',

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

        topMenuItems: [
            { id: 'about', title: 'О клубе', icon: 'about' },
            { id: 'program', title: 'Программа', icon: 'program' },
            { id: 'clubs', title: 'Кружки', icon: 'clubs' },
            { id: 'calendar', title: 'Календарь', icon: 'calendar' },
            { id: 'gallery', title: 'Галерея', icon: 'gallery' },
            { id: 'teachers', title: 'Воспитатели', icon: 'teachers' },
            { id: 'contacts', title: 'Контакты', icon: 'contacts' },
            { id: 'reviews', title: 'Отзывы', icon: 'reviews' }
        ],

        bottomNav: {
            home: 'Главная',
            clubs: 'Кружки',
            calendar: 'Календарь',
            profile: 'Профиль'
        },

        ui: {
            learnMore: 'Узнать больше',
            bookSpot: 'Записаться',
            bookTrial: 'Записаться на пробное',
            enrollClub: 'Записаться в кружок',
            viewProgram: 'Смотреть нашу программу →',
            bookIntro: 'Записаться на знакомство',
            chooseClub: 'Выбрать кружок →',
            findGroup: 'Подобрать группу',
            viewOnMap: 'Посмотреть на карте',
            openGoogleMaps: 'Открыть Google Карты ↗',
            writeUs: 'Написать нам',
            sendMessage: 'Отправить сообщение',
            leaveReview: 'Оставить отзыв',
            bookSession: 'Записаться на занятие',
            collapseTeachers: 'Свернуть список воспитателей',
            allTeachers: 'Все воспитатели',
            prevPhoto: 'Предыдущее фото',
            nextPhoto: 'Следующее фото',
            prevMonth: 'Предыдущий месяц',
            nextMonth: 'Следующий месяц',
            close: 'Закрыть',
            openMenu: 'Открыть меню',
            callClub: 'Позвонить в детский клуб',
            instagramLabel: 'Instagram клуба',
            copyright: '© Детский клуб «Эврика», г. Харьков, ул. Любови Малой, 22',
            filterAll: 'Все',
            filterCreativity: 'Творчество',
            filterGames: 'Игры',
            filterAtmosphere: 'Атмосфера',
            ratingBadge: '5.0 • Харьков',
            calendarHeaderDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            bookingToastSuccess: 'Заявка успешно отправлена!',
            leaveReviewToast: 'Спасибо за интерес! Напишите нам в Telegram для публикации отзыва.'
        },

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

        ageGroups: {
            title: 'Возрастные группы клуба «Эврика»',
            items: [
                {
                    title: 'Малыши 3–4 года',
                    colorClass: 'text-brand-blue',
                    desc: 'Сенсорика, речь, музыкально-ритмические игры и творчество.'
                },
                {
                    title: 'Почемучки 5–6 лет',
                    colorClass: 'text-amber-600',
                    desc: 'Подготовка к школе, английский, творчество и шахматы.'
                },
                {
                    title: 'Школьники 7–10 лет',
                    colorClass: 'text-emerald-600',
                    desc: 'Инженерные проекты, разговорный английский, арт и турниры.'
                }
            ]
        },

        clubs: [
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
                role: 'Педагог по конструированию и логике',
                experience: 'Опыт работы: 6 лет (Демо-профиль)',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
                imageOverride: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
                bio: 'Увлекает детей конструированием, физикой и алгоритмами. Проводит командные квесты и развивающие игры.'
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

        gallery: [
            {
                id: 'g1',
                title: 'Пикник и активные игры на свежем воздухе',
                categoryId: 'games',
                category: 'Игры',
                image: 'Club photoes/Gallery/photo_1_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g2',
                title: 'Праздничный выезд и вкусные угощения',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_2_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g3',
                title: 'Дружная команда клуба на экскурсии',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_3_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g4',
                title: 'Торжественные встречи и клубные события',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_4_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g5',
                title: 'Костюмированный праздник и квесты',
                categoryId: 'games',
                category: 'Игры',
                image: 'Club photoes/Gallery/photo_5_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g6',
                title: 'Совместные клубные праздники и чаепития',
                categoryId: 'atmosphere',
                category: 'Атмосфера',
                image: 'Club photoes/Gallery/photo_6_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g7',
                title: 'Арт-грим и творческие образы',
                categoryId: 'creativity',
                category: 'Творчество',
                image: 'Club photoes/Gallery/photo_7_2026-10-19_17-25-14.jpg'
            },
            {
                id: 'g8',
                title: 'Совместное рисование и арт-мастерская',
                categoryId: 'creativity',
                category: 'Творчество',
                image: 'Club photoes/Gallery/photo_8_2026-10-19_17-25-14.jpg'
            }
        ],

        calendarMonths: [
            { name: 'Апрель 2026', short: 'апр', daysInMonth: 30, startOffset: 1 },
            { name: 'Май 2026', short: 'мая', daysInMonth: 31, startOffset: 4 }
        ],

        calendarEvents: [
            {
                day: 5,
                monthIndex: 0,
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
                monthIndex: 0,
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
                monthIndex: 0,
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
                monthIndex: 0,
                monthLabel: 'апр',
                title: 'День открытых дверей',
                time: '10:00 – 14:00',
                badgeBg: 'bg-[#60A5FA]',
                badgeText: 'text-white',
                circleColor: '#EF4444',
                age: 'Для всей семьи'
            }
        ],

        reviews: [
            {
                name: 'Елена К.',
                child: 'мама Миши (5 лет)',
                rating: 5,
                text: 'Замечательный клуб! Ходим на шахматы и творчество уже полгода. Ребёнок идёт на занятия вприпрыжку, а дома с гордостью показывает свои поделки.'
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

        modals: {
            booking: {
                title: 'Записаться на занятие',
                subtitle: 'Оставьте контакты, и мы перезвоним вам в течение 15 минут',
                parentNameLabel: 'Ваше имя (Родитель) *',
                parentNamePlaceholder: 'Например, Елена',
                childNameLabel: 'Имя ребёнка',
                childNamePlaceholder: 'Миша',
                childAgeLabel: 'Возраст ребёнка',
                ageOptions: [
                    { value: '3 года', label: '3 года' },
                    { value: '4 года', label: '4 года' },
                    { value: '5 лет', label: '5 лет', selected: true },
                    { value: '6 лет', label: '6 лет' },
                    { value: '7-8 лет', label: '7–8 лет' },
                    { value: '9-10 лет', label: '9–10 лет' }
                ],
                phoneLabel: 'Телефон для связи *',
                directionLabel: 'Направление или вопрос',
                directionPlaceholder: 'Пробное занятие / Консультация',
                submitButton: 'Отправить заявку',
                successToast: (name, dir) => `Спасибо, ${name}! Ваша заявка (${dir}) принята. Мы свяжемся с вами в ближайшее время.`
            },
            details: {
                schedule: 'Расписание:',
                groupSize: 'Размер группы:',
                price: 'Стоимость:',
                enrollInClub: (title) => `Записаться в кружок «${title}»`,
                enrollInProgram: 'Записаться на направление',
                enrollWithTeacher: 'Записаться в группу педагога',
                ageGroupPrefix: 'Возрастная группа:',
                counterBadge: (curr, total) => `${curr} из ${total}`,
                viewAllPhotos: (total) => `Все (${total})`,
                reviewsTitle: 'Отзывы родителей',
                reviewsSubtitle: 'Детский клуб «Эврика» • Средняя оценка: 5.0'
            },
            profile: {
                title: 'Личный кабинет родителя',
                subtitle: 'Детский клуб «Эврика»',
                subStatus: 'Статус абонемента:',
                subStatusVal: 'Демо-доступ активен',
                branch: 'Ваш филиал:',
                branchVal: 'Харьков, ул. Любови Малой, 22',
                adminContact: 'Связь с администратором:',
                newGroupBtn: 'Записаться в новую группу',
                contactBtn: 'Связаться с клубом'
            }
        },

        homePage: {
            heroTitle: 'Место, где<br>детство становится<br>ярче!',
            sunAlt: 'Солнышко',
            trialPromo: 'Пробное занятие со скидкой'
        },

        aboutPage: {
            title: 'О нашем клубе',
            description: 'Эврика — это современный детский клуб, где каждый ребёнок может раскрыть свой потенциал, найти друзей и с удовольствием проводить время.',
            altImage: 'Уютная игровая комната детского клуба Эврика',
            advantages: [
                {
                    title: 'Уютная и безопасная атмосфера',
                    desc: 'Светлые игровые классы, экологичная мебель и забота о комфорте каждого малыша.'
                },
                {
                    title: 'Индивидуальный подход к каждому ребёнку',
                    desc: 'Небольшие группы до 8–10 детей позволяют уделить максимум внимания каждому.'
                },
                {
                    title: 'Развитие, творчество, дружба',
                    desc: 'Гармоничное сочетание интеллектуальных, творческих и подвижных занятий.'
                }
            ],
            tourModalSubject: 'Экскурсия по клубу'
        },

        programPage: {
            title: 'Наша программа',
            description: 'Мы предлагаем комплексную программу развития для детей от 3 до 10 лет.',
            note: 'Занятия проходят в игровой форме, с учётом возраста и индивидуальных особенностей каждого ребёнка.',
            cardAgePrefix: 'Возраст:',
            cardClickHint: 'Нажмите для подробностей',
            programSelectSubject: 'Подбор программы по возрасту'
        },

        clubsPage: {
            title: 'Кружки',
            description: 'Выбирайте то, что нравится вашему ребёнку!',
            ctaBoxTitle: 'Не знаете, какой кружок выбрать?',
            ctaBoxDesc: 'Приходите на пробное занятие — ребёнок сам выберет любимое дело!',
            ctaBoxBtn: 'Записаться на пробное',
            bookingSubject: 'Запись на пробное занятие в кружок'
        },

        calendarPage: {
            title: 'Календарь событий',
            bookBtn: 'Запись',
            bookingSubject: (title, day, month) => `Запись на событие: ${title} (${day} ${month})`
        },

        teachersPage: {
            title: 'Наши воспитатели',
            description: 'С нами работают заботливые, опытные и увлечённые своим делом педагоги.',
            cleanExp: (exp) => exp.replace(' (Демо-профиль)', ''),
            allBtnCollapse: 'Свернуть список воспитателей',
            allBtnExpand: (count) => `Все воспитатели (${count})`
        },

        galleryPage: {
            title: 'Галерея',
            description: 'Как проходит жизнь в нашем клубе — смотрите в фотографиях!'
        },

        reviewsPage: {
            title: 'Отзывы родителей',
            subtitle: 'Что говорят мамы и папы о детском клубе «Эврика»:'
        },

        contactsPage: {
            title: 'Контакты',
            subtitle: 'Мы всегда на связи!<br>Звоните, пишите, приходите в гости.',
            modalSubject: 'Сообщение со страницы Контакты',
            formTitle: 'Форма обратной связи',
            formSubtitle: 'Задайте вопрос или запишитесь на экскурсию по клубу',
            namePlaceholder: 'Ваше имя *',
            phonePlaceholder: 'Ваш телефон *',
            msgPlaceholder: 'Ваше сообщение или возраст ребёнка...',
            formSuccessToast: (name) => `Спасибо, ${name}! Сообщение отправлено администратору клуба «Эврика».`
        }
    }
};
