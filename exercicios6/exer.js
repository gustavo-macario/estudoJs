// 1
function getCount(str) {
    let vogais = ['a','e','i','o','u']
    let contador = 0
    for (let i = 0; i< str.length; i++){
      if(vogais.includes(str[i])){
        contador++
      }
    }
    return contador
  }
  console.log(getCount("abracadabra"))
  console.log(getCount("pear tree"))
  console.log(getCount("abracadabrao a kak ushakov lil vo kashu kakaoabracadabra"))
  console.log(getCount("my pyx"))


// 2    
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(1)); 
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3)); 
console.log(rowSumOddNumbers(4)); 
console.log(rowSumOddNumbers(5)); 

// 3
function removeChar(str){
    return str.slice(1,-1)
  
  };
  
  console.log(removeChar('eloquent'))


// 4
function sum (numbers) {
    if(!Array.isArray(numbers)){
      return 0
    } else {
      return numbers.reduce((cc, num)=> cc + num ,0)
    }
  }
  

// 5
function sumTwoSmallestNumbers(numbers) {  
    if (numbers.length < 4) {
      return 'Need at least 4 elements.'; 
    }
  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1]; 
  }
  
  
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); 
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); 
  console.log(sumTwoSmallestNumbers([1, 3, 5, 7, 9])); 
  console.log(sumTwoSmallestNumbers([12, 34, 56, 78])); 
  
  
  
  