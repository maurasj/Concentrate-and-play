const cards = document.querySelectorAll('.single-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!flippedCard) {
        //firstClick
        hasFlippedCard = true;
        firstCard = this;
        console.log({hasFlippedCard, firstCard});
    }
    //second click!
    else {
        hasFlippedCard = false;
        secondCard = this;

        //do the cards match?
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));