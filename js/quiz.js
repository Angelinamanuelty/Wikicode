let currentQuestion = 0;
const questions = [
    { text: "Do you like building websites or web apps?", options: ["yes", "no"] },
    { text: "Do you enjoy creating applications that interact with users?", options: ["yes", "no"] },
    { text: "Would you like to work with databases to store and manage data?", options: ["yes", "no"] },
    { text: "Do you enjoy problem-solving and logic puzzles?", options: ["yes", "no"] },
    { text: "Do you want to create applications that can run on many devices?", options: ["yes", "no"] },
    { text: "Are you interested in making mobile apps?", options: ["yes", "no"] },
    { text: "Do you prefer writing code that is easy to understand?", options: ["yes", "no"] },
    { text: "Would you like to work with a language that is widely used in the industry?", options: ["yes", "no"] },
    { text: "Do you enjoy learning about how computers work behind the scenes?", options: ["yes", "no"] },
    { text: "Do you like to work on projects that have fast performance and efficiency?", options: ["yes", "no"] },
    { text: "Are you excited about creating complex systems or software?", options: ["yes", "no"] },
    { text: "Would you like to learn a language that's used for a wide range of applications?", options: ["yes", "no"] },
    { text: "Do you like writing code that is flexible and adaptable?", options: ["yes", "no"] },
    { text: "Would you like to work with a programming language that has a lot of learning resources?", options: ["yes", "no"] }
];

const scores = {
    go: 0,
    java: 0,
    javascript: 0,
    ruby: 0,
    python: 0,
    cpp: 0
};

const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result");
const resultLogo = document.getElementById("result-logo");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        determineBestLanguage();
        return;
    }

    questionText.textContent = questions[currentQuestion].text;
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn", "btn-light", "btn-lg");
        btn.addEventListener("click", () => handleAnswer(option));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(answer) {
    
    switch (currentQuestion) {
        case 0:
            if (answer === "yes") scores.javascript += 1;
            break;
        case 1:
            if (answer === "yes") scores.javascript += 1;
            break;
        case 2:
            if (answer === "yes") scores.python += 1;
            break;
        case 3:
            if (answer === "yes") scores.java += 1;
            break;
        case 4:
            if (answer === "yes") scores.go += 1;
            break;
        case 5:
            if (answer === "yes") scores.javascript += 1;
            break;
        case 6:
            if (answer === "yes") scores.python += 1;
            break;
        case 7:
            if (answer === "yes") scores.java += 1;
            break;
        case 8:
            if (answer === "yes") scores.cpp += 1;
            break;
        case 9:
            if (answer === "yes") scores.cpp += 1;
            break;
        case 10:
            if (answer === "yes") scores.go += 1;
            break;
        case 11:
            if (answer === "yes") scores.ruby += 1;
            break;
        case 12:
            if (answer === "yes") scores.python += 1;
            break;
        case 13:
            if (answer === "yes") scores.java += 1;
            break;
    }
    currentQuestion++;
    loadQuestion();
}

function determineBestLanguage() {
    let bestLanguage = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    const languageLogos = {
        go: "../img/Go_Logo_Blue.svg",
        java: "../img/Java-Logo.svg",
        javascript: "../img/Unofficial_JavaScript_logo_2.svg",
        ruby: "../img/Ruby_logo.svg",
        python: "../img/python.svg",
        cpp: "../img/cpp.svg"
    };


    quizSection.style.display = "none";
    resultSection.style.display = "block";
    if (bestLanguage === "cpp") {
        bestLanguage = "C++";
    }
    resultText.textContent = `Your best programming language match is: ${bestLanguage.toUpperCase()}! 🎉`;
    if (bestLanguage === "C++") {
        bestLanguage = "cpp";
    }
    resultLogo.src = languageLogos[bestLanguage];
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    for (let lang in scores) {
        scores[lang] = 0;
    }
    quizSection.style.display = "block";
    resultSection.style.display = "none";
    loadQuestion();
});

function goHome() {
    window.location.href = "../html/indexlog.html";  
}

function Exit() {
    window.location.href = "../html/ExitQuiz.html";  
}
