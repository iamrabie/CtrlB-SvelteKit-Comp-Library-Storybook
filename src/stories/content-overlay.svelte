<script>
    import Overlay from './content-block-overlay.svelte';
    export let heading3 = 'This is heading 3';
    let head3 = heading3;
    export let heading1 = 'This is the title for the next page';
    let head1 = heading1;
    export let text = 'This is a body of text';
    let text_ = text;
    export let button = 'THIS IS A BUTTON';
    let btn = button;
   
</script>

<Overlay  {head3} {head1} {text_} {btn}/>