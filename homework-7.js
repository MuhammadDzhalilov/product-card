function calcTemperature(city, value) {
  console.log(`Сейчас в городе ${city} температура - ${value} градусов по Цельсию`)
}

calcTemperature('Хасавюрт', 19)

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость')
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}

checkSpeed(36)
checkSpeed(299792458)
checkSpeed(399792458)

const productPrice = 1337
const productName = "Яблоки у куринном бульоне"

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`Товар "${productName}" приобретён. Спасибо за покупку!`)
  } else {
    const difference = productPrice - budget
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
}

buyProduct(1300)
buyProduct(1500)

// Отсюда уже приступил к выполнению 6 и 7 задания.

function checkWorkoutStatus(name, goal, currentSteps) {
  if (currentSteps >= goal) {
    console.log(`Отличная работа, ${name}! Дневная норма в ${goal} шагов выполнена! Количество шагов на данный момент составляет ${currentSteps}.`)
  } else {
    const leftToWalk = goal - currentSteps;
    console.log(`Привет, ${name}! До цели осталось пройти еще ${leftToWalk} шагов. Вперёд!`)
  }
}

checkWorkoutStatus("Кенгуру", 750, 0)


const heroName = "Мафиозник";
const hat = "Розовая федора";
const area = "Шумиловский городок";