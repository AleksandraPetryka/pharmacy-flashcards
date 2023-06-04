const flashcards = [
    {
        question: 'Wzór i nazwa chemiczna dla Meloksykam',
        answer: '4-Hydroksy-2-metylo-1,1-diokso-N-(5-metylo-1,3-tiazol-2-ilo)-1,2-benzotiazyno-3-karboksamid',
        img: 'https://drive.google.com/file/d/1fuvHBTUUsELng4xPwhU4dLDFYdYQTEns/view?usp=sharing',
    },
    {
        question: 'Kto jest ukochanym koteczkiem?!',
        answer: 'Moja cudowniutka Olusia <3!!!',
        img: 'https://ca.slack-edge.com/T017AD2GP50-U017GJK4UPN-e5705864f239-512',
    }
];


const shownFlashcards = {};
let shownFlashcardsNum = 0;
let isFinish = false;

function drawFlashcard() {
    if (shownFlashcardsNum === flashcards.length) {
        console.log('showing finish');
        showFinish();
        isFinish = true;
        return;
    }

    let id = Math.floor(Math.random() * flashcards.length);
    while(shownFlashcards[id]) {
        id = Math.floor(Math.random() * flashcards.length);
    }

    shownFlashcards[id] = true;
    shownFlashcardsNum += 1;
    return flashcards[id];
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
