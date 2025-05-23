<form class="mb-4" name="contact-form" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-control" required />
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">E-Mail</label>
        <input id="email" name="email" type="email" class="form-control" required />
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Nachricht</label>
        <textarea id="message" name="message" class="form-control" rows="4" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Absenden</button>
</form>