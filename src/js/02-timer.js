import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

class Timer {
  constructor(dateTimePicker) {
    this.parent = document.querySelector(dateTimePicker);
    // console.log(this.parent);

    this.startButton = document.querySelector('[data-start]');
    // console.log(this.startButton);
  }
  start() {}

  stop() {}
}
// на старті програми зробити екзепляр класу
const timer = new Timer('#datetime-picker');
