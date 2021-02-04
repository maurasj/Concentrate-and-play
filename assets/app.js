let cardsList = [];
const CARD_IMAGES = [
  'accordion',
  'africandrums',
  'bagpipe',
  'drums',
  'frenchhorn',
  'guitar',
  'harp',
  'piano',
  'shamisen',
  'violin',
];
document.addEventListener('DOMcontentLoaded', () => {
  const timeleftDisplay = document.querySelector('#timeleft')
  timeLeft = 10
  function countDown() {
    setInterval(function() {
      if(timeLeft <= 0 ) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -=1
    }, 1000)
  }
})
//duplicate cards//
const duplicate = (arr) => {
  return arr.concat(arr).sort()
};
//Are the cards matching?
function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards () : unflipcards();
}
function displayCards() {
  let parentDiv = document.getElementsByClassName('card-deck')[0];
  let cardsWithPairs = [...CARD_IMAGES, ...CARD_IMAGES];
  let HTMLString = "";
  cardsWithPairs.forEach(eachCard => {
  let randomShuffle = Math.floor(Math.random() * 20);
  HTMLString += (`<div class='single-card col-lg-2' data-image='${eachCard}' style="order: ${randomShuffle}">
    <img class='front-image' src='./assets/images/${eachCard}.png' alt='${eachCard}'>
    <img class='back-image' src='./assets/images/trebleclef.png' alt=''>
    </div>`);
  });
  parentDiv.innerHTML = HTMLString;
  cardsList = document.querySelectorAll('.single-card');
  cardsList.forEach(card => card.addEventListener('click', flipCard));
}
let hasFlippedCard = false;
let lockBoard = false;//to prevent more than 2 cards flipping at once
let firstCard, secondCard;
function flipCard() {
  if(lockBoard)
  return;
  if(this === firstCard)
  return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    //firstClick
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  //second click!
  secondCard = this;
  checkForMatch();
}
function disableCards() {
  /*when the cards match*/
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}
function unflipcards() {
  lockBoard = true;
  setTimeout(()=> {//time it takes for the card to flip back
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard();
  }, 2500);
}
// //Randomise the deck of cards
// (function shuffle() {
//   cards.forEach(card => {
//     let randomShuffle = Math.floor(Math.random() * 20);
//     card.style.order = randomShuffle;
//   });
// })()
//reshuffle-reset game.
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
//you are a WINNER!//

















