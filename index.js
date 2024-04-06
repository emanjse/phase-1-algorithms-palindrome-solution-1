// Define a function called isPalindrome that takes a single argument, word.
function isPalindrome(word) {
  // Initialize two pointers, one at the beginning of the word (left) and one at the end (right).
  let left = 0;
  let right = word.length - 1;

  // Loop while left pointer is less than or equal to right pointer:
  while (left <= right) {
    // If characters at left and right pointers are different, return false.
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the left pointer to the right.
    left++;
    // Move the right pointer to the left.
    right--;
  }

  // If the loop completes without returning false, return true.
  return true;
}

/*
  Pseudocode:
  1. Initialize two pointers, one at the beginning of the word (left) and one at the end (right).
  2. Loop while left pointer is less than or equal to right pointer:
     a. If characters at left and right pointers are different, return false.
     b. Move the left pointer to the right.
     c. Move the right pointer to the left.
  3. If the loop completes without returning false, return true.
*/

/*
  Explanation:
  To check if a word is a palindrome, we compare characters from the beginning and end of the word simultaneously.
  If at any point, the characters don't match, we know the word is not a palindrome.
  We continue this process until either the pointers meet (in the case of odd-length words) or the left pointer surpasses the right pointer (in the case of even-length words).
  If the loop completes without returning false, it means all characters matched, and the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
