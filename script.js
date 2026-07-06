// Função para o Quiz Interativo
function verificarResposta(acertou) {
    const resultado = document.getElementById("resultado-quiz");
    if (acertou) {
        resultado.innerText = "Resposta Correta! O RaizLink combate exatamente esse desperdício.";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Tente novamente! A agricultura sem tecnologia desperdiça muita água.";
        resultado.style.color = "red";
    }
}

// Função de Acessibilidade (Aumentar/Diminuir Letra)
function alternarFonte() {
    document.body.classList.toggle("fonte-grande");
}

