import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
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
            ${model
              .lista()
              .map((negociacao: Negociacao) => {
                return `
              <tr>
                <td>${this.formatar(negociacao)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
              `;
              })
              .join("")}
            </tbody>
        </table>
        `;
  }

  private formatar(negociacao: Negociacao): string {
    return new Intl.DateTimeFormat().format(negociacao.data);
  }
}
