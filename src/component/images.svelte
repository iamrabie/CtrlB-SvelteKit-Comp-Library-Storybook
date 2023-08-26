<script>
    export let Columns;
    let cols = Columns;
    export let Row_Gap;
    let row_gap = Row_Gap;
    export let Col_Gap;
    let col_gap = Col_Gap;
    import Images_grid from './imagesGrid.svelte';
    import Slides from './imagesSlideshow.svelte';
   
    var arrayOfImages = [
        {
            id: 0,
            image_url:'../../static/pizza.jpg',
            alt:"reload image"
        }, 
        {
            id: 1,
            image_url:'../../static/biryani.jpg',
            alt:"reload image"
        }, 
        {
            id: 2,
            image_url:'../../static/chickenTikka.jpg',
            alt:"reload image"
        }, 
        { 
            id: 3,
            image_url:'../../static/chowmein.jpg',
            alt:"reload image"
        },
        {
            id: 4,
            image_url:'../../static/iceCream.jpg',
            alt:"reload image"
        },
        {
            id: 5,
            image_url:'../../static/golGappay.jpg',
            alt:"reload image"
        }, 
        {
            id: 6,
            image_url:'../../static/pasta.jpg',
            alt:"reload image"
        }, 
      
        {
            id: 7,
            image_url:'../../static/donuts.jpg',
            alt:"reload image"
        }
    ]
</script>
<Images_grid {arrayOfImages} 
             {cols}
             {row_gap}
             {col_gap} />

<Slides {arrayOfImages} />
<!-- <LightBox {arrayOfImages}/> -->


<style>

</style>