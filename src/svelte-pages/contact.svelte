<form name="netlify-form-example" method="POST" netlify>
    <input type="hidden" name="form-name" value="netlify-form-example" />

    <label for="name">Name</label>
    <input name="name" id="name" required placeholder="Name" type="text" />

    <label for="email">Email</label>
    <input name="email" id="email" required placeholder="Email" type="email" />

    <label for="message">Message</label>
    <textarea name="message" id="message" required placeholder="Message"></textarea>

    <input type="submit" value="Submit" />
</form>

<!-- Erfolgsnachricht -->
<div id="form-success" style="display:none;">
    <p>Danke! Deine Nachricht wurde erfolgreich gesendet.</p>
</div>

<script>
    // Erfolgsnachricht anzeigen, wenn Formular erfolgreich abgesendet wird
    const form = document.querySelector('form');
    const successMessage = document.querySelector('#form-success');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.style.display = 'block'; // Erfolgsnachricht anzeigen
    });
</script>
