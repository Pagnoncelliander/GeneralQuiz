const questions = [
    {
        question: "What is the capital of France?",
        options: [{ text: "London" }, { text: "Berlin" }, { text: "Madrid" }, { text: "Paris" }],
        correctIndex: 3
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: [{ text: "Mars" }, { text: "Venus" }, { text: "Jupiter" }, { text: "Saturn" }],
        correctIndex: 0
    },
    {
        question: "On what continent would you find the world’s largest desert?",
        options: [{ text: "Asia" }, { text: "Antarctica" }, { text: "America" }, { text: "Europe" }],
        correctIndex: 1
    },
    {
        question: "Where is Disney's European theme park located?",
        options: [{ text: "United State, Orlando" }, { text: "Brazil, Rio de Janeiro" }, { text: "Paris, France" }, { text: "Great Britain, London" }],
        correctIndex: 2
    },
    {
        question: "December 26th is known by what names in Ireland?",
        options: [{ text: "st patrick's day" }, { text: "Ireland independence day" }, { text: "christmas day" }, { text: "Saint Stephen's Day" }],
        correctIndex: 3
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const tryAgain = document.getElementById("refresh");
const NewGame = document.getElementById("new-game");

let currentQuestion = 0;
let score = 0;