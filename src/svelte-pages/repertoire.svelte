<script>
    import { marked } from 'marked';
    import repertoireMd from '../content/repertoire.md?raw';
    let songs = marked(repertoireMd);
</script>
<div class="list-markdown">
    {@html songs}
</div>