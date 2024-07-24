// 1
const sentence = "The quick brown fox jumps over the lazy dog";
const slicedBrown = sentence.slice(10, 15).toUpperCase();
const extractedWord = sentence.replace("dog", slicedBrown);

console.log(extractedWord);
