<script>
    export let arrayOfImages;
    export let cols;
    export let row_gap;
    export let col_gap;
    import LightBox from './imageLightbox.svelte';
    let openModal = false;

</script>

<!-- <button on:click="{ () => {openModal = !openModal}}">Click here</button> -->

{#if openModal}
<LightBox {arrayOfImages} on:click="{ () => {openModal = !openModal}}" />
{/if}
<div class="grid-container" style="grid-template-columns: repeat({cols}, auto); row-gap: {row_gap}px; column-gap:{col_gap}px">
 {#each arrayOfImages as gridImg}
 <div class="item">
    <img src={gridImg.image_url} alt={gridImg.alt}  on:click="{ () => {openModal = !openModal} }"/>
 </div>
 {/each}
</div> 



<style>

  

    .grid-container
    {
        display:grid;
        grid-template-columns: auto auto auto;
        row-gap:98px;
        column-gap: 94px;
        margin-top: 4%;
        margin-bottom: 2%;
        background-color:white;
        padding-top:1.5%;
        padding-bottom:1.5%;
    }

    .item
    {
        
    
 
    }

    img
    {
        border-radius: 5px;
        width:300px;
        height:290px;
        object-fit: cover;
    }

    @media screen and (max-width:760px)
    {
        .grid-container
        {
            display:grid;
            grid-template-columns: auto;
            row-gap:10px;
            justify-content:center;
     
        }

        img
        {
            border-radius: 12px;
            /* width:98%;
            height:100%; */
            height:590px;
            object-fit: cover;
            width: 98%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          
        }
    }

    @media screen and (min-width:761px) and (max-width:1020px)
    {
        .grid-container
        {
            display:grid;
            grid-template-columns: auto auto;
            margin-top: 4%;
            row-gap: 10px;
            column-gap: 2px;
           
        }


        img
        {
            width: 98%;
            height: 470px;
            object-fit: cover;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        /* img
        {
            border-radius: 10px;
            width:97.5%;
            height:100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        } */

    }

    @media screen and (min-width:1021px) and (max-width:1100px)
    {
        .grid-container
        {
            column-gap: 70px;
            row-gap: 90px;
          
        }

        img
        {
            width:280px;
            height: 260px;
            display: block;
            margin-left: auto;
            margin-right: auto;

        }

    }

  /*   
    @media screen and (min-width:1045px) and (max-width:1100px)
    {
        .grid-container
        {
            column-gap:30px ;
            row-gap: 40px;
            justify-content:center;
            
        }

        img
        {
            width:220;
            height: 240px;
        }

    }
 */
    @media screen and (min-width:1101px) and (max-width:1188px)
    {

        .grid-container
        {
            column-gap: 80px;
            row-gap: 100px;
          
        }

        img
        {
            width:300px;
            height: 280px;
            display: block;
            margin-left: auto;
            margin-right: auto;

        }
      
    }



    @media screen and (min-width:1189px) and (max-width:1228px)
    {
        .grid-container
        {
            column-gap: 70px;
            row-gap: 85px;
            justify-content:center;
        }

    }

    @media screen and (min-width:1229px)
    {
        .grid-container
        {
            justify-content:center;
        }

    }


</style>