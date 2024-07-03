let listaNumerosSorteados = [];
let numeroMax = 100;
let numeroSecreto = gerarNumeroSecreto();
let chute;
let tetativas = 1;

function gerarNumeroSecreto() {

    let numerEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeNumerosEscolhido = listaNumerosSorteados.length;

    if (quantidadeNumerosEscolhido == numeroMax) {
        listaNumerosSorteados = [];
    }

        if (listaNumerosSorteados.includes(numerEscolhido)) {
            return gerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerEscolhido);
            console.log(listaNumerosSorteados)
            return numerEscolhido;
        }
}

function criarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

criarTexto('h1', 'Jogo do Número Secreto!')
criarTexto('p', 'Escolha um número de 1 a 100')

function verificarChute() {
    chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        criarTexto('h1', 'Acertou!!!!')
        let palavraTentativas = tetativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Você acertou com ${tetativas} ${palavraTentativas}`
        criarTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (chute > numeroSecreto) {
            criarTexto('h1', 'Tente novamente!')
            criarTexto('p', 'O número secreto é menor que o chute!!')
        } else {
            criarTexto('h1', 'Tente novamente!')
            criarTexto('p', 'O número secreto é maior que o chute!!')
        }
        limparInput()
        tetativas++
    }
}

function limparInput() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tetativas = 1;
    limparInput();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

