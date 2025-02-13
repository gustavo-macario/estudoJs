let valores = [1,5,7,5,4]

for (let vetor =0; vetor < valores.length; vetor++) {
    valores.sort()
    console.log(`A posicao ${vetor} tem o valor ${valores[vetor]}`)
}
console.log('')
console.log('usando for in')
for (let vetor in valores) {
    console.log(`A posicao ${vetor} tem o valor ${valores[vetor]}`)
}

console.log('')

//mostra a posicao do valor buscado
console.log('o valor 4 esta na posicao: ' + valores.indexOf(4))