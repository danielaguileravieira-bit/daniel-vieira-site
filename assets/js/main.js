// Ano automático no rodapé.
const yearElement = document.querySelector("[data-current-year]");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Pequeno feedback de navegação para os cards enquanto os destinos individuais são definidos.
document.querySelectorAll(".path-card").forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") card.classList.add("is-activated");
  });
});
