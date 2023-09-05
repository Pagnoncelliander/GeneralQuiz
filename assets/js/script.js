const questions = [
    {
        question: "What is the capital of France?",
        options: [{text:"London"}, {text:"Berlin"}, {text:"Madrid"}, {text:"Paris"}],
        correctIndex: 3
    },
    {
        question: "which is larget animal in the world?",
        options: [{text:"Shark"}, {text:"Blue whale"}, {text:"Elephant"}, {text:"Girafe"}],
        correctIndex: 1
    },
    {
        question: "Where is Disney's European theme park located?",
        options: [{text:"London, England"}, {text:"Nice, France"}, {text:"Milan, Italy"}, {text:"Paris, France"}],
        correctIndex: 3
    },
    {
        question: "How many hearts does an octopus have?",
        options: [{text:"3"}, {text:"1"}, {text:"2"}, {text:"4"}],
        correctIndex: 0
    },
    {
        question: "How many hearts does an octopus have?",
        options: [{text:"3"}, {text:"1"}, {text:"2"}, {text:"4"}],
        correctIndex: 0
    },
    {
        question: "In what country was Elon Musk born?",
        options: [{text:"Canada"}, {text:"United State"}, {text:"England"}, {text:"South Africa"}],
        correctIndex: 0
    },
    {
        question: "On what continent would you find the world’s largest desert?",
        options: [{text:"Chile"}, {text:"Antarctica"}, {text:"Egypt"}, {text:"Afghanistan"}],
        correctIndex: 0
    },
  
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const tryAgain = document.getElementById("refresh");
const NewGame = document.getElementById("new-game");

const correctAnswerElement = document.getElementById("correct-answer");

let currentQuestion = 0;
let score = 0;


/** created a function "if" to display the question html, click and display botton */
function displayQuestion() {
    if (currentQuestion < questions.length) { 
        const question2 = questions[currentQuestion];
        questionElement.textContent = question2.question; 

        optionsElement.innerHTML = "";
        question2.options.forEach((option, correctIndex) => {
            const button = document.createElement("button");
            button.innerHTML = option.text;
            button.addEventListener("click", () => checkAnswer(correctIndex));
           
            button.classList.add("button");

            optionsElement.appendChild(button);
            
            correctAnswerElement.style.display = "none";
        });
            nextButton.style.display = "block"; 
            tryAgain.style.display = "none";
            NewGame.style.display = "none";
        } else {
            showResult();
        }
}


    /**this function will check each question and display the correct question */
    function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correctIndex) {
        score++;
    }

    
    /**created to show the correct answer for each question */
    
    const correctAnswerText = question.options[question.correctIndex].text;
    correctAnswerElement.textContent = `The correct Answer: ${correctAnswerText}`;
    correctAnswerElement.style.display = "block"; 

    currentQuestion++;
    nextButton.style.display = "block";
    
    // Disable buttons after an answer is selected
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

}




//**this function will compare the score and currentquestion and advise if score is goods or should try again */
function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    resultElement.style.display = "block";

    /**getting element from inner1(windown) */
    const NameLevel = window.location.search;
    const searchParams = new URLSearchParams(NameLevel);
    const param1  = searchParams.get('first_name');
    
    if(score <= 2){
        Homepage();
        resultElement.innerHTML = ` ${param1} Your score: ${score} out of ${questions.length}<br> Don't focus on the loss, focus on the next win.<br> Please try Again!!`;

    }else if (score === currentQuestion){
        resultElement.innerHTML = ` ${param1} Your score: ${score} out of ${questions.length}<br Congratulation, You Won!!`;

    }else if(score <= 4){
        resultElement.innerHTML = ` ${param1} Your score: ${score} out of ${questions.length} <br> Almost there, Try Again! `;
    };
    NewGame.style.display = "block";
    correctAnswerElement.style.display = "none";
}


    /**button to start quiz again */
nextButton.addEventListener("click", () => {
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = false);

    displayQuestion();
});



/**button start again */
function Homepage(){
    tryAgain.style.display = "block"; 
    tryAgain.addEventListener("click", () =>{
    location.reload();
});
};

Homepage();

displayQuestion();

