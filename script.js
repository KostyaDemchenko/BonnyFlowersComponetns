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



// RANGE-FROM-TO-SLIDER



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


// INPUT-TELL

document.addEventListener("DOMContentLoaded", function() {
  var input = document.querySelectorAll("input[name=leyka_donor_phone]");
  var iti_el = document.querySelector('.iti.iti--allow-dropdown.iti--separate-dial-code');
  var iti;

  if (iti_el) {
    iti.destroy();
    // Get the current number in the given format
  }

  for (var i = 0; i < input.length; i++) {
    iti = intlTelInput(input[i], {
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      initialCountry: "auto",
      separateDialCode: true,
      preferredCountries: ['ua', 'pl'],
      customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        return '' + selectedCountryPlaceholder.replace(/[0-9]/g, 'X');
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js"
    });

    input[i].addEventListener("focus", function(e) {
      var pl = this.getAttribute('placeholder') + '';
      var res = pl.replace(/X/g, '9');
      if (res != 'undefined') {
        $(this).inputmask(res, {
          placeholder: "X",
          clearMaskOnLostFocus: true
        });
      }
    });

    input[i].addEventListener("focusout", function(e) {
      var intlNumber = iti.getNumber();
      console.log(intlNumber);
    });
  }
});

