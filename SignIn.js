// Get the input field element.
const emailInput = document.getElementById('exampleInputEmail1');

// Add a listener for the `change` event on the input field.
emailInput.addEventListener('change', function() {
  // Validate the email address.
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(emailInput.value)) {
    // Display an error message.
    alert('Please enter a valid email address.');
  }
});
