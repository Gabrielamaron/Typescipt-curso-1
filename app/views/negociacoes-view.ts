export class NegociacoesView {
  private elementoTabela: HTMLElement;

  constructor(seletor: string) {
    this.elementoTabela = document.querySelector(seletor);
  }

  template(): string {
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

  update(): void {
    this.elementoTabela.innerHTML = this.template();
  }
}
