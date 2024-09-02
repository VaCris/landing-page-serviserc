document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var loading = document.getElementById('loading');
    var errorMessage = document.getElementById('error-message');
    var sentMessage = document.getElementById('sent-message');

    loading.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    sentMessage.classList.add('hidden');

    fetch('/auth/send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        loading.classList.add('hidden');
        if (data.success) {
            sentMessage.classList.remove('hidden');
            this.reset();
        } else {
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = data.message;
        }
    })
    .catch(error => {
        loading.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Error de red o del servidor.';
    });
});

