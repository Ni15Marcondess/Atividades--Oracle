function verificarPontuacao() {
    // Pede ao usuário a pontução 
    const input = prompt("Digite sua pontuação aqui por favor:");
    const pontuacao = parseInt(input, 10);

    // Verifica se é um número válido 
    if (isNaN(pontuacao)) {
        alert("Por favor, digite um número válido! 😒");
        return;
    }

    // Verifica se venceu ou não
    if (pontuacao >= 100) {
        alert("Parabéns, você venceu! 🏆🎉");
    } else {
        alert("Ih, não foi dessa vez você perdeu 😭");
    }
}

// Chama a função
verificarPontuacao();