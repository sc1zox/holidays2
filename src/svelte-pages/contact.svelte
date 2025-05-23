<form class="mb-4" name="contact" method="POST" netlify>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-control" required/>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">E-Mail</label>
        <input id="email" name="email" type="email" class="form-control" required/>
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Nachricht</label>
        <textarea id="message" name="text" class="form-control" rows="4" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Absenden</button>
</form>