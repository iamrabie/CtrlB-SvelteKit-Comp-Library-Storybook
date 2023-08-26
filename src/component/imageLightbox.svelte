<script>
    import { slide } from "svelte/transition";
    import Slides from './imagesSlideshow.svelte';
    import { fade , fly } from 'svelte/transition';
    
   
   export let arrayOfImages;
   console.log( ' images array' , arrayOfImages);

   let totalSlides = arrayOfImages.length;
   let imageShowIndex = 0;
   let display = false;
   console.log("display 1 " , display );

   function prevSlides()
   {
    if (imageShowIndex === 0)
    {
       imageShowIndex = arrayOfImages.length - 1;
    }
    else
    {
        imageShowIndex -= 1;
    }
   
   }


   function nextSlides()
   {
    if (imageShowIndex === arrayOfImages.length - 1)
    {
        imageShowIndex = 0;
    }
    else
    {
        imageShowIndex += 1;
    }
   }

   /* let display = false; */
</script>
 
<section class="lightbox" in:fly={{ y : -300 }} out:fade>
    <span class="close cursor" on:click>&#10007</span>
   <div class="container">
   {#each arrayOfImages as imgs}
    <Slides src={imgs.image_url} 
            alt={imgs.alt} 
            imageShowing={imgs.id === imageShowIndex}
            {totalSlides} 
            slideNo={imgs.id} />
   {/each}

   </div>


    <!-- next and previous buttons -->
    <a href="#" class="prev" on:click="{prevSlides}">&#10094;</a>
    <a href="#" class="next" on:click="{nextSlides}">&#10095;</a>

</section>
    




<style lang="scss">

   


    .prev, .next
    {
        cursor:pointer;
        position:absolute;
        top:50%;
        width:auto;
        padding:16px;
        margin-top: -50px;
        color:white;
        font-weight:bold;
        font-size: 20px;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;
        text-decoration: none;
    }

    .next
    {
        right:4%;
        border-radius: 3px 0 0 3px;
    }

    .prev
    {
        left:4%;
    }

    
    .lightbox
    {
        position:fixed;
        z-index:1;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:auto;
        background-color:rgba( 0, 0, 0, 0.8);
        
        justify-content: center;
        align-content: center;
    }

    .close
    {
        color:#ddd;
        position:absolute;
        top:3%;
        right:3%;
        font-size: 1.5rem;
        font-weight: 200;

    }

    .close:hover
    {
        color:#999;
        text-decoration: none;
        cursor:pointer;
    }

    @media screen and (min-width:300px) and (max-width:372px)
    {

      .prev , .next
      {
        top:49%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }


    @media screen and (min-width:373px) and (max-width:400px)
    {

      .prev , .next
      {
        top:50%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:401px) and (max-width:450px)
    {

      .prev , .next
      {
        top:53%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:451px) and (max-width:500px)
    {

      .prev , .next
      {
        top:57%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:501px) and (max-width:630px)
    {

      .prev , .next
      {
        top:50%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:631px) and (max-width:715px)
    {

      .prev , .next
      {
        top:48%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 16px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:716px) and (max-width:800px)
    {

      .prev , .next
      {
        top:51%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 18px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:801px) and (max-width:900px)
    {

      .prev , .next
      {
        top:53%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 19px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }

    @media screen and (min-width:901px) and (max-width:1050px)
    {

      .prev , .next
      {
        top:55%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 19px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }


    
    @media screen and (min-width:1051px) and (max-width:1150px)
    {

      .prev , .next
      {
        top:60%;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 19px;

      }

      .next
       {
        right:0%;
        padding-left: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 12px;
      }

    .prev
    {
       left:0%;
       padding-left: 12px;
       padding-top: 8px;
       padding-bottom: 8px;
       padding-right: 10px;
    }
    
    }





</style>