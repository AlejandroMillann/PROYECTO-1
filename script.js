// Mostrar aviso de cookies solo la primera vez
document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.getElementById("cookies");
  const aceptar = document.getElementById("aceptarCookies");

  if (!localStorage.getItem("cookiesAceptadas")) {
    cookies.style.display = "block";
  }

  aceptar.addEventListener("click", () => {
    cookies.style.display = "none";
    localStorage.setItem("cookiesAceptadas", "true");
  });
});
