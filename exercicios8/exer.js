/*Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
    if (!input || input.length ===0){
      return [];
    }
    
    countpos = 0
    countneg= 0
    
    for(let num of input){
      if (num > 0){
        countpos++
    
    } else if ( num < 0){
         countneg += num
    }
      }
    
    return [countpos, countneg];
  }
    


/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n){
    if (n < 0){
      return 'The number should be higher than 0'
    }
    
    return Number (
    String(n).split('').sort((a,b)=> b-a).join('')
    )
  }
  
  console.log(descendingOrder(1021))



/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.   */
function past(h, m, s){
  
    let hours =  h * 3600000
    let minutes= m * 60000
    let seconds = s * 1000
    
    let soma = hours + minutes + seconds
    
    return soma
  }


// Given a string of numbers, return an object where the key is the number and the value is the count of how many times it appears.

function countDigits(str) {
    let count = {};
  
    for (let char of str) {
      if (char >= '0' && char <= '9') {
        count[char] = (count[char] || 0) + 1;
      }
    }
  
    return count;
  }


// Given a string, return true if it is a palindrome, else return false. A palindrome is a word, phrase, or sequence that reads the same backward as forward.

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  


// Given an array, return a new array with duplicates removed.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  

// Given an array of numbers, return the two numbers that add up to the target sum.
function twoSum(arr, target) {
  let numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (numMap.has(complement)) {
      return [complement, arr[i]];
    }

    numMap.set(arr[i], i);
  }

  return [];
}

// Given a string, return the most frequent character.
function mostFrequentChar(str) {
  let count = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;

    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Given a string, return the first non-repeating character. If all characters repeat, return null.
function firstNonRepeatingChar(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

// Given an array of numbers, return the missing number in the sequence.
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Given a string, return true if it contains only unique characters, else return false.
function hasUniqueChars(str) {
  let seen = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }

  return true;
}


// Given an array of numbers, return the maximum difference between any two numbers.
function maxDifference(arr) {
  if (arr.length < 2) return 0;

  let minVal = arr[0];
  let maxDiff = 0;

  for (let num of arr) {
    maxDiff = Math.max(maxDiff, num - minVal);
    minVal = Math.min(minVal, num);
  }

  return maxDiff;
}

// Given a string, return true if it contains at least one vowel (a, e, i, o, u).
function hasVowel(str) {
  return /[aeiouAEIOU]/.test(str);
}

// Given a string, reverse each word but keep the order of the words.
function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Given an array of numbers, return the second largest number.
function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

// Given a number, return true if it's a prime number, else return false.
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Given a string, return the number of words in it.
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// Given a sentence, capitalize the first letter of each word.
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Given a number, return the factorial of that number.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
