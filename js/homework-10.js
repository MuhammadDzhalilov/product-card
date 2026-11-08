import { productCards } from "./products.js";

// (4) Метод reduce

const productInfo = productCards.reduce((acc, obj) => {
  acc.push({
    [obj.name]: obj.description
  });
  return acc;
}, []);
console.log(productInfo)

// (5) Prompt, template

function getCardNumber() {
  while (true) {
    const input = prompt("Сколько карточек отобразить? От 1 до 5");

    if (input === null) {
      return null;
    }

    const count = Number(input);

    if (Number.isInteger(count) && count >= 1 && count <= 5) {
      return count;
    }

    alert("Введите целое число от 1 до 5!");
  }
}

const cardsAmount = getCardNumber();

if (cardsAmount !== null) {
  renderCards(productCards.slice(0, cardsAmount));
}
function renderCards(cards) {
  const cardTemplate = document.getElementById('product-card-template');
  const cardList = document.querySelector('.products');

  cards.forEach((card) => {
    const productClone = cardTemplate.content.cloneNode(true);
    productClone.querySelector('.card__image').src = card.img;
    productClone.querySelector('.card__image').alt = card.alt;
    productClone.querySelector('.card__category').textContent = card.category;
    productClone.querySelector('.card__name').textContent = card.name;
    productClone.querySelector('.card__description p').textContent = card.description;

    const ingredients = productClone.querySelectorAll('.compound__list li');

    ingredients.forEach((item, index) => {
      item.textContent = card.ingredients[index];
    });

    productClone.querySelector('.card__price span').textContent = card.price;

    cardList.append(productClone);
  })
}
