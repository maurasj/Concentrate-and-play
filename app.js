const cards = document.querySelectorAll('.single-card');

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

//do the cards match?
function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards () : unflipcards();
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


//Randomise the deck of cards
(function shuffle() {
    cards.forEach(card => {
        let randomShuffle = Math.floor(Math.random() * 20);
        card.style.order = randomShuffle;
    });

})()
//reshuffle-reset game.
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
cards.forEach(card => card.addEventListener('click', flipCard));
