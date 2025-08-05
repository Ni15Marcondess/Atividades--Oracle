const botao = document.getElementById('meuBotao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  resultado.textContent = 'O botão tá funcionando direitinho! 🚀';
});


//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
//Exiba um alerta com o texto "Erro! Preencha todos os campos"
let MensagemDeErro = "Erro! Por favor preencha todos os campos";
alert(MensagemDeErro);

//Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
let nome_usuario = prompt("Qual é o seu nome?");
alert("Olá, " + nome_usuario + "!✨ Bem-vindo(a) ao nosso site!✨");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt("Digite sua idade por favor:");
alert("Sua idade é " + idadeUsuario + ", tá muito velho😅");

// Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idadeUsuario >= 18) {
    alert("Pode tirar a habilitação!😍");
} else {
    alert("Não pode tirar a habilitação ainda, vai ter que esperar.😒");
};

