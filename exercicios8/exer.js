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
  