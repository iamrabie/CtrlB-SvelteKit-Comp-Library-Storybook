<script>

    //variables exported from storybook to get the comp in storybook and comp is interactive and functional in the storybook.

    //giving variables default text
    export let h1 = "Bakery. Breakfast. Lunch. Perfection.";
    export let p = "Reinvented Pakistani and Indian flavors in a beautiful ambiance.";
    export let cta_text = "Order Now";
    export let h1_color;
    export let p_color;
    export let cta_text_color;
    let ctaUrl = "#"
    export let background_img_size;
    export let height;
    
    let backgroundImageUrl;
    </script>
    <!-- This is the main container which have a backgrond image -->
    <div class="hero-1-container"  style="background-image:url(../../static/heroBanner.jpg);  background-size:{background_img_size}; height:{height}vh" >
        <!-- This is the text within the container (shows like text is written on the images) -->
        <div class="text-container">
        <h1 class="hero-heading" style="color:{h1_color}">{h1}</h1>
        <p class="hero-para" style="color:{p_color}">{p}</p>
        <a href="{ctaUrl}" class="hero-cta" style="color:{cta_text_color}">{cta_text}</a>
        </div>
    </div>
    
    
    <style>
    
    
    .hero-1-container {
        height: 100vh;
        width: 100%;
       /*  background-image: url("../../static/heroBanner.jpg"); */
        background-size:initial;
        display: flex;
        align-items: center;
        filter: brightness(90%);
        
    }
    
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
       /*  margin-left: $body-left-margin; */
    
      
    
    
    }
    
    .hero-heading {
        color:black;
        max-width: 60%;
    
    }
    
    .hero-para {
        color: black;
     
    }
    
    .hero-cta {
      width: 250px;
      height: 60px;
      background-color:green;
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