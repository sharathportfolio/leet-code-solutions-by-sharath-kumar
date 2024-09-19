// Problem link: https://leetcode.com/problems/reverse-words-in-a-string/description/
// Solution link: 
function reverseWords(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();

    // Step 2: Split the string by one or more spaces
    let words = s.split(/\s+/);

    // Step 3: Reverse the array of words
    let reversedWords = words.reverse();

    // Step 4: Join the reversed words with a single space
    return reversedWords.join(' ');
}

// Example usage:
console.log(reverseWords("the sky is blue"));  // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));  // Output: "world hello"
console.log(reverseWords("a good   example"));  // Output: "example good a"
