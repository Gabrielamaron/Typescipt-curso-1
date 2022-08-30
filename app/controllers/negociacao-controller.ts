import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const dataFormatada = this.formataData();

    if (this.verificacaoDiaUtil(dataFormatada)) return;
    const novaNegociacao = this.criaNegociacao(dataFormatada);
    this.negociacoes.adiciona(novaNegociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  private verificacaoDiaUtil(dataFormatada: Date): boolean {
    if (dataFormatada.getDay() == 0 || dataFormatada.getDay() == 6) {
      this.mensagemView.update(
        "Essa negociacâo nâo pode ser criada pois não foi realizada em dia útil!"
      );
      return true;
    }
    this.mensagemView.update("");
    return false;
  }

  private formataData(): Date {
    const exp = /-/g;
    const iData = this.inputData.value;
    return new Date(iData.replace(exp, ","));
  }

  private criaNegociacao(dataFormatada: Date): Negociacao {
    return new Negociacao(
      dataFormatada,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber
    );
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "1";
    this.inputValor.value = "0.0";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
    setTimeout(() => {
      this.mensagemView.remove();
    }, 4275);
  }
}
