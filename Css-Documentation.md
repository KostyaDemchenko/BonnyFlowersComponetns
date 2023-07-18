# Документація для CSS бібліотеки

Це документація для вашої CSS бібліотеки. У цій документації наведено опис інструкцій, класів та стилів, доступних у вашій бібліотеці. Документація надається українською мовою та в форматі Markdown (.md).

## Зміст

1. [Імпорт шрифтів](#імпорт-шрифтів)
2. [Кореневі змінні](#кореневі-змінні)
3. [Стилі для прокручування](#стилі-для-прокручування)
4. [Скидання стилів](#скидання-стилів)
5. [Основні стилі](#основні-стилі)
6. [Стилі для шрифтів](#стилі-для-шрифтів)
7. [Адаптація шрифтів](#адаптація-шрифтів)

## 1. Імпорт шрифтів <a name="імпорт-шрифтів"></a>

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
```

Тут імпортується шрифт Montserrat з Google Fonts з різними налаштуваннями товщини та стилю.

Також, додається власний шрифт "icomoon" зі своїми файлами (.eot, .ttf, .woff, .svg) для використання.

## 2. Кореневі змінні <a name="кореневі-змінні"></a>

Ця секція містить змінні, які можна використовувати для створення стилів на сторінці.

```css
:root {
    /* КОЛЬОРИ */
    --dark-red: #CBADB4;
    --red: #8E1533;
    --light-red: #FFF2F4;
    --shadow-red-color: #8e153345;
    --darck-gray: #222220;
    --gray: #CCCCCC;
    --light-gray: #EEEEEE;
    --white: #FFFFFF;
    --aquamarine: #99FFF1;
    --shadow-red: 0px 4px 6px 0px var(--shadow-red-color);

    /* ШАРИ */
    --layer-1: 1;
    --layer-2: 20;
    --layer-3: 30;
    --layer-4: 40;
    --layer-5: 50;
    --layer-6: 99;
}
```

Ці змінні визначають палітру кольорів та шари, які можна використовувати у вашому CSS для створення стилів.

## 3. Стилі для прокручування <a name="стилі-для-прокручування"></a>

```css
/* СТИЛІ ДЛЯ ПРОКРУЧУВАННЯ */

/* Вертикальна прокрутка */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Вертикальний бігунець */
::-webkit-scrollbar-thumb {
    background: var(--red);
    border-radius: 50vh;
}
```

Ці стилі дозволяють налаштувати вигляд прокручування для блоків з вмістом, який перевищує доступну область.

## 4. Скидання стилів <a name="скидання-стилів"></a>

```css
/* СКИДАННЯ СТИЛІВ */

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
    background-color: var(--darck-gray);
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    line-height: 1;
}

a {
    text-decoration: none !important;
    cursor: pointer;
    transition: .3s;
}

a:hover {
    color: var(--red);
    transition: .3s;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
p,
ul,
ol,
li,
a,
button {
    margin: 0;
    padding: 0;
}
```

Ці стилі скидають значення за замовчуванням для деяких HTML-елементів, таких як `<body>`, `<a>`, `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<button>`, щоб забезпечити більш однорідний вигляд.

## 5. Основні стилі <a name="основні-стилі"></a>

```css
/* ОСНОВНІ СТИЛІ */

.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    padding: 20px;
}

.dark-red

 {
    color: var(--dark-red) !important;
}

.red {
    color: var(--red) !important;
}

.light-red {
    color: var(--light-red) !important;
}

.darck-gray {
    color: var(--darck-gray) !important;
}

.gray {
    color: var(--gray) !important;
}

.light-gray {
    color: var(--light-gray) !important;
}

.white {
    color: var(--white) !important;
}

.aquamarine {
    color: var(--aquamarine) !important;
}
```

У цьому розділі наведено основні стилі, які можуть бути застосовані до елементів. Зокрема, наведені стилі контейнера та стилі кольорів.

## 6. Стилі для шрифтів <a name="стилі-для-шрифтів"></a>

```css
/* СТИЛІ ДЛЯ ШРИФТІВ */

/* H1 */
.h1-42-auto-bold {
    color: var(--dark-grey, #222220);
    font-size: 42px;
    font-weight: 700;
}

.h1-42-auto-medium {
    color: var(--dark-grey, #222220);
    font-size: 42px;
    font-family: Montserrat;
    font-weight: 500;
}

.h1-42-auto-regular {
    color: var(--dark-grey, #222220);
    font-size: 42px;
    font-family: Montserrat;
}

/* H2 */
.h2-24-auto-bold {
    color: var(--dark-grey, #222220);
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
}

.h2-24-auto-medium {
    color: var(--dark-grey, #222220);
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 500;
}

.h2-24-auto-regular {
    color: var(--dark-grey, #222220);
    font-size: 24px;
    font-family: Montserrat;
}

.h2-24-auto-light {
    color: var(--dark-grey, #222220);
    font-size: 24px;
    line-height: 24px;
    font-family: Montserrat;
    font-weight: 300;
}

/* H3 */
.h3-20-auto-bold {
    color: var(--dark-grey, #222220);
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 700;
}

.h3-20-auto-medium {
    color: var(--dark-grey, #222220);
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 500;
}

.h3-20-auto-regular {
    color: var(--dark-grey, #222220);
    font-size: 20px;
    font-family: Montserrat;
}

.h3-20-auto-light {
    color: var(--dark-grey, #222220);
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 300;
}

/* Paragraph */
.p-16-auto-bold {
    color: var(--dark-grey, #222220);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
}

.p-16-auto-medium {
    color: var(--dark-grey, #222220);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
}

.p-16-auto-regular {
    color: var(--dark-grey, #222220);
    font-size: 16px;
    font-family: Montserrat;
}

.p-14-auto-bold {
    color: var(--dark-grey, #222220);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 700;
}

.p-14-auto-medium {
    color: var(--dark-grey, #222220);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
}

.p-14-auto-regular {
    color: var(--dark-grey, #222220);
    font-size: 14px;
    font-family: Montserrat;
}

.p-14-auto-light {
    color: var(--dark-grey, #222220);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 300;
}
```

У цьому розділі наведено стилі для різних типів текстових елементів, таких як заголовки (h1, h2, h3), абзаци (p) та посилання (a).

## 7. Адаптація шрифтів <a name="адаптація-шрифтів"></a>

```css
/* АДАПТАЦІЯ ШРИФТІВ */

@media screen and (max-width: 700px) {
    .container {
        max-width: 300px;
    }

    .h1-42-auto-bold {
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 700;
    }

    .h1-42-auto-medium {
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 500;
    }

    .h1-42-auto-regular {
        font-size: 16px;
        font-family: Montserrat;
    }

    .h2-24-auto-bold {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: 700;
    }

    .h2-24-auto-medium {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: 500;
    }

    .h2-24-auto-regular {
        font-size: 14px;
        font-family: Montserrat;
    }

    .h2-24-auto-light {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: 300;
    }

    .h3-20-auto-bold {
        font-size: 12px;
        font-family: Montserrat;
        font-weight: 700;
    }

    .h3-20-auto-medium {
        font-size: 12px;
        font-family: Montserrat;
        font-weight: 500;
    }

    .h3-20-auto-regular {
        font-size: 12px;
        font-family: Montserrat;
    }

    .h3-20-auto-light {
        font-size: 12px;
        font-family: Montserrat;
        font-weight: 300;
    }

    .p-16-auto-bold {
        font-size: 11px;
        font-family: Montserrat;
        font-weight: 700;
    }

    .p-16-auto-medium {
        font-size: 11px;
        font-family: Montserrat;
        font-weight: 500;
    }

    .p-16-auto-regular {
        font-size: 11px;
        font-family: Montserrat;
    }

    .p-14-auto-bold {
        font-size: 10px;
        font-family: Montserrat;
        font-weight: 300;
    }

    .p-14-auto-medium {
        font-size: 10px;
        font-family: Montserrat;
        font-weight: 700;
    }

    .p-14-auto-regular {
        font-size: 10px;
        font-family: Montserrat;
        font-weight: 500;
    }

    .p-14-auto-light {
        font-size: 10px;
        font-family: Montserrat;
    }
}
```

Ці стилі відповідають за адаптацію шрифтів для різних розмірів екрану. У розділі `@media` визначаються стилі для елементів при роздільній здатності екрану менше 700px.
