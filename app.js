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
        wordBox.newWord = null; 
    }
}
