/* (function ($) {
	$(document).ready(function () {
		$('#sylius_payment_method_calculator').handlePrototypes({
			'prototypePrefix': 'sylius_payment_method_calculator_calculators',
			'containerSelector': '.calculatorConfiguration'
		});
	});
})(jQuery);
 */

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const paymentMethodSelector = document.getElementById('sylius_payment_method_calculator');
        const container = document.querySelector('.calculatorConfiguration');

        if (paymentMethodSelector) {
            paymentMethodSelector.addEventListener('change', function () {
                handlePrototypes(container);
            });

            // Trigger the function initially in case the form is pre-populated
            handlePrototypes(container);
        }
    });

    function handlePrototypes(container) {
        const prototypePrefix = 'sylius_payment_method_calculator_calculators';
        const containerSelector = '.calculatorConfiguration';

        // Your logic for handling the prototypes (dynamically showing/hiding fields)
        if (container) {
            // Example: Check if a specific prototype should be shown
            if (container.querySelector(`${containerSelector} .calculator-field`)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    }
})();
