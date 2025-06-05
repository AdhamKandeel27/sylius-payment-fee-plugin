import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['select', 'container']
    static values = {
        prototypes: Object
    }

    connect() {
        console.log('[Stimulus] Calculator Configurator Connected');
        console.log('[Stimulus] Prototypes:', this.prototypesValue);
        console.log('[Stimulus] Targets found:', {
            select: this.hasSelectTarget,
            container: this.hasContainerTarget
        });
        
        // Add event listener for select changes
        if (this.hasSelectTarget) {
            this.selectTarget.addEventListener('change', () => this.updateFields());
        }
        
        // Initial update
        this.updateFields();
    }

    updateFields() {
        if (!this.hasSelectTarget || !this.hasContainerTarget) {
            console.warn('[Stimulus] Missing required targets');
            return;
        }

        const selected = this.selectTarget.value;
        console.log('[Stimulus] Selected calculator:', selected);

        if (this.prototypesValue && this.prototypesValue[selected]) {
            console.log('[Stimulus] Injecting prototype:', this.prototypesValue[selected]);
            this.containerTarget.innerHTML = this.prototypesValue[selected];
        } else {
            console.warn('[Stimulus] No prototype found for:', selected);
            this.containerTarget.innerHTML = '';
        }
    }

    disconnect() {
        console.log('[Stimulus] Calculator Configurator Disconnected');
    }
}