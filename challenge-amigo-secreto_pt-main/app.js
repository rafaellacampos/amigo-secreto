// Declarações de variáveis
let amigos = [];  // Lista de amigos
let sorteio = {};  // Resultado do sorteio

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo); // Adiciona o nome à lista de amigos
        atualizarListaAmigos(); // Atualiza a lista exibida
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos 2 amigos!');
        return;
    }

    // Embaralha a lista de amigos
    const embaralhado = [...amigos].sort(() => Math.random() - 0.5);

    // Realiza o sorteio
    sorteio = {};
    for (let i = 0; i < embaralhado.length; i++) {
        sorteio[embaralhado[i]] = embaralhado[(i + 1) % embaralhado.length]; // Amigo secreto sorteado
    }

    exibirResultado();
}

// Função para exibir o resultado do sorteio
function exibirResultado() {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';  // Limpa o conteúdo anterior

    for (let amigo in sorteio) {
        const item = document.createElement('li');
        item.textContent = `${amigo} sorteou ${sorteio[amigo]}`;
        resultadoList.appendChild(item);
    }
}
