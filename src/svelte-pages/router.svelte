<script>
    import Router from 'svelte-spa-router';
    import Home from './Home.svelte';
    import About from './About.svelte';
    import Repertoire from './repertoire.svelte';
    import Gallery from './gallery.svelte';
    import Contact from "./contact.svelte";

    const routes = {
        '/': Home,
        '/about': About,
        '/repertoire': Repertoire,
        '/gallery': Gallery,
        '/contact': Contact,

    };
</script>

<Router {routes} />