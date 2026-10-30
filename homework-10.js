// Задание №3,5
const { productCards } = await import ('./product-cards.js');

function getNumberCards() {
      const numberOfCards = prompt("Сколько карточек отобразить?")
      if (numberOfCards >= 1 && numberOfCards <= 5) {
        return Number(numberOfCards);
      }
      return 0;
    }

const productCardsTemplate = document.querySelector('.product-card-template');
const productList = document.querySelector('.product-list');

function renderProducts(productCards) {
  productCards.forEach(products => {
  const productCopy = productCardsTemplate.content.cloneNode(true);
    productCopy.querySelector('.card__image').src = products.image;
    productCopy.querySelector('.card__image').alt = products.name;
    productCopy.querySelector('.card__category').textContent = products.category;
    productCopy.querySelector('.card__name').textContent = products.name;
    productCopy.querySelector('.card__description').textContent = products.description;
    productCopy.querySelector('.compound__list').innerHTML = products.compound.map(item => `<li>${item}</li>`).join('');
    productCopy.querySelector('.card__price').innerHTML = products.price;
    productList.appendChild(productCopy);
  });
};

const cardsCount = getNumberCards();
const selectedProducts = productCards.slice(0, cardsCount);

renderProducts(selectedProducts);


// Задание №4

const accArrayProducts = productCards.reduce((acc, products) => {
  return [...acc, { [products.name]: products.description}]
}, []);