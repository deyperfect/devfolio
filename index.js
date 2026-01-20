console.log('test');

let themeToggle = document.querySelector('#theme');

// themeToggle.onclick = changeTheme;

function changeTheme() {
    
}

let theme = document.getElementById("body");
let currentTheme;

const activeClass = theme.className; 

if (activeClass === "dark") { // Check for an exact match
    currentTheme = "dark";
} else if (activeClass === "") {
    currentTheme = "light";
} 

console.log(currentTheme);


// document.getElementById("theme-changer").addEventListener("click", () => {
  
//   preResult.innerHTML = '';
//   result.innerHTML = '';
//   error.innerHTML = '';

//   let birthDateValue = birthDateInput.value;
//   let birthDate = DateTime.fromISO(birthDateValue);
//   let today = DateTime.now();
//   let age = today.diff(birthDate, ["years", "months", "days"]).toObject();

//   if (birthDateValue == '') {
//     document.getElementById("error").textContent = "Please input your birthdate.";
//     return;
//   } else if (birthDate > today) {
//     document.getElementById("error").textContent = "Birthdate cannot be in the future.";
//     return;
//   } 

//   document.getElementById("pre-result").textContent = 'You are:';
//   result.innerHTML = `
//     <span class="age-number">${Math.floor(age.years)}</span> years,
//     <span class="age-number">${Math.floor(age.months)}</span> months,
//     and <span class="age-number">${Math.floor(age.days)}</span> days old.`;
//   showResetButton();
// });