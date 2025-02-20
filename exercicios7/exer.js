// Exercício 1: Remover todas as palavras que contêm números
function removeWordsWithNumbers(str) {
    return str.split(/\s+/).filter(word => !/\d/.test(word)).join(' ');
  }
  
  console.log(removeWordsWithNumbers("Hoje é dia 20 de fev2025 e eu comprei 2livros.")); 
 
  
  
  // Exercício 2: Contar quantas palavras começam com vogal
  function countWordsStartingWithVowel(sentence) {
    return sentence.split(/\s+/).reduce((count, word) => count + (/^[aeiouAEIOU]/.test(word) ? 1 : 0), 0);
  }
  
  console.log(countWordsStartingWithVowel("A árvore e o elefante estão na ilha.")); 

  
  
  // Exercício 3: Substituir todas as palavras de 4 letras por "****"
  function censorFourLetterWords(str) {
    return str.replace(/\b\w{4}\b/g, '****');
  }
  
  console.log(censorFourLetterWords("Hoje é um bom dia para sair.")); 

  
  
  // Exercício 4: Somar todos os números dentro de uma string (inclusive números negativos)
  function sumNumbers(str) {
    return (str.match(/-?\d+/g) || []).map(Number).reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumNumbers("Tenho 10 maçãs, -3 laranjas e 5 bananas.")); 
  
  
  
  // Exercício 5: Extrair todas as palavras que terminam com "ing"
  function extractIngWords(sentence) {
    return sentence.match(/\b\w+ing\b/g) || [];
  }
  
  console.log(extractIngWords("I am running, swimming and eating today.")); 

  
  
  // Exercício 6: Contar quantas vezes cada letra aparece em uma string (ignorando espaços)
  function letterFrequency(str) {
    return str.replace(/\s/g, '').split('').reduce((freq, char) => {
      freq[char] = (freq[char] || 0) + 1;
      return freq;
    }, {});
  }
  
  console.log(letterFrequency("banana")); 

  
  
  // Exercício 7: Verificar se uma string contém um número de telefone no formato (XX) XXXXX-XXXX
  function containsPhoneNumber(str) {
    return /\(\d{2}\) \d{5}-\d{4}/.test(str);
  }
  
  console.log(containsPhoneNumber("Meu número é (11) 91234-5678.")); 

  
  
  // Exercício 8: Validar se uma senha é forte (mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial)
  function isStrongPassword(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  }
  
  console.log(isStrongPassword("A1@strong")); // true
  console.log(isStrongPassword("weakpass")); // false
  
  
  // Exercício 9: Encontrar todas as hashtags (#palavra) em um texto
  function extractHashtags(str) {
    return str.match(/#\w+/g) || [];
  }
  
  console.log(extractHashtags("Hoje está #sol e #calor! #Verão2025")); 
 
  
  
  // Exercício 10: Converter um texto em formato de "camelCase"
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .split(/\s+/)
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }
  
  console.log(toCamelCase("Hoje é um lindo dia para programar")); 
  
  