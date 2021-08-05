import { Settings } from '../core/constants/settings';
import * as utils from '../core/utils/index';

export class DonateList {
  #donates
  #container
  #title
  #itemsContainer
  #items


  constructor(donates) {
    this.#donates = donates;
    this.#container = document.createElement('div');
    this.#title = document.createElement('h2');
    this.#itemsContainer = document.createElement('div');
    this.#items = [];
    donates.forEach(donat => {
      const item = document.createElement('div');
      this.#items.push(item);
    });
  }

  updateDonates(updatedDonates) {
    document.querySelector('.donates-container__donates').innerHTML = '';
    this.#setDonates(updatedDonates);
  }

  #setDonates(donates) {
    this.#items = [];
    donates.forEach(donat => {
      const item = document.createElement('div');
      this.#items.push(item);
    });

    this.#items.forEach((item, index) => {
      item.className = 'donate-item';
      const date = utils.getFormattedTime(donates[index].date);
      item.textContent = `${date} - `;
      const b = document.createElement('b');
      b.textContent = `${donates[index].amount}${Settings.currency}`;
      item.append(b);
      this.#itemsContainer.append(item);
    })
  }

  render() {
    this.#container.className = 'donates-container';

    this.#title.className = 'donates-container__title';
    this.#title.textContent = 'Список донатов';

    this.#itemsContainer.className = 'donates-container__donates';

    this.#setDonates(this.#donates);

    this.#container.append(this.#title, this.#itemsContainer);
    return this.#container;
  }
}