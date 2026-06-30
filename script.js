// ================================
// HydroSense
// JavaScript do projeto
// ================================

// Quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", function () {

    console.log("HydroSense iniciada com sucesso!");

});
let agua = 0;

function criarBalao(){
    const balao = document.createElement("div");
    balao.classList.add("balao");

    balao.style.left = Math.random() * 90 + "%";
    balao.style.background = randomColor();

    balao.onclick = function(){
        balao.remove();
        agua += 10;
        document.getElementById("agua").innerText = agua;
    }

    document.getElementById("baloes").appendChild(balao);

    setTimeout(() => {
        balao.remove();
    }, 6000);
}

function randomColor(){
    const cores = ["#ff4d4d","#4da6ff","#ffff4d","#ff66cc","#66ff66"];
    return cores[Math.floor(Math.random() * cores.length)];
}

setInterval(criarBalao, 800);
