// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash= "#00FF00"
const blueColorHash = "#0000FF"
const redColorHash = "red"

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card')

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const question = confirm('Вы действительно хотите открыть Google?');

  if (question === true) {
    window.open('https://google.com')
  } else {
    return
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert (message)
  console.log(message)
}

// Вывод заголовка в консоль при наведении курсором

const titleEl = document.querySelector('.title')

titleEl.addEventListener('mouseover', () => {
  console.log(titleEl.textContent)
})

// Смена цвета добавленной кнопки с одного на другой, при повторном нажатии цвет меняется с одного на первый

const changeColorButton = document.querySelector('#change-color-button')
changeColorButton.addEventListener ('click', () => {changeColorButton.classList.toggle('active'),
  console.log(changeColorButton.classList.contains('active'))
  if (changeColorButton.classList.contains('active')) {
    changeColorButton.style.backgroundColor = redColorHash;
} else {
  changeColorButton.style.backgroundColor = greenColorHash;
}
})