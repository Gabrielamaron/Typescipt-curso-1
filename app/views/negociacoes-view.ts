import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elementoTabela: HTMLElement;

  constructor(seletor: string) {
    this.elementoTabela = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map((negociacao: Negociacao) => {
              return `
              <tr>
                <td>${negociacao.data}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
              `;
            })}
            </tbody>
        </table>
        `;
  }

  update(model: Negociacoes): void {
    console.log("Lista de Negociacoes input:" ,model);
    this.elementoTabela.innerHTML = this.template(model);
  }
}
