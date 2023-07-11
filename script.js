// SCROLL UP



// Получаем ссылку на кнопку прокрутки вверх
const scrollButton = document.getElementById('scroll-up');

// Добавляем обработчик события при клике на кнопку
scrollButton.addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем переход по ссылке

  // Получаем текущую позицию прокрутки
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Определяем, насколько далеко нужно прокрутить страницу к верху
  let scrollStep = currentPosition / 20; // Здесь можно настроить скорость прокрутки

  // Запускаем анимацию прокрутки
  function scrollToTop() {
    currentPosition -= scrollStep;

    // Прокручиваем страницу
    window.scroll(0, currentPosition);

    // Если еще не достигли верха страницы, продолжаем анимацию
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
    }
  }

  // Запускаем анимацию прокрутки
  scrollToTop();
});



// FEEDBACK-SHOW



const openCtaGroup = document.getElementById('open-cta');

const contactUsBtnGroup = document.querySelector('.contact-us-btn-group');

openCtaGroup.addEventListener('click', () => {
  contactUsBtnGroup.classList.toggle('show-contact-us-btn-group');
});



// COUNTER



// Получаем ссылки на необходимые элементы
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const countSpan = document.getElementById('count');

// Устанавливаем начальное значение счетчика
let count = 1;
countSpan.textContent = count;

// Обработчик события для уменьшения значения
decrementBtn.addEventListener('click', function () {
  if (count > 1) {
    count--;
    countSpan.textContent = count;
  }
});

// Обработчик события для увеличения значения
incrementBtn.addEventListener('click', function () {
  count++;
  countSpan.textContent = count;
});



// SLIDER



(function () {
  const parent = document.querySelector("#rangeSlider");
  if (!parent) return;

  const rangeS = parent.querySelectorAll("input[type=range]");
  const numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      let slide1 = parseFloat(rangeS[0].value);
      let slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      let number1 = parseFloat(numberS[0].value);
      let number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        let tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();
