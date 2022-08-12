export class NegociacoesView {
    constructor(seletor) {
        this.elementoTabela = document.querySelector(seletor);
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        `;
    }
    update() {
        this.elementoTabela.innerHTML = this.template();
    }
}
