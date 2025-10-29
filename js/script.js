// Exemplo: atualizar ano automaticamente
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// Exemplo: acessibilidade do toggler do menu
const btn = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("aberto");
  });
}

// Alterar para modo escuro/claro
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector(".theme-toggle");

const enabledDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

if(darkmode === "active") enabledDarkMode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enabledDarkMode() : disableDarkMode();
})

// Automaticamente formatar o valor de doação
const input = document.getElementById("contribuition");

input.addEventListener("input", (e) => {
  let value = e.target.value;

  // Remove tudo que não é número
  value = value.replace(/\D/g, "");

  // Divide por 100 para ajustar casas decimais (ex: 232312 → 2323.12)
  value = (value / 100).toFixed(2);

  // Converte para número com formatação local (pt-BR)
  value = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  e.target.value = value;
});