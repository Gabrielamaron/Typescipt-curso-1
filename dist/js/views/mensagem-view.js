import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    remove() {
        this.element.removeChild(this.element.children[0]);
    }
}
