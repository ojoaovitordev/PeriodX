// Lê os nomes diretamente da ficha, na ordem em que aparecem no HTML.
const ficha = document.querySelector("#treino-do-dia");
const exercicios = Array.from(ficha.querySelectorAll(".nome-exercicio"), (item) =>
  item.textContent.trim()
);

const botaoIniciar = document.querySelector("#iniciar-treino");
const areaSessao = document.querySelector("#area-sessao");
const tituloSessao = document.querySelector("#titulo-sessao");
const tituloFicha = document.querySelector("#titulo-treino-dia");
const nomeAtual = document.querySelector("#titulo-exercicio");
const posicao = document.querySelector("#posicao-exercicio");
const exemploSeries = document.querySelector("#exemplo-series");
const avisoSemSeries = document.querySelector("#aviso-sem-series");
const botaoProximo = document.querySelector("#proximo-exercicio");
const botaoVoltar = document.querySelector("#voltar-ficha");

// A posição fica em memória enquanto esta página estiver aberta.
let indiceAtual = 0;

function atualizarExercicio() {
  const primeiroExercicio = indiceAtual === 0;

  nomeAtual.textContent = exercicios[indiceAtual];
  posicao.textContent = `${indiceAtual + 1} de ${exercicios.length}`;
  exemploSeries.hidden = !primeiroExercicio;
  avisoSemSeries.hidden = primeiroExercicio;
  botaoProximo.disabled = indiceAtual === exercicios.length - 1;
}

// Foca o título e leva a rolagem até a área correspondente.
function irAte(elemento) {
  elemento.focus({ preventScroll: true });
  elemento.scrollIntoView({ block: "center" });
}

botaoIniciar.addEventListener("click", () => {
  atualizarExercicio();
  areaSessao.hidden = false;
  botaoIniciar.textContent = "Continuar treino do dia";
  irAte(tituloSessao);
});

botaoProximo.addEventListener("click", () => {
  if (indiceAtual >= exercicios.length - 1) return;

  indiceAtual += 1;
  atualizarExercicio();
  irAte(nomeAtual);
});

botaoVoltar.addEventListener("click", () => {
  areaSessao.hidden = true;
  irAte(tituloFicha);
});

botaoIniciar.disabled = exercicios.length === 0;