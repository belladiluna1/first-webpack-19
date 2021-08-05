import { Settings as Currency } from "../core/constants/settings";

export class DonateForm {
  #form
  #total
  #label
  #input
  #button

  constructor(totalAmount, createNewDonate) {
    this.#form = document.createElement('form');
    this.#total = document.createElement('h1');
    this.#label = document.createElement('label');
    this.#input = document.createElement('input');
    this.#button = document.createElement('button');
    
    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;

    this.#form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newDonate = {};
      const input = this.#form.querySelector('input');
      newDonate.amount = input.value;
      input.value = '';
      newDonate.date = new Date();
      this.createNewDonate(newDonate);
    })
  }

  updateTotalAmount(newAmount) {
    document.querySelector('#total-amount').textContent = `${newAmount}${Currency.currency}`;
  }

  render() {
    this.#form.className = 'donate-form';

    this.#total.id = 'total-amount';
    this.#total.textContent = `${this.totalAmount}${Currency.currency}`;

    this.#label.className = 'donate-form__input-label';
    this.#label.textContent = `Введите сумму в ${Currency.currency}`;

    this.#input.className = 'donate-form__donate-input';
    this.#input.name = 'amount';
    this.#input.type = 'number';
    this.#input.max = '100';
    this.#input.min = '0';
    this.#input.required = '';
    this.#label.append(this.#input);

    this.#button.className = 'donate-form__submit-button';
    this.#button.type = 'submit';
    this.#button.textContent = 'Задонатить';

    this.#form.append(this.#total, this.#label, this.#button);

    return this.#form;
  }
}