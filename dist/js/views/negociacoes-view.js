export class NegociacoesView {
    constructor(seletor) {
        this.elementoTabela = document.querySelector(seletor);
    }
    template(model) {
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
            ${model.lista().map((negociacao) => {
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
    update(model) {
        console.log("Lista de Negociacoes input:", model);
        this.elementoTabela.innerHTML = this.template(model);
    }
}
