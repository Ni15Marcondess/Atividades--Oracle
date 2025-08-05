function calcularSaldo() {
    let saldo = 0;

    while (true) {
        const input = prompt("Digite um valor para adicionar ao saldo e digite 'Encerrar' para finalizar:");

        if (input.toLowerCase() === "encerrar") {
            break; // Sai do Loop
        }

        const valor = parseFloat(input);

        if (isNaN(valor)) {
            alert("Valor inválido! Por favor digite um número, 😑");
        } else {
            saldo += valor;
        }
    }

    // Exibe o saldo final com template string
    alert(`O saldo final da sua conta é: R$ ${saldo.toFixed(2)} 🙌`);
}

// Chama a função
calcularSaldo();