// Listen for form submit event and call preventDefault().  if no input, then display error

var form = document.getElementById("login-form");
function handleForm(event) {
  event.preventDefault();

  // For error message
  var enteredUsername = document.getElementById("username");
  var enteredPassword = document.getElementById("password");

  const error = document.getElementById("error-msg");

  if (!enteredUsername.value || !enteredPassword.value) {
    console.log("Empty String");
    error.style.visibility = "visible";
  } else {
    window.location.assign("index.html");
  }
}
form.addEventListener("submit", handleForm);

// Hide error message and show only when log in fails
