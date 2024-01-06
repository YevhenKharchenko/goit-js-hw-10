import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const numberInput = document.querySelector('[type=number]');
const submitBtn = document.querySelector('[type-submit]');

function onSubmitBtnClick(event) {
  event.preventDefault();

  const makePromise = () => {
    return new Promise((resolve, reject) => {
      const delay = numberInput.value;
      const shouldResolve = form.elements.state.value;

      setTimeout(() => {
        if (shouldResolve === 'fulfilled') {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise in ${delay}ms`);
        }
      }, delay);
    });
  };

  makePromise()
    .then(value => console.log(value))
    .catch(error => console.log(error));

  form.reset();
}

form.addEventListener('submit', onSubmitBtnClick);
