<script>
    import Images_grid from './imagesGrid.svelte';
   
    var arrayOfImages = [
        {
            id: 0,
            image_url:'/pizza.jpg',
            alt:"reload image"
        }, 
        {
            id: 1,
            image_url:'/biryani.jpg',
            alt:"reload image"
        }, 
        {
            id: 2,
            image_url:'/chickenTikka.jpg',
            alt:"reload image"
        }, 
        {
            id: 3,
            image_url:'chowmein.jpg',
            alt:"reload image"
        },
        {
            id: 4,
            image_url:'iceCream.jpg',
            alt:"reload image"
        },
        {
            id: 5,
            image_url:'golGappay.jpg',
            alt:"reload image"
        }, 
        {
            id: 6,
            image_url:'pasta.jpg',
            alt:"reload image"
        }, 
      
        {
            id: 7,
            image_url:'donuts.jpg',
            alt:"reload image"
        }
    ]
</script>
<Images_grid {arrayOfImages}/>
<!-- <LightBox {arrayOfImages}/> -->


<style>

</style>