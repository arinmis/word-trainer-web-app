// word box app
const words = Vue.createApp({
    data() {
        return {
            wordArray: ["help"],
            newWord: ""
        }
    }
})

const wordBox = words.mount("#words");

function addWord() {
    if (wordBox.newWord.length > 1 && !wordBox.wordArray.includes(wordBox.newWord)) {
        wordBox.wordArray.push(wordBox.newWord);
        wordBox.newWord = ""; 
    }
}
 

// word box app
const quiz = Vue.createApp({
    data() {
        return {
            isStarted: false,
            quizWord: "_ _ _ _ _ _",
            answer: ""
        }
    }
})
 
const quizBox = quiz.mount("#quiz");

// answers app
const answers = Vue.createApp({
    data() {
        return {
            correctAnswers: [],
            wrongAnswers: [],
        }
    }
})

const answerBox = answers.mount("#answers");

let buffer;
let totalWord = 0;
let correctAnswer = 0;
// start the game
function start() {
    totalWord = wordBox.wordArray.length;
    quiz.isStarted = true;
    play();
}

function play() {
    buffer = wordBox.wordArray.splice(generateRandomIndex(wordBox.wordArray.length), 1)[0];
    quizBox.quizWord = shuffle(buffer);
    quizBox.answer = "";
}

function check() {
    console.log("here");
    if (!quiz.isStarted || quizBox.answer.length != buffer.length) 
        return;
    if (buffer == quizBox.answer) {
        answerBox.correctAnswers.push(buffer);
        correctAnswer++;
    }
    else {
        answerBox.wrongAnswers.push(buffer);
    }
    if (wordBox.wordArray.length == 0) {
        const result = correctAnswer / totalWord * 100;
        alert("Your score: " + result.toFixed().toString() + " / 100");
    }
    if (wordBox.wordArray.length != 0)
        play();
}

function generateRandomIndex(lenth) {
    return Math.floor(Math.random() * lenth);
}

function shuffle(str) {
    chars = str.split('');
    let shuffledStr = "";
    while (chars.length != 0) 
        shuffledStr += chars.splice(generateRandomIndex(chars.length), 1);
    return shuffledStr; 
}
