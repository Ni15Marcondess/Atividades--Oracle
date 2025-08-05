alert('Boas vindas ao jogo do número secreto!✨');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt("Escolha im número entre 1 a 30");

//se o chute foi igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto✨ ${numeroSecreto}`);
} else {
    alert("Você errou😐")
}