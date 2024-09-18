/**
 * Approach:
 * To solve this problem, we'll use two containers (Box 1 & Box 2):
 * 
 * 1. Box 1: seenNumber – This will store the unique numbers we encounter.
 * 2. Box 2: result – This will store the numbers that we encounter more than once.
 * 
 * Steps:
 * - We will iterate through the array and, for each number, check if it's already in Box 1 (seenNumber).
 * - If the number is not in Box 1, we'll add it.
 * - If the number is already in Box 1, this means it's a duplicate, so we'll push it to Box 2 (result).
 * 
 * Example:
 * Given array: [0, 1, 1, 0]
 * 
 * Iteration 1: 
 * Current number: 0
 * Box 1 is empty, so we add 0 to it.
 * Box 1 = [0]
 * 
 * Iteration 2: 
 * Current number: 1
 * Box 1 doesn't have 1, so we add 1.
 * Box 1 = [0, 1]
 * 
 * Iteration 3: 
 * Current number: 1
 * Box 1 already contains 1, so we push 1 to Box 2 (result).
 * Box 2 = [1]
 * 
 * Iteration 4: 
 * Current number: 0
 * Box 1 already contains 0, so we push 0 to Box 2 (result).
 * Box 2 = [1, 0]
 * 
 * The final result contains [1, 0], which are the numbers that appeared more than once in the array.
 * 
 * Complexity:
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 * 
 * Code:
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
    const seenNumber = new Set();  // Box 1
    const result = [];  // Box 2

    // Iterate through the array
    for (let num of nums) {
        if (seenNumber.has(num)) {
            result.push(num);  // If number already in Box 1, push to Box 2
        } else {
            seenNumber.add(num);  // If not, add to Box 1
        }
    }

    return result;  // Return numbers that appeared more than once
}

// Example usage
const nums = [0, 1, 1, 0];
console.log(getSneakyNumbers(nums));  // Output: [1, 0]
