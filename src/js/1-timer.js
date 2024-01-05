import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const startBtn = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
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
    userSelectedDate = Date.parse(selectedDates[0]);

    if (selectedDates[0] > Date.now()) {
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', onStartBtnClick);
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

    function onStartBtnClick() {
      startBtn.setAttribute('disabled', true);
      datetimePicker.setAttribute('disabled', true);

      function timer() {
        const parsedSelectedDate = userSelectedDate;
        const countdownInterval = setInterval(() => {
          const currentDate = Date.now();
          const remainingTime = parsedSelectedDate - currentDate;
          const convertedTime = convertMs(remainingTime);

          remainingDays.textContent = addLeadingZero(convertedTime.days);
          remainingHours.textContent = addLeadingZero(convertedTime.hours);
          remainingMinutes.textContent = addLeadingZero(convertedTime.minutes);
          remainingSeconds.textContent = addLeadingZero(convertedTime.seconds);

          if (remainingTime < 1000) {
            clearInterval(countdownInterval);
          }
        }, 1000);
      }
      timer();
    }
  },
};

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

flatpickr(datetimePicker, options);
