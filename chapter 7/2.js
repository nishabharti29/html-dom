const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) => {
  console.log('Form submit event triggered.');
  if (!isValid(myForm)) {
     event.preventDefault();
     console.log('Form submission prevented due to invalid data.');
  }
});