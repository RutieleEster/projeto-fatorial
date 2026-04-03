function executarFatorial() {
    const input = document.getElementById('campoNumero');
    const display = document.getElementById('caixaResultado');
    const textoResultado = document.getElementById('valorFinal');
    
    // Transforma o texto digitado em número inteiro
    const numero = parseInt(input.value);

    if (isNaN(numero) || numero < 0 || numero > 20) {
        alert("Erro: Digite um número válido entre 0 e 20.");
        return; // Para a execução aqui
    }

    // Cálculo 
    let fatorial = 1;
    // O contador 'i' começa em 1 e vai multiplicando até chegar no número
    for (let i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
    }

    // resultado
    textoResultado.textContent = "Resultado: " + fatorial.toLocaleString('pt-BR');
    display.classList.remove('escondido');
}

// resetar a tela
function limparTela() {
    document.getElementById('campoNumero').value = "";
    document.getElementById('caixaResultado').classList.add('escondido');
}