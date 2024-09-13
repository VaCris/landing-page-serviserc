document
        .getElementById("btn-enviar")
        .addEventListener("click", function (e) {
          e.preventDefault();

          grecaptcha.ready(function () {
            grecaptcha
              .execute("6LeSY0IqAAAAAGrYK_3qzoNBr6czaEQusD0ArEps", { action: "submit" })
              .then(function (token) {
                onSubmit(token);
              });
          });
        });

      function onSubmit(token) {
        var form = document.getElementById("contact-form");
        var formData = new FormData(form);
        formData.append("g-recaptcha-response", token);

        var loading = document.getElementById("loading");
        var errorMessage = document.getElementById("error-message");
        var sentMessage = document.getElementById("sent-message");

        loading.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        sentMessage.classList.add("hidden");

        fetch("/src/auth/send_email.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            loading.classList.add("hidden");
            if (data.success) {
              sentMessage.classList.remove("hidden");
              form.reset();
            } else {
              errorMessage.classList.remove("hidden");
              errorMessage.textContent = data.message;
            }
          })
          .catch((error) => {
            loading.classList.add("hidden");
            errorMessage.classList.remove("hidden");
            errorMessage.textContent = "Error de red o del servidor.";
            console.error("Error en la solicitud:", error);
          });
      }