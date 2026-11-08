// (3) Создание объекта с моей анкетой

const myInfo = {
  name: "Muhammad",
  surname: "Dzhalilov",
  age: 24,
  religionAffiliation: "Islam",
  dominantHand: "right",
  placeOfResidence: "Mutsalaul",
  hobby: "football",
  favouriteDrink: "water"
};

console.log(myInfo)

// (4) Создание еще одного объекта, плюс, слияение первого объекта со вторым, путем добавления нового свойства ко второму в новой строке

const carInfo = {
  brand: 'Dodge',
  model: "Challenger SRT Hellcat",
  yearOfManufacture: 2020,
  color: "black",
  transmission: "manual"
};

carInfo.owner = myInfo

console.log(carInfo)

// (5) Создание функции с проверкой на наличие свойства в объекте "carInfo"

function hasProperty(car) {
  if ("maxSpeed" in car) {
    return;
  } else {
    car.maxSpeed = 320;
  }
}

hasProperty(carInfo);

console.log(carInfo);

// (6) Функция, которая получает первым аргументом - объект, а вторым - свойство

function getPropValue(object, property) {
  console.log(object[property])
}

getPropValue(myInfo, "age")
getPropValue(myInfo, "name")
getPropValue(myInfo, "hobby")
getPropValue(carInfo, "brand")
getPropValue(carInfo, "model")

// (7) Массив, содержащий названия продуктов

const products = ["blackberry", "strawberry", "bread", "chocolate"];

console.log(products)

// (8) Создание массива из объектов с добавлением нового объекта в конец.

const groupOne = [
  { playerName: "Merino", club: "Arsenal", strongFoot: "left", number: 23, age: 30, position: "midfielder" },
  { playerName: "Odegaard", club: "Arsenal", strongFoot: "left", number: 8, age: 27, position: "midfielder" },
  { playerName: "Raya", club: "Arsenal", strongFoot: "right", number: 1, age: 30, position: "goalkeeper" },
  { playerName: "Martinelli", club: "Arsenal", strongFoot: "right", number: 11, age: 25, position: "forward" }
];

groupOne.push({ playerName: "Rice", club: "Arsenal", strongFoot: "right", number: 41, age: 27, position: "midfielder" })

console.log(groupOne)

// (9) Объединение двух массивов

const groupTwo = [
  { playerName: "Pavard", club: "Inter Milan", strongFoot: "right", number: 28, age: 30, position: "defender" },
  { playerName: "Calhanoglu", club: "Inter Milan", strongFoot: "right", number: 20, age: 32, position: "midfielder" },
  { playerName: "Barella", club: "Inter Milan", strongFoot: "right", number: 23, age: 29, position: "midfielder" },
  { playerName: "Martinez", club: "Inter Milan", strongFoot: "right", number: 10, age: 28, position: "forward" }
];

console.log(...groupOne, ...groupTwo)

const aggGroup = [...groupOne, ...groupTwo];

console.log(aggGroup)

// (10) Создание функции с методом ".map"

const modifiedAggGroup = aggGroup.map((player) => {
  let aggPropertyList;
  
  if ( player.age >= 30 ) {
    aggPropertyList = {
      ...player,
      isVeteran: true
    }
  } else {
    aggPropertyList = {
      ...player,
      isVeteran: false
    }
  }
  return aggPropertyList;
});

console.log(modifiedAggGroup)

const modifiedAggGroupTwo = aggGroup.map((player) => {
  let aggPropertyListTwo = {
    ...player, 
    isVeteran: player.age >= 30 ? true : false
  };
  return aggPropertyListTwo;
});

console.log(modifiedAggGroupTwo)

// Лучшее решение.

const modAggGroup = aggGroup.map((player) => {
    return {
      ...player,
      isVeteran: player.age >= 30
    }
});

console.log(modAggGroup)