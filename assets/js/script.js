const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a ansiedade afeta sua saúde mental e emocional?",
        alternativas: [
            {
                texto: "A ansiedade pode levar a sentimentos persistentes de preocupação e tensão.",
                afirmacao: "A ansiedade frequentemente resulta em uma sensação constante de alerta e nervosismo, o que pode impactar significativamente a saúde mental e emocional ao longo do tempo."
            },
            {
                texto: "A ansiedade pode interferir nas relações interpessoais e na qualidade de vida.",
                afirmacao: "Quando não tratada, a ansiedade pode dificultar a interação social, criando barreiras nas relações e diminuindo a qualidade de vida."
            }
        ]
    },
    {
        enunciado: "Quais são os principais gatilhos para crises de ansiedade?",
        alternativas: [
            {
                texto: "Situações de estresse intenso e imprevistos são grandes gatilhos para a ansiedade.",
                afirmacao: "Eventos inesperados e situações de alta pressão podem desencadear episódios de ansiedade, pois o corpo e a mente entram em modo de alerta, aumentando a sensação de medo e incerteza."
            },
            {
                texto: "A autocobrança excessiva e o perfeccionismo podem agravar a ansiedade.",
                afirmacao: "A busca constante pela perfeição e a pressão para corresponder a altos padrões podem intensificar os sintomas de ansiedade, criando um ciclo vicioso de estresse e insatisfação."
            }
        ]
    },
    {
        enunciado: "Quais estratégias você utiliza para lidar com a ansiedade?",
        alternativas: [
            {
                texto: "Práticas de respiração e mindfulness ajudam a controlar a ansiedade.",
                afirmacao: "Técnicas como respiração profunda e mindfulness são eficazes para reduzir os níveis de ansiedade, promovendo uma sensação de calma e centramento."
            },
            {
                texto: "Buscar apoio emocional em amigos ou terapeutas é fundamental para gerenciar a ansiedade.",
                afirmacao: "Conversar com alguém de confiança ou buscar ajuda profissional pode aliviar os sintomas de ansiedade e fornecer estratégias eficazes para lidar com os desafios emocionais."
            }
        ]
    },
    {
        enunciado: "Como a ansiedade pode impactar seu desempenho no trabalho ou nos estudos?",
        alternativas: [
            {
                texto: "A ansiedade pode dificultar a concentração e a produtividade.",
                afirmacao: "A mente ansiosa tende a se distrair facilmente, tornando difícil manter o foco nas tarefas e impactando negativamente o desempenho acadêmico ou profissional."
            },
            {
                texto: "Crises de ansiedade podem levar à procrastinação e à baixa autoestima.",
                afirmacao: "A ansiedade pode causar procrastinação devido ao medo de falhar, e as críticas internas severas podem minar a confiança, dificultando a realização de tarefas."
            }
        ]
    },
    {
        enunciado: "Quais medidas a sociedade pode tomar para apoiar pessoas com ansiedade?",
        alternativas: [
            {
                texto: "Campanhas de conscientização sobre ansiedade podem ajudar a reduzir o estigma.",
                afirmacao: "Educar o público sobre os sintomas e efeitos da ansiedade pode incentivar um ambiente mais acolhedor e solidário, onde as pessoas se sintam seguras para buscar ajuda."
            },
            {
                texto: "Oferecer tratamento psicológico acessível é essencial para apoiar quem sofre de ansiedade.",
                afirmacao: "Garantir que todos tenham acesso a cuidados psicológicos de qualidade é vital para o tratamento eficaz da ansiedade e para o bem-estar geral da população."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como está sua saúde mental hoje...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "A saúde mental e emocional é fundamental para o bem-estar geral, impactando todas as áreas da vida, desde o trabalho e os estudos até as relações interpessoais. Entender o que influencia a saúde mental e as formas de mantê-la em equilíbrio é essencial para promover uma vida mais plena e saudável. A sociedade também desempenha um papel importante ao criar um ambiente de apoio e compreensão, incentivando o cuidado com a saúde mental e emocional como uma prioridade. Ao refletir sobre essas questões, é possível reconhecer a importância de cuidar da mente tanto quanto do corpo, buscando equilíbrio e bem-estar em todas as esferas da vida.";
}

mostraPergunta();
