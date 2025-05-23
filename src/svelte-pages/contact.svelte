<script>
    let name = '';
    let email = '';
    let message = '';
    let sent = false;
</script>

{#if !sent}
    <form class="mb-4" method="POST" netlify>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input id="name" class="form-control" bind:value={name} required />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E-Mail</label>
            <input id="email" type="email" class="form-control" bind:value={email} required />
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Nachricht</label>
            <textarea id="message" class="form-control" rows="4" bind:value={message} required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Absenden</button>
    </form>
{:else}
    <div class="alert alert-success">Vielen Dank für deine Nachricht!</div>
{/if}