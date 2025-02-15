
// ex 1
soma = 0
for(let i = 0; i<=100; i++) {
    if (i % 2==0) {
        soma += i 
    }
    
}
console.log(soma)


// 2
let frutas = ["maçã", "banana", "laranja"]

frutas.push("uva") // 1

frutas.shift() // 2

frutas.splice(1, 0, 'abacaxi') // 3

console.log(frutas)


// 3
let num = Number(prompt("digite um numero: "))

while( num >= 0) {
    console.log(num)
    num --
}


// 4
// splice para remover elementos do array, (posicao a ser removido, quantidade a ser removido a partie deste inidice)
let numeros = [10, 20, 30, 40, 50];

numeros.splice(3, 1)
numeros.splice(3, 1)

console.log(numeros)

// 5

function dobro (numero) {
    let novo=numero * 2
    return novo
}

console.log(dobro(500))

// arrow function
const dobro2 = numero => numero * 2;

console.log(dobro2(2)); // 4



// 6
let numeros = [1,2,3,4,5]

let soma = numeros.reduce((acc, num) => acc + num, 0)

let media = soma / 5

console.log(media)

// 7
/* Destructuring
Destructuring é uma forma de desestruturar arrays ou objetos, permitindo extrair seus valores e armazená-los em variáveis de forma concisa. */

const pessoa = {nome: "gustavo", idade: 20}

const {nome, idade} = pessoa
console.log(nome)
console.log(idade)
// com array
let numeros = [1,2,3]

const [primeiro] = numeros
console.log(primeiro)

// 8
/*Rest (...)
Usado para agrupar múltiplos elementos ou propriedades em um único valor. */
function soma(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0)
}
console.log(soma(1,2,3,4,5)) //15

// com objetos
const pessoa = {nome: "gustavo", idade: 20, cidade: "Luiziana"}

const {idade, ...dadosPessoais} = pessoa;

console.log(idade); //20
console.log(dadosPessoais) // { nome: 'gustavo', cidade: 'Luiziana' }



// 9
let carro = {marca: "ford", modelo: "mustang", ano: 2012};

let {marca, ano} = carro;  // Desestruturação de 'marca' e 'ano'

let cor = {...carro, cor: "azul"};  // Adiciona a propriedade 'cor' no objeto

let todasInf = {...cor};  

console.log(todasInf); //{ marca: 'ford', modelo: 'mustang', ano: 2012, cor: 'azul' }

/*
let permite reatribuições de valor.
const cria constantes imutáveis.
Template literals tornam a construção de strings mais dinâmica e legível.
Destructuring facilita a extração de valores de objetos e arrays.
Spread (...) espalha elementos ou propriedades de um objeto ou array.
Rest (...) coleta valores em um único parâmetro ou variável. */



// 10 
function abbrevName(name) {
    let palavras = name.split('');
    let primeiraLetra = palavras[0][0].toUpperCase();
    let ultimaLetra = palavras[1][0].toUpperCase();
    
    return primeiraLetra + '.' + ultimaLetra
}

console.log(abbrevName('Sam Harris')); 



//11
function digitize(n) {
    if (n < 0) {
      return 'It cant have negative numbers';
    } else {
      // Converte o número em string, divide em caracteres, inverte e transforma em numeros novamente
      return n.toString().split('').reverse().map(Number);
    }
  }
  
  console.log(digitize(123)); // [3, 2, 1]
  console.log(digitize(1));   // [1]
  console.log(digitize(-42)); // 'It cant have negative numbers'


  // 12
  /* Crie um script que recebe um array de números e retorna:
A soma de todos os elementos
O maior e menor número
A média dos valores */


let numeros = [1,2,3,4,5]

let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0); 

let maior = Math.max(...numeros)
let menor = Math.min(...numeros)

let media = soma / numeros.length


console.log('soma:' + soma)
console.log('maior: ' + maior)
console.log('menor: ' + menor)
console.log('media: ' + media)
  



