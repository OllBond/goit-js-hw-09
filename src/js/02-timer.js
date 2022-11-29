import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startButtonRef: document.querySelector('[data-start]'),
  spanDataDays: document.querySelector('[data-days]'),
  spanDataHours: document.querySelector('[data-hours]'),
  spanDataMinutes: document.querySelector('[data-minutes]'),
  spanDataSeconds: document.querySelector('[data-seconds]'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    //щоб заново не запускався таймер
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    // якщо таймер активний виходимо з функції
    if (this.isActive) {
      return;
    }
    // якщо таймер не активний робимо активним
    this.isActive = true;

    this.intervalId = setInterval(() => {
      // вибір дати методом selectedDates бібліотеки flatpickr
      console.log(resultFlatpickr.selectedDates[0]);
      // обрана дата
      const selectedDate = resultFlatpickr.selectedDates[0];
      // поточна дата
      const currentDate = Date.now();
      // різниця між обраною і поточною датою
      const deltaTime = selectedDate - currentDate;
      // у функцію convertMs передаю deltaTime(різницю)
      const time = convertMs(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    if (deltaTime < 1000) {
      clearInterval(this.intrvalId);
      // updateClockface(0, 0, 0, 0);
    }
    // clearInterval(this.intrvalId);
    // this.isActive = false;
    // const time = this.convertMs(0);
    // this.onTick(time);
  }
}

// на старті програми зробити екземпляр класу
const timer = new Timer({
  onTick: updateClockface,
});

refs.startButtonRef.addEventListener('click', timer.start.bind(timer));

function updateClockface({ days, hours, minutes, seconds }) {
  // оновлює значення в інтерфейсі
  refs.spanDataDays.textContent = `${days}`;
  refs.spanDataHours.textContent = `${hours}`;
  refs.spanDataMinutes.textContent = `${minutes}`;
  refs.spanDataSeconds.textContent = `${seconds}`;
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

// ініціалізація бібліотеки запис у змінну
const resultFlatpickr = flatpickr('#datetime-picker', options);

//функція, яка додає 0 в секундах
function addLeadingZero(value) {
  // число перетворюється на стоку
  // виклик методу padStart
  // візми сторку і додай спочатку до двух символів, тобто 0, якщо там один
  return String(value).padStart(2, '0');
  // якщо приходить 1 - повертає 01 і тд...
  // якщо 12 - то верне 12
}

// функція підрахунку часу
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  // огортаємо в функцію addLeadingZero Math.floor ()
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
