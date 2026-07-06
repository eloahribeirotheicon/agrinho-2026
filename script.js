<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hidrocense - Irrigação Inteligente</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="navbar">
        <div class="logo">🌱 Hidrocense</div>
        <nav>
            <ul class="nav-links">
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#problema">O Problema</a></li>
                <li><a href="#solucao">Nossa Solução</a></li>
                <li><a href="#interativo">Quiz</a></li>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        <div class="acessibilidade-container">
            <button class="btn-acessibilidade" onclick="alternarFonte()">A+ / A-</button>
            <button class="btn-acessibilidade" onclick="alternarContraste()">🌓 Contraste</button>
        </div>
    </header>

    <section id="quem-somos" class="section-padding header-spacing">
        <div class="container card">
            <h2>Quem Somos</h2>
            <p>A <strong>Hidrocense</strong> nasce com a missão de transformar o cenário da agricultura moderna através do uso consciente dos recursos hídricos. Nosso grande objetivo é desenvolver soluções tecnológicas inteligentes e de alta precisão que tornam a irrigação do campo infinitamente mais eficiente, reduzindo de forma drástica o desperdício de água e, ao mesmo tempo, impulsionando a produtividade e a saúde das plantações brasileiras.</p>
            <p>Unindo a urgência da sustentabilidade com o poder da tecnologia, nossa equipe desenvolveu o <strong>RaizLink</strong>. Este ecossistema inovador integra inteligência artificial de ponta e sensores de solo de última geração para revolucionar a forma como o produtor lida com a lavoura, criando uma ponte digital entre a natureza e a tecnologia.</p>
        </div>
    </section>

    <section id="problema" class="section-padding">
        <div class="container card">
            <h2>O Problema: O Desperdício Oculto no Campo</h2>
            <p>Atualmente, a agricultura é a atividade humana que mais consome água doce no planeta. No entanto, uma parcela alarmante desse recurso essencial é perdida todos os dias devido a sistemas de irrigação inadequados, obsoletos ou baseados apenas no "achismo". Sem dados concretos, muitas plantações acabam recebendo água em excesso, o que satura a terra, lava os nutrientes do solo e propicia o surgimento de pragas e doenças nas raízes.</p>
            <p>Por outro lado, em períodos de calor intenso, várias culturas recebem menos água do que realmente necessitam para o seu pleno desenvolvimento. Esse desequilíbrio severo não apenas encarece os custos operacionais da produção e gera desperdício energético com bombas d'água ligadas sem necessidade, mas também prejudica o crescimento das culturas e reduz a oferta de alimentos. É esse ciclo insustentável que o projeto Agrinho e a Hidrocense buscam combater.</p>
        </div>
    </section>

    <section id="solucao" class="section-padding">
        <div class="container card">
            <h2>A Solução: Como Funciona o RaizLink?</h2>
            <p>O <strong>RaizLink</strong> funciona como o "cérebro" da irrigação na propriedade rural. O sistema é composto por pequenos sensores inteligentes distribuídos estrategicamente pela plantação. Esses dispositivos coletam constantemente dados vitais do ambiente, como a umidade exata do solo em diferentes profundidades, a temperatura da terra e as condições climáticas locais.</p>
            <p>Todas essas informações são enviadas em tempo real para uma central equipada com a nossa inteligência artificial. A IA da Hidrocense analisa os dados e calcula com precisão se a planta realmente precisa de água naquele momento e qual a quantidade exata necessária. Com isso, os irrigadores são ativados de forma automatizada e cirúrgica, parando assim que o solo atinge o nível ideal de hidratação.</p>
        </div>
    </section>

    <section id="interativo" class="section-padding">
        <div class="container card">
            <h2>Quiz: Sustentabilidade no Campo</h2>
            <p>Responda às perguntas abaixo e teste o seu conhecimento sobre a tecnologia na agricultura e a preservação da água!</p>
            
            <div id="quiz-container">
                <div class="questao" id="q1">
                    <p class="pergunta-texto"><strong>1. Qual atividade humana é a maior consumidora de água doce no mundo?</strong></p>
                    <button class="btn-quiz" onclick="responder(1, false)">A) Indústrias e fábricas urbanas</button>
                    <button class="btn-quiz" onclick="responder(1, true)">B) A agricultura e sistemas de irrigação</button>
                    <button class="btn-quiz" onclick="responder(1, false)">C) O uso doméstico nas cidades</button>
                </div>

                <div class="questao escondido" id="q2">
                    <p class="pergunta-texto"><strong>2. O que acontece quando uma plantação recebe água em excesso devido à irrigação incorreta?</strong></p>
                    <button class="btn-quiz" onclick="responder(2, true)">A) Pode apodrecer as raízes e desperdiçar nutrientes do solo</button>
                    <button class="btn-quiz" onclick="responder(2, false)">B) A planta cresce duas vezes mais rápido e saudável</button>
                    <button class="btn-quiz" onclick="responder(2, false)">C) Não há impacto negativo para a plantação</button>
                </div>

                <div class="questao escondido" id="q3">
                    <p class="pergunta-texto"><strong>3. Como o sistema RaizLink sabe o momento exato de irrigar a lavoura?</strong></p>
                    <button class="btn-quiz" onclick="responder(3, false)">A) Seguindo um horário fixo todos os dias, faça chuva ou faça sol</button>
                    <button class="btn-quiz" onclick="responder(3, false)">B) Esperando o agricultor ligar o sistema manualmente</button>
                    <button class="btn-quiz" onclick="responder(3, true)">C) Usando sensores inteligentes no solo e inteligência artificial</button>
                </div>

                <div id="resultado-quiz" class="escondido">
                    <h3>Fim do Quiz!</h3>
                    <p id="pontuacao-texto"></p>
                    <button class="btn-reiniciar" onclick="reiniciarQuiz()">Refazer Quiz</button>
                </div>
            </div>
        </div>
    </section>

    <section id="beneficios" class="section-padding">
        <div class="container card">
            <h2>Benefícios Práticos e Impacto Ambiental</h2>
            <p>A implementação do sistema RaizLink gera vantagens que impactam positivamente tanto o bolso do produtor rural quanto o meio ambiente. Veja os principais benefícios:</p>
            <ul class="lista-beneficios">
                <li><strong>Economia Hídrica Expressiva:</strong> Redução de até 40% no consumo de água nas propriedades rurais através do corte total do desperdício.</li>
                <li><strong>Eficiência Energética:</strong> Menos gastos na conta de luz, já que as bombas elétricas de irrigação só funcionam no tempo estritamente necessário.</li>
                <li><strong>Maximização da Colheita:</strong> Plantas que recebem a hidratação correta tornam-se mais fortes, gerando frutos de melhor qualidade e aumentando o lucro.</li>
                <li><strong>Preservação do Solo:</strong> Evita a erosão e a perda de nutrientes essenciais provocadas pelo fluxo excessivo e descontrolado de água.</li>
            </ul>
        </div>
    </section>

    <section id="contato" class="section-padding">
        <div class="container card text-center">
            <h2>Contato</h2>
            <p>Tem dúvidas ou quer levar a inovação da <strong>Hidrocense</strong> para a sua região? Fale conosco e faça parte da evolução do agronegócio sustentável.</p>
            <div class="contato-info">
                <p>📧 Email: contato@hidrocense.com.br</p>
                <p>📞 Telefone: (44) 99999-9999</p>
                <p>📍 Paraná, Brasil - Projeto Agrinho</p>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>

