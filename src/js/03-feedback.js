import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback - form - state';
const formData = {};

const formSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const inputOn = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(inputOn, 500));

const textareaOn = () => {
  const savingMessage = JSON.parse(localStorage.setItem(STORAGE_KEY));
  if (savingMessage) {
    textarea.value = savingMessage.value;
    input.value = savingMessage.value;
  }
};
textareaOn();
