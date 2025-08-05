function verificarNumero() {
    //Pede para o usuário digitar um número
    const input = prompt("Digite um número:");
    const numero = parseFloat(input);

    //Verifica se é um número válido 
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido! 😑");
        return;
    }


    // Verifica se é positivo, negativo ou zero
    if (numero > 0) {
        alert("O número é positivo! 😀");
    } else if (numero < 0) {
        alert("O número é negativo! 😴");
    } else {
        alert("O número é zero! 🤨");
    }
}

// Chama a função
verificarNumero();