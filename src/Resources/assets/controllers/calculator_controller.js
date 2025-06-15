import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["container", "calculatorConfiguration"];

  connect() {
    this.updateCalculatorConfigurationVisibility();
  }

  updateCalculatorConfigurationVisibility() {
    const selectedCalculator = this.containerTarget.querySelector('select').value;
    if (selectedCalculator === 'specificPaymentMethod') {
      this.calculatorConfigurationTarget.style.display = "block";
    } else {
      this.calculatorConfigurationTarget.style.display = "none";
    }
  }

  // Action triggered when the payment method selection changes
  changeCalculator() {
    this.updateCalculatorConfigurationVisibility();
  }
}
