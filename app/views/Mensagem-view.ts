import { View } from "./view.js";

export class MensagemView extends View<string> {
  protected template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`;
  }

  public remove(): void {
    this.element.removeChild(this.element.children[0]);
  }
}
