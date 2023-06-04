console.log('my flashCards are: ', flashCards);


const shownFlashCards = {};
let shownFlashCardsNum = 0;
let isFinish = false;

function drawFlashcard() {
    if (shownFlashCardsNum === flashCards.length) {
        console.log('showing finish');
        showFinish();
        isFinish = true;
        return;
    }

    let id = Math.floor(Math.random() * flashCards.length);
    while(shownFlashCards[id]) {
        id = Math.floor(Math.random() * flashCards.length);
    }

    shownFlashCards[id] = true;
    shownFlashCardsNum += 1;
    return flashCards[id];
}

function handleNextCardClick() {
    const btn = document.querySelector('.next-card-btn');
    btn.addEventListener('click', () => {
        const card = drawFlashcard();
        if (isFinish) {
            hideNextQuestionButton();
            return;
        }

        showFlashCard(card);
    });
}

function main() {
    generateMainHtml();
    handleNextCardClick();

    const flashcard = drawFlashcard();
    showFlashCard(flashcard);
}

main();
