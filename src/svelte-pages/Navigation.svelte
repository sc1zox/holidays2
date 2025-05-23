<script>
    import {link} from 'svelte-spa-router';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient mb-3 sticky-top" id="navbar">
    <div class="container-fluid">
        <a class="navbar-brand" use:link href="/">
            <img src="/Logo1.png" alt="Logo Holidays" id="company-logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-flex flex-row justify-content-around align-items-center w-100">
                <li class="nav-item">
                    <a class="nav-link active text-white fs-4" use:link href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white fs-4" use:link href="/gallery">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white fs-4" use:link href="/repertoire">Repertoire</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white fs-4" use:link href="/contact">Kontakt</a>
                </li>
            </ul>
        </div>
    </div>
</nav>