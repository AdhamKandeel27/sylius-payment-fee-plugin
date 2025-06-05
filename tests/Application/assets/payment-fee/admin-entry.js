// tests/Application/assets/payment-fee/admin-entry.js
import { Application } from '@hotwired/stimulus';
import PrototypeController from '../controllers/prototype_controller';

const app = Application.start();
app.register('prototype', PrototypeController);
