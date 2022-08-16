document.getElementById("btn-submit").addEventListener("click", function () {
  // get email value
  const emailField = document.getElementById("user-mail");
  const email = emailField.value;
  //   get password value
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);
  if (email === "email@gmail.com" && password === "bangladesh") {
    window.location.href = "bank.html";
  } else {
    alert("Password ta thik vabe dao bro!!");
  }
});
