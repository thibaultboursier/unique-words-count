module.exports = (text) => {
    return text
        .split(' ')
        .reduce((uniqueWords, word) => {
            const cleanedWord = cleanWord(word);

            uniqueWords.add(cleanedWord);

            return uniqueWords;
        }, new Set())
        .size;
}

function cleanWord(word) {
    return word.replace(/[,;.!?'"]+/g, '');
}
