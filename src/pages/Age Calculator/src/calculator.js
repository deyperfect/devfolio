import datepicker from 'js-datepicker'
import 'js-datepicker/dist/datepicker.min.css'
import { DateTime } from 'luxon'

const birthDateInput = document.querySelector('#birthdate');
const preResult = document.querySelector('#pre-result');
const result = document.querySelector('#result');
const error = document.querySelector('#error');
const calcBtn = document.getElementById('calculatebtn');
const resetBtn = document.getElementById('resetbtn');

let birthDate = null;

datepicker(birthDateInput, {
  onSelect: (_, date) => {
    birthDate = DateTime.fromJSDate(date).startOf('day');
  },
  maxDate: new Date()
});

calcBtn.addEventListener('click', ()=> {
  preResult.innerHTML = '';
  result.innerHTML = '';
  error.innerHTML = '';

  const today = DateTime.now().startOf('day');

  if (!birthDate) {
    error.textContent = 'Please input your birthdate.';
    return;
  } 

  const age = today.diff(birthDate, ['years', 'months', 'days']).toObject();

  preResult.textContent = 'You are:';
  result.innerHTML = `
    <span class='age-number'>${age.years}</span> years,
    <span class='age-number'>${age.months}</span> months,
    and <span class='age-number'>${Math.floor(age.days)}</span> days old.`;
});


document.getElementById('resetbtn').addEventListener('click', () => {
  birthDateInput.value = '';
  preResult.innerHTML = '';
  result.innerHTML = '';
  error.innerHTML = '';
  birthDate = null;
});