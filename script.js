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

// ===============================
// ACCESIBILIDAD - ALTO CONTRASTE
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const botonContraste = document.getElementById("modoAltoContraste");
  const body = document.body;

  // Comprobar si el usuario ya tenía alto contraste activado
  if (localStorage.getItem("altoContraste") === "true") {
    body.classList.add("alto-contraste");
  }

  if (botonContraste) {
    botonContraste.addEventListener("click", function () {
      body.classList.toggle("alto-contraste");

      // Guardar preferencia
      const activado = body.classList.contains("alto-contraste");
      localStorage.setItem("altoContraste", activado);
    });
  }
});
