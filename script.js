 document.addEventListener("DOMContentLoaded", function () {
    const botaoMobile = document.getElementById("botaoMobile");
    const menuSusp = document.getElementById("menuSusp");

    // Garante que o menu começa fechado
    menuSusp.style.display = "none";

    // Abre e fecha com clique
    botaoMobile.addEventListener("click", () => {
      if (menuSusp.style.display === "none" || menuSusp.style.display === "") {
        menuSusp.style.display = "flex";
      } else {
        menuSusp.style.display = "none";
      }
    });
  });
