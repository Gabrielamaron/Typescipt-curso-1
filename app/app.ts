import { NegociacaoController } from "./controllers/negociacao-controller.js";

const formulario = document.querySelector(".form");

const controllerNegociacao = new NegociacaoController();

formulario.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controllerNegociacao.adiciona();
});
