 // array/vetor/varial composta é uma
 //variavel que contem varios elementos

  // cada elemnto é composto pelo seu valor(string, int etc) e por uma 
  //chave de identificacao (posicao dentro do array, como 0,1 etc)

let num = [1,5,8,7]
num.push(3)
num.length//exibe o tamanho do vetor
num.sort() //exibe o vetor em ordem numerica

num[4] = 6 // add um valor ao passar a posicao
num.push(9) // add um valor na ultima posicao

console.log(`Nosso vetor ${num}`)
console.log(`Nosso vetor tem o tamanho de ${num.length}`)
console.log(`primeiro valor do vetor é ${num[0]}`)

// exibir o vetor --se usar somente pos, vai mostar o tamanho do vetor, se usar num[pos], exibe os elementos
for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}