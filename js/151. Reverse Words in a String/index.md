# Intuition
### The key observations:
- We don't need to reverse the characters inside the words, only their order.
- Extra spaces should be trimmed, and there should only be one space between words in the result.
# Solution Code 
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
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
```
# Approach
1. **Trim the string**:
   - **`trim()`**: Remove any extra spaces from the start and end of the string.
   
2. **Split by space**:
   - **`split(/\s+/)`**: Use  to break the string into an array of words while ignoring extra spaces between them.

3. **Reverse the array**:
   - **`reverse()`**:  Reverse the array of words to get the words in the required order.
4. **Join the words back**:
   - **`join(' ')`**: Use to concatenate the words into a single string, separated by exactly one space.

### Example Walkthrough:

For the input `"  hello  world  "`:
1. **`trim()`** : `"hello  world"` (removes leading/trailing spaces)
2. **`split(/\s+/)`** : `["hello", "world"]` (splits by space, ignoring extra spaces)
3. **`reverse()`** : `["world", "hello"]` (reverses the order of the words)
4. **`join(' ')`** : `"world hello"` (joins with a single space)


# Complexity
- Time complexity:O(n)

- Space complexity:O(n)


