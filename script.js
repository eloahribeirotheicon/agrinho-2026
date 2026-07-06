// Variáveis do Quiz
let pontuacao = 0;
const totalPerguntas = 3;

function responder(numeroQuestao, foiCorreto) {
    if (foiCorreto) {
        pontuacao++;
    }

    // Esconde a pergunta que acabou de ser respondida
    document.getElementById(`q${numeroQuestao}`).classList.add("escondido");

    // Verifica se vai para a próxima ou se acabou
    if (numeroQuestao < totalPerguntas) {
        document.getElementById(`q${numeroQuestao + 1}`).classList.remove("escondido");
    } else {
        // Mostra a tela de resultados
        const resultadoDiv = document.getElementById("resultado-quiz");
        const textoPontos = document.getElementById("pontuacao-texto");
        
        resultadoDiv.classList.remove("escondido");
        textoPontos.innerHTML = `Você acertou <strong>${pontuacao} de ${totalPerguntas}</strong> perguntas.<br><br>`;
        
        if (pontuacao === totalPerguntas) {
            textoPontos.innerHTML += "🌱 Excelente! Você é um especialista em sustentabilidade e tecnologia no campo!";
        } else if (pontuacao >= 1) {
            textoPontos.innerHTML += "🌾 Bom trabalho! Mas que tal reler os textos da Hidrocense para acertar todas?";
        } else {
            textoPontos.innerHTML += "🍂 Vamos tentar de novo? Leia as seções acima para descobrir as respostas certas!";
        }
    }
}

function reiniciarQuiz() {
    pontuacao = 0;
    // Esconde a tela de resultado
    document.getElementById("resultado-quiz").classList.add("escondido");
    
    // Mostra apenas a primeira pergunta de novo
    document.getElementById("q1").classList.remove("escondido");
    document.getElementById("q2").classList.add("escondido");
    document.getElementById("q3").classList.add("escondido");
}

// Função de Acessibilidade: Aumentar/Diminuir Letra
function alternarFonte() {
    document.body.classList.toggle("fonte-grande");
}

// Função de Acessibilidade: Alto Contraste
function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}

    
