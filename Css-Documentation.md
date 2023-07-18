# Документація для CSS бібліотеки
У цій документації наведено опис інструкцій, класів та стилів, доступних у бібліотеці, за для того щоб слідкувати принципу DRY (Do Not Repeat Yourself). 
Документація надається українською мовою та в форматі Markdown (.md).

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


## 8. Стилі для іконок <a name="стилі-для-іконок"></a>

```css
/* СТИЛІ ДЛЯ ІКОНОК */

.icon {
    font-family: 'icomoon';
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
}

@media screen and (max-width: 700px) {
    .icon {
        font-size: 24px;
        line-height: 1;
    }
}
```

У цьому розділі наведено стилі для іконок, які використовують шрифтову іконку `icomoon`. Застосування цих стилів дозволяє легко використовувати іконки у вашому HTML-коді, присвоюючи клас `icon` до елементів, де потрібно показати іконку.

## 9. Стилі для групи елементів <a name="стилі-для-групи-елементів"></a>

```css
/* СТИЛІ ДЛЯ ГРУПИ ЕЛЕМЕНТІВ */

.group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 100px 20px;
    margin: 0 20px 30px;
    border-radius: 10px;
    background-color: var(--gray);
}

@media screen and (max-width: 700px) {
    .group {
        flex-direction: column;
        padding: 15px 10px;
    }
}
```

У цьому розділі наведено стилі для групи елементів з класом `group`. Він потрібен лише як свого роду тестовий-контайнер для елементів. 

## 10. Стилі для кнопок <a name="стилі-для-кнопок"></a>

```css
/* СТИЛІ ДЛЯ КНОПОК */

.button-main {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    padding: 15px 30px;
    gap: 10px;
    border-radius: 5px;
    background: var(--red, #8E1533);
    color: var(--white, #FFF);
    box-shadow: var(--shadow-red);
    border: none;
    cursor: pointer;
    transition: .3s;
}

@media screen and (max-width: 700px) {
    .button-main {
        padding: 5px 15px;
        line-height: 24px;
    }
}

.button-main:hover,
.cta-button:hover,
.contact-us-btn:hover {
    background: var(--gray);
    color: var(--white, #FFF);
    transition: .3s;
}
```

Ці стилі застосовуються до кнопок, які мають клас `button-main`.

## 11. Група кнопок "Call to Action" <a name="група-кнопок-call-to-action"></a>

```css
/* ГРУПА КНОПОК "CALL TO ACTION" */

.cta-btn-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    bottom: 60px;
    right: 60px;
    z-index: var(--layer-5);
}

@media screen and (max-width: 700px) {
    .cta-btn-group {
        gap: 10px;
        bottom: 15px;
        right: 15px;
    }
}

.cta-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 20px;
    border-radius: 50vh;
    background: var(--red, #8E1533);
    color: var(--white, #FFF);
    box-shadow: var(--shadow-red);
    cursor: pointer;
}

@media screen and (max-width: 700px) {
    .cta-button {
        padding: 12px;
    }
}

.cta-button .icon {
    font-size: 28px;
    line-height: 1;
    font-weight: 500;
}

@media screen and (max-width: 700px) {
    .cta-button .icon {
        font-size: 24px;
    }
}
```

У цьому розділі наведено стилі для групи кнопок "Call to Action" (кнопок, що стимулюють дії користувачів). Ця кнопка використовується для виклаканння деккількох інших кнопок з посиланнями до інстаграмму.
## 12. Кнопки "Contact Us" <a name="кнопки-contact-us"></a>

```css
/* КНОПКИ "CONTACT US" */

.contact-us {
    position: relative;
}

.contact-us-btn-group {
    display: none;
}

.contact-us-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 68px;
    border-radius: 50vh;
    background: var(--red);
    color: var(--white, #FFF);
    position: absolute;
    transform: translate(-50%, -50%);


    font-size: 50px;
    line-height: 1;
}

.contact-us-btn:nth-child(1) {
    right: 70px;
    top: 50%;
    background: #7E57C2;
}

.contact-us-btn:nth-child(2) {
    right: 45px;
    top: -70%;
    background: linear-gradient(180deg, #2AABEE 0%, #229ED9 100%);
}

.contact-us-btn:nth-child(3) {
    left: 50%;
    bottom: 70px;
    background: linear-gradient(0deg, #20B038 0%, #60D66A 100%);
}

.show-contact-us-btn-group {
    display: block;
}

.show-contact-us-btn-group .cta-button {
    transform: translateX(-120px) translateY(-120px);
    transition: transform 0.5s;
}

@media screen and (max-width: 700px) {
    .contact-us-btn {
        width: 48px;
        height: 48px;
        font-size: 30px;
    }

    .contact-us-btn:nth-child(1) {
        right: 40px;
        top: 50%;
    }

    .contact-us-btn:nth-child(2) {
        right: 30px;
        top: -60%;
    }

    .contact-us-btn:nth-child(3) {
        left: 50%;
        bottom: 40px;
    }
}
```

Вони надають ефекту "плаваючої" кнопки з використанням позиціонування і анімації. Ці кнопки використовуються як посилання до наших соц. мереж. Також ці кнопки використвують класс <icon> у HTML.
## 13. Стилі для вхідних полів <a name="стилі-для-вхідних-полів"></a>

```css
/* СТИЛІ ДЛЯ ВХІДНИХ ПОЛІВ */

.form-check-input {
    width: 20px;
    height: 20px;
    margin-top: 0;
    vertical-align: top;
    background-color: var(--white);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid var(--gray);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
}

.form-check-input:checked {
    background-color: var(--red, #8E1533);
    border-color: var(--red, #8E1533);
}

.form-check-input:focus {
    border-color: var(--red);
    outline: 0;
    box-shadow: var(--shadow-red);
}
```

Ці стилі застосовуються до вхідних полів, які мають клас `form-check-input`. Вони створюють стилізацію для відмічених та невідмічених вхідних полів, зокрема встановлюють розмір, внутрішні відступи, обрамлення та інші властивості. Крім того, наведено стилі для фокусування на вхідних полях.

## 14. Стилі для перемикачів у стилі iOS <a name="стилі-для-перемикачів-у-стилі-ios"></a>

```css
/* СТИЛІ ДЛЯ ПЕРЕМИКАЧІВ У СТИЛІ iOS */

.toggle-switch {
    position: relative;
    display: inline-flex;
    width: 35px;
    height: 20px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-switch label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--light-red);
    border-radius: 50vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-switch label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 3px;
    width: 13px;
    height: 13px;
    background-color: var(--white);
    border-radius: 50vw;
    transform: translate(0, -50%);
    transition: transform 0.3s ease;
}

.toggle-switch input:checked+label {
    background-color: var(--red);
}

.toggle-switch input:checked+label:before {
    transform: translate(17px, -50%);
}

@media screen and (max-width: 700px) {
    .toggle-switch label:before {
        left: 3px;
    }

    .toggle-switch input:checked+label:before {
        transform: translate(15px, -50%);
    }
}
```

У цьому розділі наведено стилі для перемикачів (toggle switches) у стилі iOS. Вони надають вигляд перемикачам, схожим на ті, що використовуються у пристроях Apple. Застосування класу `toggle-switch` до вхідних полів дозволяє застосовувати ці стилі до ваших перемикачів.

