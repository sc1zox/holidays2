<script>
    let open = false;
</script>

<div class="accordion" id="myAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" on:click={() => open = !open} aria-expanded={open}>
                Accordion Titel
            </button>
        </h2>
        <div class="accordion-collapse collapse {open ? 'show' : ''}">
            <div class="accordion-body">
                Accordion Inhalt
            </div>
        </div>
    </div>
</div>