const quotes = [
    "Code is like humor. When you have to explain it, it is bad.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Java is to JavaScript what car is to Carpet.",
    "Experience is the name everyone gives to their mistakes."
];

const quoteDisplay = document.getElementById("quoteDisplay");
const typedInput = document.getElementById("typedInput");
const timerDisplay = document.getElementById("timer");
const accuracyDisplay = document.getElementById("accuracy");
const wpmDisplay = document.getElementById("wpm");
const restartBtn = document.getElementById("restartBtn");

let currentQuote = "";
let timer = 0;
let timerInterval = null;
let hasTyped = false;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderQuote(quote) {
    quoteDisplay.innerHTML = '';
    quote.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        quoteDisplay.appendChild(span);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTest() {
    currentQuote = getRandomQuote();
    renderQuote(currentQuote);
    typedInput.value = '';
    typedInput.focus();
    timer = 0;
    timerDisplay.textContent = "0";
    accuracyDisplay.textContent = "100%";
    wpmDisplay.textContent = "0";
    hasTyped = false;
    stopTimer();
}

function calculateAccuracy(input, quote) {
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === quote[i]) correct++;
    }
    return ((correct / quote.length) * 100).toFixed(0);
}

function calculateWPM(inputLength, timeInSeconds) {
    const words = inputLength / 5;
    const minutes = timeInSeconds / 60;
    return minutes > 0 ? Math.round(words / minutes) : 0;
}

typedInput.addEventListener('input', () => {
    const input = typedInput.value;

    if (!hasTyped) {
        hasTyped = true;
        startTimer();
    }

    const quoteSpans = quoteDisplay.querySelectorAll('span');
    let correctAll = true;

    quoteSpans.forEach((span, idx) => {
        const char = input[idx];
        if (char == null) {
            span.classList.remove('correct', 'incorrect');
            correctAll = false;
        } else if (char === span.textContent) {
            span.classList.add('correct');
            span.classList.remove('incorrect');
        } else {
            span.classList.add('incorrect');
            span.classList.remove('correct');
            correctAll = false;
        }
    });

    accuracyDisplay.textContent = calculateAccuracy(input, currentQuote) + '%';
    wpmDisplay.textContent = calculateWPM(input.length, timer);

    if (input.length >= currentQuote.length) {
        stopTimer();
        typedInput.blur();
        alert("Typing test finished!");
    }
});

restartBtn.addEventListener('click', resetTest);

window.addEventListener('click', () => {
    typedInput.focus();
});

window.onload = resetTest;