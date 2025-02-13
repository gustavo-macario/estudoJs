let inicio = Number(prompt('digite o numero de inicio '))

let fim = Number(prompt('digite o numero do fim '))

let passo = Number(prompt('digite o passo '))

if(inicio == 0 || fim == 0 || passo == 0){
    console.log('impossivel contar')
} else {
for(let c=inicio; c<=fim; c+=passo) {
    console.log(c)
}
}