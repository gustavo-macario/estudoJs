/*  Crie um array de números e use map() para dobrar os valores. */
const numeros = [1,2,3,4, 51, 60]

const dobrados = numeros.map(numeros => numeros * 2)

console.log(dobrados)


/*  Use filter() para pegar apenas números maiores que 50. */
const maior50 = numeros.filter(numeros => numeros > 50)

console.log(maior50)

/*Use reduce() para somar todos os elementos do array. */
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0)

console.log(soma)

/*  Com forEach(), exiba cada número no console. */
numeros.forEach(numeros => console.log('for each: '+numeros))

/* Use find() para localizar o primeiro número que seja múltiplo de 5.*/
const encontrar = numeros.find(n => n % 5 === 0)

console.log(encontrar)


/* Crie um array de números e use map() para dobrar os valores. Depois, use filter() para manter apenas os valores maiores que 20. */
const numeros = [5, 7, 10, 15, 20];

const dobrar = numeros.map(numeros => numeros * 2)

const maiores20 = dobrar.filter(dobrar => dobrar > 20)

console.log(maiores20)

/* Dado um array de objetos representando produtos, use reduce() para calcular o preço total. */
const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 120 },
    { nome: "Tênis", preco: 250 }
  ];
  
  const precoTotal = produtos.map(p => p.preco).reduce((cc, num) => cc + num, 0)
  
  console.log(precoTotal)


  /* Dado um array de usuários, use find() para localizar um usuário pelo nome */
const usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carlos", idade: 22 }
  ];
  
  
  const usuario = usuarios.find(u => u.nome === "Bruno"); 
  console.log(usuario); 
  
  /* Desafio: Adicione um método chamado desconto() no objeto que aplique 10% de desconto ao preço do produto. */

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
  };
  
  console.log(produto.nome);  
  
  produto.estoque -= 2;
  console.log(produto.estoque);  
  
  produto.categoria = "Eletrônicos";
  console.log(produto);
  
  
  produto.desconto = produto.preco * 0.10;
  console.log(produto)


  /* Tarefa: Crie um array de objetos representando usuários e filtre aqueles com idade maior que 18 e use .map() para retornar apenas os nomes dos usuários. */

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 25 },
    { nome: "Carlos", idade: 30 }
  ];
  
  const maioresDeIdade = usuarios.filter(u => u.idade >= 18);
  console.log(maioresDeIdade);
  
  
  const nomes = usuarios.map(u => u.nome)
  
  console.log(nomes)



  /*  Converta um objeto para JSON e depois de volta para um objeto. */

const dados = {
    nome: 'Gustavo',
    idade: 21,
    cidade: 'Luiziana'
};

// Convertendo para JSON (string)
const json = JSON.stringify(dados);
console.log(json);

// Convertendo JSON de volta para objeto
const objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);




/* Tarefa: Crie um sistema simples de cadastro de produtos, onde:
O usuário pode adicionar novos produtos a um array de objetos.
O sistema deve exibir todos os produtos cadastrados.
*/

const produtos = []

function cadastrar (nome, preco){
    produtos.push({nome, preco})
}

cadastrar('bola', 150);
console.log(produtos);



/* Objetivo: Criar um pequeno sistema que armazena e filtra uma lista de usuários.

 Crie um array de objetos representando usuários com nome, idade
 Adicione novos usuários ao array.
 Filtre os usuários com idade maior que 18 anos.
 Encontre um usuário específico pelo nome.
 Retorne um array apenas com os nomes dos usuários.
*/

const usuarios = [
    {nome: 'gustavo', idade:20},
    {nome: 'gusta', idade:21}
]

const maiores18 = usuarios.filter(u => u.idade > 18)

const nomeExpecifico = usuarios.find(u => u.nome === 'gustavo')

const nomes = usuarios.map(u => u.nome )

console.log('maiores que 18: ', maiores18)

console.log('encontrar por nome: ', nomeExpecifico)

console.log('apenas os nomes: ' , nomes)