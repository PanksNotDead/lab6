const cardsData = [
  { image: "Img/1.jpg", text: "Вид на гору" },
  { image: "Img/2.jpg", text: "Летняя природа" },
  { image: "Img/3.jpg", text: "Закат на горы" },
  { image: "Img/4.jpg", text: "Просто красивый вид" },
  { image: "Img/5.jpg", text: "Поле цветов" },
  { image: "Img/6.jpg", text: "Летний пруд" },
];

const cardTemplate = document.getElementById('cardTemplate');
const cardSection = document.querySelector(".card-section");

let loadIndex = 0;

function loadCardImage(card, imageUrl) {
  const img = card.querySelector('.card-image');
  const spinner = card.querySelector('.loading-spinner');

  // Что-то типазадержки
  setTimeout(() => {
      img.src = imageUrl;
      img.onload = () => {
          spinner.style.display = 'none'; // Скрыть спиннер
          img.style.display = 'block'; // показать изображение
      };
  }, 1000 * loadIndex); // Задержска 1с
}

function createCard(imageData) {
  const card = cardTemplate.content.cloneNode(true);

  const img = card.querySelector('.card-image');
  const text = card.querySelector('.card-text');
  const heartIcon = card.querySelector('.heart-icon');
  const initialHeartSrc = heartIcon.src;
  const likedHeartSrc = 'img/Like.png';

  text.textContent = imageData.text;

  let isLiked = false;

  heartIcon.addEventListener('click', () => {
      isLiked = !isLiked;
      heartIcon.src = isLiked ? likedHeartSrc : initialHeartSrc;
  });

  loadCardImage(card, imageData.image); // Запускаем изображения с задежской

  return card;
}

cardsData.forEach(cardData => {
  const card = createCard(cardData);
  cardSection.appendChild(card);
  loadIndex++; // переход по картинкам
});
