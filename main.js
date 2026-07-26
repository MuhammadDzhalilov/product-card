const productCard = document.querySelector ('.card'); 
const colorChangeBtn = document.querySelector ('#card-color-change-btn'); 
const myColor = '#19f0de';
const beautifulColor = '#51ff00';
const defaultColor = '#f7f7fa'

colorChangeBtn.addEventListener ('click', () => {
  productCard.style.backgroundColor = beautifulColor;  
})
colorChangeBtn.addEventListener ('dblclick', () => {
  productCard.style.backgroundColor = 'grey';  
})

const productCards= document.querySelectorAll ('.card');
const allColorChangeBtn= document.querySelector ('#all-cards-color-change-btn');

allColorChangeBtn.addEventListener ('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = myColor) 
})
allColorChangeBtn.addEventListener ('dblclick', () => {
  productCards.forEach((card) => card.style.backgroundColor = defaultColor) 
})

const openGoogleButton = document.querySelector('#open-page-google-btn');

openGoogleButton.addEventListener ('click', openGoogle)

function openGoogle() {
  const answer = confirm('Are you serious?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

const outputlogButton = document.querySelector('#output-console-log');

outputlogButton.addEventListener ('click', () => {outputConsoleLog('Пацаны ваще ребята', 'За вами слежка.');
});

function outputConsoleLog(message, alertText) {
  if (alertText) {
    alert(alertText)
  }
  console.log(message)
}

const titleOutputConsoleLog = document.querySelector('.title')

titleOutputConsoleLog.addEventListener('mouseover', () => {outputConsoleLog(titleOutputConsoleLog.textContent, null);
});

const toggleColorButton = document.querySelector("#toggle-color-btn")

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('button-toggle')
})

const buttonToggleThirdCardColor = document.querySelector('#toggle-third-card-btn')

const thirdCard = document.querySelector('.card_third')

buttonToggleThirdCardColor.addEventListener('click', () => {
  thirdCard.classList.toggle('button-toggle-color-card')
})