function getQuestion(flashcard) {
    const div = document.createElement('h1');
    div.classList.add('question');
    div.innerText = flashcard.question;
    const imgs = flashcard.imgs ? flashcard.imgs : [flashcard.img];
    if (flashcard.showImgInQuestion){
        imgs.forEach(currentImage => {
            const img = document.createElement('img');
            img.setAttribute('src', currentImage);
            div.appendChild(img);
        })

    }
    return div;
}

function getAnswer(flashcard) {
    const div = document.createElement('div');
    div.setAttribute('class', 'answer');
    const imgs = flashcard.imgs ? flashcard.imgs : [flashcard.img];
    if (!flashcard.showImgInQuestion){
        imgs.forEach(currentImage => {
            const img = document.createElement('img');
            img.setAttribute('src', currentImage);
            div.appendChild(img);
        })
        // const img = document.createElement('img');
        // img.setAttribute('src', flashcard.img);
        // div.appendChild(img);
    }
    const answer = document.createElement('h3');
    answer.innerText = flashcard.answer;

    div.appendChild(answer);
    return div;
}

function generateFlashcard(flashcard) {
    const card = document.createElement('div');

    card.appendChild(getQuestion(flashcard));
    card.appendChild(getAnswer(flashcard));
    card.appendChild(getShowAnswerButton());
    return card;
}

function showFlashCard(flashcard) {
    console.log('my flashcard is = ', flashcard);
    const div = document.querySelector('#flashcards');
    div.innerHTML = '';
    div.appendChild(generateFlashcard(flashcard));
    handleHidingAnswer();
}
