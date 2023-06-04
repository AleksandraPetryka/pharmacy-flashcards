function showFinish() {
    const div = document.querySelector('#flashcards');
    div.innerHTML = '';

    const finish = document.createElement('h1');
    finish.innerText = `Congratulations, you have answered ${shownFlashcardsNum} flashcards!`;
    div.appendChild(finish);
}

function getShowAnswerButton() {
    const btn = document.createElement('button');
    btn.classList.add('show-answer-btn');
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    btn.innerText = 'Show answer';
    return btn;
}

function handleHidingAnswer() {
    const answer = document.querySelector('.answer');
    const btn = document.querySelector('.show-answer-btn');

    answer.classList.add('hidden');
    btn.addEventListener('click', () => {
        answer.classList.remove('hidden');
        btn.classList.add('hidden');
    });
}

function getNextQuestionButton() {
    const btn = document.createElement('button');
    btn.classList.add('next-card-btn');
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    btn.innerText = 'Next question';
    return btn;
}

function generateMainHtml() {
    const root = document.querySelector('#root');
    root.innerHTML = '';

    const flashcardsDiv = document.createElement('div');
    flashcardsDiv.setAttribute('id', 'flashcards');
    root.appendChild(flashcardsDiv);
    root.appendChild(getNextQuestionButton());
}

function hideNextQuestionButton() {
    const btn = document.querySelector('.next-card-btn');
    btn.classList.add('hidden');
}