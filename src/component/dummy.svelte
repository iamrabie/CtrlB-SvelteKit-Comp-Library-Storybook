<script>
    import Card from '../stories/card.svelte';
    
    import Grid from '../stories/grid.svelte';
</script>


<!-- In this comp we are using to components to give the effect of centered content with space arount it.
So the Card Comp is basically having a div and a card within the div and grid comp is used to display the 
grid table within that card making them look centered,neat and attractive. -->
<Card>
    <div slot='grids'>
       <Grid />
    </div>
</Card>