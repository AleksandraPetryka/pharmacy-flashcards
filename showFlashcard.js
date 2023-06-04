function getQuestion(flashcard) {
    const div = document.createElement('h1');
    div.innerText = flashcard.question;
    return div;
}

function getAnswer(flashcard) {
    const div = document.createElement('div');
    div.setAttribute('class', 'answer');

    const img = document.createElement('img');
    img.setAttribute('src', flashcard.img);
    const answer = document.createElement('h3');
    answer.innerText = flashcard.answer;

    div.appendChild(img);
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
    const div = document.querySelector('#flashcards');
    div.innerHTML = '';
    div.appendChild(generateFlashcard(flashcard));
    handleHidingAnswer();
}
