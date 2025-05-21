document.addEventListener('DOMContentLoaded', function () {
	const calculatorSelect = document.getElementById('sylius_payment_method_calculator');

	if (calculatorSelect && typeof SyliusHandlePrototypes === 'function') {
		SyliusHandlePrototypes(calculatorSelect, {
			prototypePrefix: 'sylius_payment_method_calculator_calculators',
			containerSelector: '.calculatorConfiguration'
		});
	}
});
