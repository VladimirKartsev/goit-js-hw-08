import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const formData = {};

const STORAGE_KEY = 'feedback-form-state';

const FormSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const InputOn = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('submit', FormSubmit);
form.addEventListener('input', throttle(InputOn, 500));

const textareaOn = () => {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parseMessage = JSON.parse(savedMessage);
    input.value = parseMessage.email;
    textarea.value = parseMessage.message;
  }
};
textareaOn();
