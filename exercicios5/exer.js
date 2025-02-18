// 1. Somar apenas os números ímpares de um array
function somaImpares(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        soma += arr[i];
      }
    }
    return soma;
  }
  console.log(somaImpares([1, 2, 3, 4, 5, 6, 7])); 
  
  // 2. Encontrar o segundo maior número de um array
  function segundoMaior(arr) {
    let maior = -Infinity, segundo = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maior) {
        segundo = maior;
        maior = arr[i];
      } else if (arr[i] > segundo && arr[i] !== maior) {
        segundo = arr[i];
      }
    }
    return segundo;
  }
  console.log(segundoMaior([10, 5, 8, 20, 3])); 
  
  // 3. Inverter as palavras dentro de uma string (sem usar .reverse())
  function inverterPalavras(str) {
    let palavras = str.split(" ");
    let resultado = [];
    for (let i = palavras.length - 1; i >= 0; i--) {
      resultado.push(palavras[i]);
    }
    return resultado.join(" ");
  }
  console.log(inverterPalavras("Olá mundo JavaScript"));
  
  // 4. Encontrar o número que mais se repete em um array
  function numeroMaisFrequente(arr) {
    let contagem = {};
    let maxNum = arr[0], maxCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
      contagem[arr[i]] = (contagem[arr[i]] || 0) + 1;
      if (contagem[arr[i]] > maxCount) {
        maxCount = contagem[arr[i]];
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
  console.log(numeroMaisFrequente([1, 2, 3, 3, 2, 3, 4, 5])); 
  
  // 5. Criar um novo array contendo apenas os números primos de outro array
  function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function filtrarPrimos(arr) {
    let primos = [];
    for (let i = 0; i < arr.length; i++) {
      if (ehPrimo(arr[i])) {
        primos.push(arr[i]);
      }
    }
    return primos;
  }
  console.log(filtrarPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
  
  // 6. Criar um array de números únicos sem usar Set()
  function numerosUnicos(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
      if (!unicos.includes(arr[i])) {
        unicos.push(arr[i]);
      }
    }
    return unicos;
  }
  console.log(numerosUnicos([1, 2, 2, 3, 4, 4, 5])); 
  
  // 7. Rotacionar um array para a direita n vezes
  function rotacionarDireita(arr, n) {
    let resultado = [...arr];
    for (let i = 0; i < n; i++) {
      let ultimo = resultado.pop();
      resultado.unshift(ultimo);
    }
    return resultado;
  }
  console.log(rotacionarDireita([1, 2, 3, 4, 5], 2)); 
  
  // 8. Contar quantas palavras começam com uma determinada letra em um array de palavras
  function contarPalavrasComLetra(arr, letra) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0].toLowerCase() === letra.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  console.log(contarPalavrasComLetra(["banana", "batata", "abacaxi", "azeitona", "biscoito"], "b")); 
  
  // 9. Criar um novo array removendo os múltiplos de um número X
  function removerMultiplos(arr, x) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % x !== 0) {
        resultado.push(arr[i]);
      }
    }
    return resultado;
  }
  console.log(removerMultiplos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); 
  
  // 10. Concatenar dois arrays intercalando os elementos (se um for maior, os extras vão no final)
  function intercalarArrays(arr1, arr2) {
    let resultado = [];
    let maior = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maior; i++) {
      if (i < arr1.length) resultado.push(arr1[i]);
      if (i < arr2.length) resultado.push(arr2[i]);
    }
    
    return resultado;
  }
  console.log(intercalarArrays([1, 3, 5], [2, 4, 6, 8, 10])); 
  