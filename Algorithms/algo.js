function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        // Increment sentence length for each character
        sentenceLength++;

        // Check for space to count words
        if (char === ' ') {
            wordCount++;
        }

        // Check for vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Increment word count for the last word (after the last space)
    wordCount++;

    // Remove the point from the sentence length
    sentenceLength--;

    return { sentenceLength, wordCount, vowelCount };
}

// Example usage:
const inputSentence = prompt("Enter a sentence ending with a point:");
if (inputSentence.endsWith('.')) {
    const { sentenceLength, wordCount, vowelCount } = analyzeSentence(inputSentence);
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
} else {
    console.log("Invalid input: Sentence should end with a point.");
}
