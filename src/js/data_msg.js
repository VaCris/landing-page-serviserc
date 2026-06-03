const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(this);
    var loading = document.getElementById("loading");
    var errorMessage = document.getElementById("error-message");
    var sentMessage = document.getElementById("sent-message");
    var submitButton = document.getElementById("btn-enviar");

    loading.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    sentMessage.classList.add("hidden");
    errorMessage.textContent = "";

    if (submitButton) {
      submitButton.disabled = true;
    }

    fetch("/src/auth/send_email.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Respuesta inválida del servidor.");
        }
        return response.json();
      })
      .then((data) => {
        loading.classList.add("hidden");

        if (data.success) {
          sentMessage.textContent = data.message || "Su mensaje ha sido enviado. Muchas gracias.";
          sentMessage.classList.remove("hidden");
          this.reset();

          if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
          }
        } else {
          errorMessage.classList.remove("hidden");
          errorMessage.textContent = data.message || "No se pudo enviar el mensaje.";
        }
      })
      .catch((error) => {
        loading.classList.add("hidden");
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = "Error de red o del servidor.";
        console.error("Error en la solicitud:", error);
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
  });
}
