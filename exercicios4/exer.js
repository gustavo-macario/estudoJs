function saudacao(nome, callback) {
    callback(`Olá, ${nome}!`);
}

saudacao("Lucas", console.log);


//2
function fazerPedido(pedido, callback) {
    console.log(`Pedido de ${pedido} recebido. Preparando...`);
    setTimeout(() => {
        callback(`Seu pedido de ${pedido} está pronto!`);
    }, 3000);
}

fazerPedido("pizza", console.log);



//3
function primeira(callback) {
    setTimeout(() => {
        console.log("Primeira tarefa concluída.");
        callback();
    }, 1000);
}

function segunda(callback) {
    setTimeout(() => {
        console.log("Segunda tarefa concluída.");
        callback();
    }, 2000);
}

function terceira() {
    setTimeout(() => {
        console.log("Terceira tarefa concluída.");
    }, 1000);
}

primeira(() => segunda(() => terceira()));



//4
function esperar() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Tempo concluído!"), 2000);
    });
}

esperar().then(console.log);



//5
function verificarNumero() {
    return new Promise((resolve, reject) => {
        const numero = Math.random();
        setTimeout(() => {
            if (numero >= 0.5) {
                resolve(`Sucesso! Número: ${numero}`);
            } else {
                reject(`Erro! Número muito baixo: ${numero}`);
            }
        }, 2000);
    });
}

verificarNumero()
    .then(console.log)
    .catch(console.error);




//6
function primeiraTarefa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Primeira tarefa concluída!"), 1000);
    });
}

function segundaTarefa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Segunda tarefa concluída!"), 1000);
    });
}

primeiraTarefa()
    .then(console.log)
    .then(segundaTarefa)
    .then(console.log);




//7
async function executarTarefas() {
    const res1 = await primeiraTarefa();
    console.log(res1);
    const res2 = await segundaTarefa();
    console.log(res2);
}

executarTarefas();




//8
async function testarNumero() {
    try {
        const resultado = await verificarNumero();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

testarNumero();



//9
async function obterDados() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, nome: "Produto X", preco: 99.99 });
        }, 2000);
    });
}

async function exibirDados() {
    const dados = await obterDados();
    console.log(dados);
}

exibirDados();




//10
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarios = { 1: "Alice", 2: "Bob", 3: "Carol" };
            if (usuarios[id]) {
                resolve({ id, nome: usuarios[id] });
            } else {
                reject("Usuário não encontrado!");
            }
        }, 2000);
    });
}

async function obterUsuario(id) {
    try {
        const usuario = await buscarUsuario(id);
        console.log(usuario);
    } catch (erro) {
        console.error(erro);
    }
}

obterUsuario(2);
