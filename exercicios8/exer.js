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



/*Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ). */ 
function countBy(x,n) {
  let multilpos = []
  
  for (let i=1;i<=n;i++) {
       multilpos.push(x*i)
       }
  return multilpos
}
console.log(countBy(2, 5)); 
console.log(countBy(3, 4)); 


/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA. */
function DNAtoRNA(dna) {
  if(dna.includes('T')){
    return dna.replaceAll('T', 'U')
  } else {
    return dna
  }
}


// Given an array of integers, return a new array with each value doubled.
//1
function maps(x){
  return x.map( num => num * 2)
}
console.log((maps([1, 2, 3])))
//2
function maps(x){
  let dobro=[]
  for (let i = 0; i<x.length;i++){
    dobro.push(x[i] * 2)
  }
 return dobro
}
console.log((maps([1, 2, 3])))


/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */
function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog'))


//Given an array of integers your solution should find the smallest integer.
function findSmallestInt(arr) {
  let min = Math.min(...arr)
  return min;
}

// Given an array of numbers, return the sum of all positive numbers.
function sumPositiveNumbers(arr) {
  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumPositiveNumbers([1, -4, 7, 12]));

// Given a string, return true if it is a palindrome, false otherwise.
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); 

// Given an array of numbers, return the difference between the highest and lowest values.
function differenceMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}
console.log(differenceMaxMin([10, 5, 20, 8])); 

// Given a sentence, return the word with the most characters.
function longestWord(sentence) {
  return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); 

// Given a number, return the sum of its digits.
function sumDigits(num) {
  return Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigits(123)); 

// Given a string, return true if it contains only numbers, false otherwise.
function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}
console.log(isNumeric("12345")); 

// Given a string, return a new string with all vowels removed.
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels("Hello World")); 

// Given a number, return an array of its digits.
function numberToDigits(num) {
  return num.toString().split('').map(Number);
}
console.log(numberToDigits(12345)); 

// Given an array of numbers, return the number that appears an odd number of times.
function findOdd(arr) {
  return arr.find(num => arr.filter(x => x === num).length % 2 !== 0);
}
console.log(findOdd([1, 2, 3, 2, 3, 1, 3])); 

// Given a string, return the most common character.
function mostCommonChar(str) {
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
console.log(mostCommonChar("javascript")); 

// Given a number, return the next prime number.
function nextPrime(n) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let next = n + 1;
  while (!isPrime(next)) {
    next++;
  }
  return next;
}

// Given an array of numbers, return the second smallest number.
function secondSmallest(arr) {
  let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
  return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

// Given an array of numbers, return the sum of odd numbers.
function sumOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

// Given a number, return an array containing its digits in reverse order.
function reverseDigits(n) {
  return String(n).split('').reverse().map(Number);
}

// Given a number, check if it is an Armstrong number.
function isArmstrong(n) {
  let digits = String(n).split('').map(Number);
  let power = digits.length;
  let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === n;
}

// Given an array of strings, return the longest string.
function longestString(arr) {
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

// Given a number, check if it is a perfect number.
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}

// Given an array of numbers, return the greatest common divisor (GCD).
function gcd(arr) {
  function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
  }
  return arr.reduce((acc, num) => findGCD(acc, num));
}

// Given a string, return true if it is a palindrome, ignoring case and non-alphanumeric characters.
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Given a number, return the nth Fibonacci number.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}



function countWords(str) {
  return str.split(/\s+/).filter(word => word.length > 0).length;
}
console.log(countWords("The quick brown fox")); 


function productOfArray(arr) {
  return arr.reduce((product, num) => product * num, 1);
}
console.log(productOfArray([1, 2, 3, 4])); 


function sumPrimes(num) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return Array.from({ length: num + 1 }, (_, i) => i)
    .filter(isPrime)
    .reduce((sum, prime) => sum + prime, 0);
}
console.log(sumPrimes(10));



function longestPalindrome(s) {
  if (s.length < 2) return s;
  
  let start = 0, maxLength = 0;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    let len = Math.max(len1, len2);
    
    if (len > maxLength) {
      start = i - Math.floor((len - 1) / 2);
      maxLength = len;
    }
  }
  
  return s.substring(start, start + maxLength);
}
console.log(longestPalindrome("babad")); 


function permute(arr) {
  if (arr.length === 0) return [[]];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (let perm of permute(rest)) {
      result.push([arr[i], ...perm]);
    }
  }

  return result;
}
console.log(permute([1, 2, 3]));

