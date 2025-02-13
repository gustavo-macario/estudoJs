let array = [];
let qtd = Number(prompt("Digite a quantidade de numeros que deseja inserir no array: "))

for (let i = 0; i<qtd;i++){
    let n = Number(prompt(`Informe o ${i + 1}º número:`))
    array.push(n)
}

console.log(array)

array.sort