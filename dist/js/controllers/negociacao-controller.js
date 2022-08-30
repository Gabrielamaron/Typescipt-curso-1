import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const dataFormatada = this.formataData();
        if (this.verificacaoDiaUtil(dataFormatada))
            return;
        const novaNegociacao = this.criaNegociacao(dataFormatada);
        this.negociacoes.adiciona(novaNegociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    verificacaoDiaUtil(dataFormatada) {
        if (dataFormatada.getDay() == 0 || dataFormatada.getDay() == 6) {
            this.mensagemView.update("Essa negociacâo nâo pode ser criada pois não foi realizada em dia útil!");
            return true;
        }
        this.mensagemView.update("");
        return false;
    }
    formataData() {
        const exp = /-/g;
        const iData = this.inputData.value;
        return new Date(iData.replace(exp, ","));
    }
    criaNegociacao(dataFormatada) {
        return new Negociacao(dataFormatada, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "1";
        this.inputValor.value = "0.0";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
        setTimeout(() => {
            this.mensagemView.remove();
        }, 4275);
    }
}
