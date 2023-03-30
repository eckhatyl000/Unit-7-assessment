function addToZero(arr) {
    // Create a set to store the numbers we've seen so far
    let seen = new Set();

    // Iterate through the array and check if the current number's complement (negative counterpart) has been seen before
    for (let i = 0; i < arr.length; i++) {
        let complement = -arr[i];
        if (seen.has(complement)) {
            return true;
        }
        seen.add(arr[i]);
    }

    // If we get through the whole array without finding a complement, return false
    return false;
}
console.log(addToZero([])); // false
console.log(addToZero([1])); // false
console.log(addToZero([1, 2, 3])); // false
console.log(addToZero([1, 2, 3, -2])); // true
function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) !== i) {
            return false;
        }
    }
    return true;
}

//Test Cases
console.log(hasUniqueChars("Monday")); // true
console.log(hasUniqueChars("Moonday")); // false
console.log(hasUniqueChars("Hannah")); // false
console.log(hasUniqueChars("abcdefg")); // true

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const chars = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));
    return alphabet.split("").every(char => chars.has(char));
}
isPangram("The quick brown fox jumps over the lazy dog!"); // true
isPangram("I like cats, but not mice"); // false
isPangram("The five boxing wizards jump quickly"); // true
isPangram("Pack my box with five dozen liquor jugs"); // true

function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}
const words = ["hi", "hello", "bonjour"];
console.log(findLongestWord(words)); // Output: 7 (length of "bonjour")
