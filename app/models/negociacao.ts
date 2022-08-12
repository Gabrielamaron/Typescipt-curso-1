export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const copiaData = new Date(this._data.getTime());

    return copiaData;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
