// Seleziona gli elementi
var submitButton = document.querySelector("#submit");
var loginDiv = document.querySelector("#login");
var contentDiv = document.querySelector("#content");
var errorMessage = document.querySelector("#error-message");
var maintenanceDiv = document.querySelector("#maintenance");

// Verifica le credenziali quando il pulsante viene premuto
submitButton.addEventListener("click", function() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  if (username === "gianni" && password === "carp") {
    localStorage.setItem("isLoggedIn", true);
    loginDiv.style.display = "none";
    maintenanceDiv.style.display = "none";
    contentDiv.style.display = "block";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Username o password errati!";
  }
});

// Se l'utente è già loggato, nasconde il modulo di login e il messaggio di manutenzione
if (localStorage.getItem("isLoggedIn")) {
  loginDiv.style.display = "none";
  maintenanceDiv.style.display = "none";
  contentDiv.style.display = "flex";
}
