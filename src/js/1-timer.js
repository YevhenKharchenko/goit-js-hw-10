import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;
const startBtn = document.querySelector('[data-start]');
const remainDays = document.querySelector('[data-days]');
const remainHours = document.querySelector('[data-hours]');
const remainMinutes = document.querySelector('[data-minutes]');
const remainSeconds = document.querySelector('[data-minutes]');
startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const parsedSelectedDate = Date.parse(selectedDates[0]);
    const today = Date.now();

    if (parsedSelectedDate > today) {
      startBtn.removeAttribute('disabled');

      userSelectedDate = parsedSelectedDate - today;

      startBtn.addEventListener('click', () => {
        return setInterval(onStartBtnClick, 1000);
      });

      function onStartBtnClick() {
        remainDays.textContent = convertMs(userSelectedDate).days;
        remainHours.textContent = convertMs(userSelectedDate).hours;
        remainMinutes.textContent = convertMs(userSelectedDate).minutes;
        remainSeconds.textContent = convertMs(userSelectedDate).seconds;
      }
    } else {
      alert('no');
    }
  },
};

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

flatpickr('#datetime-picker', options);
