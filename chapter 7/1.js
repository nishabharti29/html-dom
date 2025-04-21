function handleButtonClick(event) {
    console.log('Button clicked! (named function)');
    console.log('Event details:', event);
  }
  button.addEventListener('click', handleButtonClick);