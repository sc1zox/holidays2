<script>
    let name = '';
    let email = '';
    let message = '';
    let success = false;
    let error = false;

    // Funktion, um das Formular abzusenden
    const submitForm = async (event) => {
        event.preventDefault(); // Verhindert die Standard-Seitenumleitung

        try {
            // Formular-Daten werden per Fetch gesendet
            const res = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'form-name': 'netlify-form-example',  // Wichtig: Name muss mit dem Formularnamen übereinstimmen
                    name,
                    email,
                    message,
                }),
            });

            if (res.ok) {
                // Wenn das Formular erfolgreich abgeschickt wurde
                success = true;
                error = false;

                // Die SPA-Seite auf "Erfolg" setzen (Router mit hashbang aktualisieren)
                window.location.hash = '#/success';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            console.error(err);
            error = true;
            success = false;
        }
    };
</script>

<!-- Formular HTML -->
<form name="netlify-form-example" on:submit={submitForm}>
    <label for="name">Name</label>
    <input name="name" id="name" required placeholder="Name" type="text" bind:value={name} />

    <label for="email">Email</label>
    <input name="email" id="email" required placeholder="Email" type="email" bind:value={email} />

    <label for="message">Message</label>
    <input name="message" id="message" required placeholder="Message" type="text" bind:value={message} />

    <input type="submit" value="Submit" />
</form>

<!-- Erfolgsmeldung -->
{#if success}
    <p>Thank you! Your message has been sent.</p>
{/if}

<!-- Fehlerbehandlung -->
{#if error}
    <p>There was an error submitting your form. Please try again later.</p>
{/if}
