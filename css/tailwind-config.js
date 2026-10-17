/**
 * Конфигурация Tailwind CSS для проекта «Эврика»
 */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                logo: ['Montserrat Alternates', 'sans-serif'],
            },
            colors: {
                milk: '#FAF9F5',
                navy: {
                    DEFAULT: '#1E3A5F',
                    light: '#3E5C82',
                    dark: '#132640'
                },
                brand: {
                    yellow: '#FCD34D',
                    yellowHover: '#FBBF24',
                    blue: '#3B82F6',
                    pink: '#F472B6',
                    green: '#4ADE80',
                    purple: '#A855F7',
                    orange: '#FB923C'
                },
                pastel: {
                    yellow: '#FEF3C7',
                    pink: '#FCE7F3',
                    green: '#DCFCE7',
                    blue: '#E0F2FE',
                    purple: '#F3E8FF',
                    card: '#FFFFFF'
                }
            },
            boxShadow: {
                'soft': '0 8px 25px -4px rgba(30, 58, 95, 0.06), 0 4px 10px -2px rgba(30, 58, 95, 0.03)',
                'card': '0 4px 15px rgba(30, 58, 95, 0.05)',
                'floating': '0 20px 40px -15px rgba(30, 58, 95, 0.12)'
            }
        }
    }
};
