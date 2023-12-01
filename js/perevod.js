function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;

    var translations = {
        "ru": {
            "welcome_title": "Здоровье и Энергия из Fitline",
            "welcome_text": "Добро пожаловать в мир здорового образа жизни, где энергия, выносливость и здоровье превращаются в реальность благодаря продукции Fitline!",
            "apply_now": "Подать заявку прямо сейчас.",
            "more_about_fitline": {
                "title": "Еще больше о Fitline",
                "text": "Fitline — это не просто набор продуктов, это история о здоровье и жизненной энергии. Позвольте нам рассказать вам больше о том, почему Fitline выделяется среди других."
            },
            "UI/UX": {
                "title": "Научный подход",
                "text": "Наша продукция разработана на основе последних научных исследований для достижения оптимальных результатов."
            },
            "Code": {
                "title": "Контроль качества",
                "text": "Мы внимательно следим за качеством наших продуктов на каждом этапе производства. Fitline - это гарантия использования только лучших ингредиентов."
            },
            "App": {
                "title": "Индивидуализация для каждого",
                "text": "Мы понимаем, что каждый человек уникален, поэтому наши продукты разработаны с учетом индивидуальных потребностей и целей."
            },
            "homes": "Главная",
            "about_us": "О нас",
            "catalog": "Каталог",
            "info": "Info",
            "reviews": "Отзывы",
            "apply_now": "Подать заявку",
            "select_language": "Выберите язык:",
            "apply_language": "Применить"
        },
        "en": {
            "welcome_title": "Health and Energy with Fitline",
            "welcome_text": "Welcome to the world of a healthy lifestyle, where energy, endurance, and health become a reality thanks to Fitline products!",
            "apply_now": "Apply now.",
            "more_about_fitline": {
                "title": "More about Fitline",
                "text": "Fitline is not just a set of products; it's a story about health and vitality. Let us tell you more about why Fitline stands out among others."
            },
            "UI/UX": {
                "title": "Scientific Approach",
                "text": "Our products are developed based on the latest scientific research to achieve optimal results."
            },
            "Code": {
                "title": "Quality Control",
                "text": "We closely monitor the quality of our products at every stage of production. Fitline is a guarantee of using only the best ingredients."
            },
            "App": {
                "title": "Individualization for Everyone",
                "text": "We understand that every person is unique, so our products are designed with consideration for individual needs and goals."
            },
            "homes": "Home",
            "about_us": "About us",
            "catalog": "Catalog",
            "info": "Info",
            "reviews": "Reviews",
            "apply_now": "Apply now",
            "select_language": "Select language:",
            "apply_language": "Apply"
        },
        "uk": {
            "welcome_title": "Здоров'я та Енергія з Fitline",
            "welcome_text": "Ласкаво просимо до світу здорового способу життя, де енергія, витривалість і здоров'я перетворюються на реальність завдяки продукції Fitline!",
            "apply_now": "Подати заявку прямо зараз.",
            "more_about_fitline": {
                "title": "Ще більше про Fitline",
                "text": "Fitline — це не просто набір продуктів, це історія про здоров'я та життєву енергію. Дозвольте нам розповісти вам більше про те, чому Fitline відзначається серед інших."
            },
            "UI/UX": {
                "title": "Науковий підхід",
                "text": "Наша продукція розроблена на основі останніх наукових досліджень для досягнення оптимальних результатів."
            },
            "Code": {
                "title": "Контроль якості",
                "text": "Ми пильно стежимо за якістю наших продуктів на кожному етапі виробництва. Fitline  це гарантія використання тільки найкращих інгредієнтів."
            },
            "App": {
                "title": "Індивідуалізація для кожного",
                "text": "Ми розуміємо, що кожна людина унікальна, тому наші продукти розроблені з урахуванням індивідуальних потреб та цілей."
            },
            "homes": "Головна",
            "about_us": "Про нас",
            "catalog": "Каталог",
            "info": "Info",
            "reviews": "Відгуки",
            "apply_now": "Подати заявку",
            "select_language": "Виберіть мову:",
            "apply_language": "Застосувати"
        }
        // Add more translations as needed
    };

    applyTranslations();

    function applyTranslations() {
        var elements = document.querySelectorAll("[data-translation-key]");

        elements.forEach(function (element) {
            var key = element.getAttribute("data-translation-key");
            if (translations[selectedLanguage] && translations[selectedLanguage][key]) {
                if (typeof translations[selectedLanguage][key] === "string") {
                    element.textContent = translations[selectedLanguage][key];
                } else {
                    element.textContent = translations[selectedLanguage][key]["text"];
                    document.title = translations[selectedLanguage][key]["title"];
                }
            }
        });
    }
}
