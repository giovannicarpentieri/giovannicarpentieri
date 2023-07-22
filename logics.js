// Seleziona il pulsante
var toggleButton = document.querySelector("#theme-toggle-button");

// Aggiungi questo all'inizio del tuo file JavaScript
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Modifica l'handler del click sul tuo pulsante di commutazione
toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
      theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
