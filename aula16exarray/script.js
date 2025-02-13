let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        
    } else {
        window.alert('valor invalido ou ja encontrado na lista.')
    }
    num.value= ''
    num.focus()
}


function finalizar(){
    if (valores.length == 0) {
    window.alert('Adiciona valores antes de finalizar!')
} else {
let tot = valores.length
let maior = valores[0]
let menor = valores[0]
let soma = 0
let media = 0

for (let pos in valores){
    soma += valores[pos]
}
for (let pos in valores) {
    if (valores[pos] > maior)
        maior = valores[pos]

    if (valores[pos] < menor)
        menor = valores[pos]
    
}
media = soma / tot
res.innerHTML = ''
res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrdos.</p>`
res.innerHTML += `<p> Maior valor informado: ${maior}</p>`
res.innerHTML += `<p> Menor valor informado ${menor}</p>`
res.innerHTML += `<p> Somando todos os valores, temos: ${soma}</p>`
res.innerHTML += `<p> A media dos valores é: ${media}</p>`

}
}
