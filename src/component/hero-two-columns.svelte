<script>

    //exporting variables from storybook to link the comp with storybook
    export let h1 = "Simply \n" + "Delicious Food"
    export let p = "Tasty, simple, and halal Pakistani and Indian Cuisine at the most popular restaurants for the cuisine in the Bay Area.";
    export let cta_text = "Order Now";
    export let backgroundColor;
    export let h1_color;
    export let p_color;
    export let cta_text_color;
    export let marginLeft;
   /*  console.log("cta text color " , cta_text_color); */
    let isH1 = true;
    let isImageFirst = false;
    let marginBottom = "0";
    let  ctaUrl = "#";
    /* export let isPrimary = true; */
    
    </script>
    <!-- the container consists of two columns -->
    <div class="hero-1-container" style="margin-bottom: {marginBottom}px">
    <!-- This is Col 1 -->
   <!--  it contains the text -->
    <div class="column-1 {isImageFirst ? 'text-order-second' : 'text-order-first'}" style="background-color:{backgroundColor}">
             <div class="text-container" style="margin-left:{marginLeft}px">
                 {#if isH1}
                    <h1 class="hero-heading" style="color:{h1_color}">{h1}</h1>
                 {/if}
                 {#if !isH1}
                    <h2 class="hero-heading" style="color:{h1_color}">{h1}</h2>
                 {/if}
                
                <p class="hero-para" style="color:{p_color}">{p}</p>
                <a href="{ctaUrl}" class="hero-cta" style="color:{cta_text_color}">{cta_text}</a>
            </div>   
    </div>
    <!-- This is Col 2 -->
    <!-- It contains the hero image -->
    <div class="column-2 {isImageFirst ? 'image-order-first' : 'image-order-second'}"></div>
    
    </div>
    
    
    <style>
    
    
    .image-order-second {
        order: 2;
 
    }
    
    .image-order-first {
        order: 1;  
    }
    
    .text-order-first {
        order: 1;
    }
    
    .text-order-second {
        order: 2;
    }
    
    
    .hero-1-container {
        height: 90vh;
        width: 100%;
        /* background-image: url("/img/hero-banner.jpg"); */
        background-size: cover;
        display: flex;
        
    }
    
    .column-1 {
        background-color:black;
        display: flex;
        align-items: center;
        flex: 0 1 50%;
    
    }
    
    .column-2 {
        background-image: url("../../static/KnC-bg.jpg");
        background-size: cover;
        background-size: 100% 100%;
        flex: 0 1 50%;
        height: 100%;
        background-color: aqua;
    
    }
    
    
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px; 
        width: 60%;
    
    }
    
    .hero-heading {
        color:red;
        max-width: 100%;
    }
    
    .hero-para {
        color:white;
        font-weight: 300;
        line-height: 1.5;
      
    }
    
    .hero-cta {
      width: 250px;
      height: 60px;
      background-color:red;
      color: white;
      border-radius: 5px;
      font-size: 24px;
      z-index: 3;
      display: block;
      /* margin: 0 auto; */
      line-height: 60px;
      text-align: center;
    }
    
 
    
    </style>