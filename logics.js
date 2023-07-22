// Seleziona gli elementi
var toggleButton = document.querySelector("#theme-toggle-button");
var submitButton = document.querySelector("#submit");
var loginDiv = document.querySelector("#login");
var contentDiv = document.querySelector("#content");
var errorMessage = document.querySelector("#error-message");

// Funzione per cambiare il tema
function changeTheme() {
  document.body.classList.toggle("dark-mode");

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
      theme = "dark";
  }
  localStorage.setItem("theme", theme);
}

// Imposta il tema iniziale
if (localStorage.getItem("theme") === "dark") {
  changeTheme();
}

// Cambia il tema quando il pulsante viene premuto
toggleButton.addEventListener("click", changeTheme);

// Verifica le credenziali quando il pulsante viene premuto
submitButton.addEventListener("click", function() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  if (username === "myUsername" && password === "myPassword") {
    loginDiv.style.display = "none";
    contentDiv.style.display = "block";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Username o password errati!";
  }
});
