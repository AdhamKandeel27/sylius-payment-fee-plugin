import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static values = {
        prototypePrefix: String,
        containerSelector: String,
    };

    connect() {
            console.log('[Stimulus] prototype controller connected ✅');

        this.select = document.querySelector(`#sylius_payment_method_calculator`);
        this.container = document.querySelector(this.containerSelectorValue);

        if (!this.select || !this.container) return;

        this.select.addEventListener('change', () => this.update());
        this.update(); // Call once on load if calculator is already selected
    }

    update() {
        const selectedCalculator = this.select.value;
        const prototypeId = `${this.prototypePrefixValue}_${selectedCalculator}`;
        const prototypeElement = document.getElementById(prototypeId);

        if (!prototypeElement) {
            this.container.innerHTML = '';
            return;
        }

        const html = prototypeElement.dataset.prototype;
        this.container.innerHTML = html;
    }
}
