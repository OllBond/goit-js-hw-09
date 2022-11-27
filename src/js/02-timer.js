import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startButtonRef: document.querySelector('[data-start]'),
};

class Timer {
  constructor(dateTimePicker) {
    this.parent = document.querySelector(dateTimePicker);
    // console.log(this.parent);

    this.startButton = document.querySelector('[data-start]');
    // console.log(this.startButton);
    this.startButton.addEventListener('click', this.start);
  }
  start() {
    console.log('start');
    // вибір дати методом selectedDates бібліотеки
    console.log(resultFlatpickr.selectedDates[0]);
  }

  stop() {}
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      refs.startButtonRef.setAttribute('disabled', 'disabled');
      return window.alert('Please choose a date in the future');
    }
    refs.startButtonRef.removeAttribute('disabled');
  },
};

// на старті програми зробити екзепляр класу
const timer = new Timer('#datetime-picker');

// ініціалізація бібліотеки запис у змінну
const resultFlatpickr = flatpickr('#datetime-picker', options);

// функція підрахунку часу
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
