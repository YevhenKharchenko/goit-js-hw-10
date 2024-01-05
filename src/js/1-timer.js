import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const startBtn = document.querySelector('[data-start]');
const remainingDays = document.querySelector('[data-days]');
const remainingHours = document.querySelector('[data-hours]');
const remainingMinutes = document.querySelector('[data-minutes]');
const remainingSeconds = document.querySelector('[data-seconds]');
startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const parsedSelectedDate = Date.parse(selectedDates[0]);
    const currentDate = Date.now();

    if (parsedSelectedDate > currentDate) {
      startBtn.removeAttribute('disabled');

      userSelectedDate = parsedSelectedDate - currentDate;

      startBtn.addEventListener('click', () => {
        setInterval(onStartBtnClick, 1000);
      });
    } else {
      startBtn.setAttribute('disabled', true);
      iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: 'orangered',
        messageColor: 'white',
        close: false,
        progressBar: false,
      });
    }
  },
};

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);

  const countdownInterval = setInterval(() => {
    console.log(userSelectedDate);
    const remainingTime = convertMs(userSelectedDate);

    remainingDays.textContent = addLeadingZero(remainingTime.days);
    remainingHours.textContent = addLeadingZero(remainingTime.hours);
    remainingMinutes.textContent = addLeadingZero(remainingTime.minutes);
    remainingSeconds.textContent = addLeadingZero(remainingTime.seconds);
  }, 1000);

  if (userSelectedDate < 1000) {
    clearInterval(countdownInterval);
  } else {
    userSelectedDate -= 1000;
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

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
