export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
