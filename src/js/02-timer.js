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
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// на старті програми зробити екзепляр класу
const timer = new Timer('#datetime-picker');

// ініціалізація бібліотеки
flatpickr('#datetime-picker', options);
