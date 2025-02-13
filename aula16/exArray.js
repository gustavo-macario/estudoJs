let array = [];

while (true) {
    let num = Number(prompt("Informe os números que deseja adicionar no array: "));
  
    if (num === 0) {
        break;
    }
    
    if (array.includes(num)) { 
        console.log("O número já está no array! Tente outro.");
        continue; 
    }
    
    array.push(num);
}

if (array.length > 0) {
    console.log("Maior número: " + Math.max(...array));
    console.log("Menor número: " + Math.min(...array));
} else {
    console.log("Nenhum número foi adicionado.");
}

console.log("Números inseridos:", array);

let soma= 0

for (let i =0; i<array.length; i++) {
    soma += array[i]
}
console.log('A soma dos numeros é: ' + soma)