function verificarDia() {
    // Pede ao usuário para digitar a data
    const dataStr = prompt("Digite uma data no formato DD/MM/AAAA:");

    // Divide a string em partes: dia, mês e ano
    const partes = dataStr.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; //Mês começa do zero em JS
    const ano = parseInt(partes[2], 10);

    // Cria o objeto Date
    const data = new Date(ano, mes, dia);

    // Array com os dias da semana 
    const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    //Descobre qual o dia da semana (0 = Domingo, 6 = Sábado)
    const diaSemana = data.getDay();
    const nomeDia = diasDaSemana[diaSemana];

    // Mostra o dia da semana no console
    console.log("Dia da semana: ", nomeDia);

    // Mostra com alert
    if (diaSemana === 0 || diaSemana === 6) {
        alert(`Dia da semana: ${nomeDia}\nBom fim de Semana! ✨`);
    } else {
        alert(`Dia da Semana: ${nomeDia}\nBoa Semana! 🌟`);
    }
}

// Chama a função
verificarDia();