import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as utils from '../core/utils/index';

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

export default class App {
  constructor() {
    this.state = {
      donates: mockDonates,
      totalAmount: utils.calculateSumOfNumbers(mockDonates.map(item => item.amount))
    }
    this.newForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
    this.newList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.state.totalAmount += Number(newDonate.amount);
    this.newForm.updateTotalAmount(this.state.totalAmount);
    this.newList.updateDonates(this.state.donates);
  }

  run() {
    document.querySelector('body').append(this.newForm.render(), this.newList.render());
  }
}