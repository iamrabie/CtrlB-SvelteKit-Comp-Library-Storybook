<script>
    import ArrowIconButton from "./arrow-icon-button.svelte";
    //variables exported from storybook to get the comp in storybook and comp is interactive and functional in the storybook.
    export let marginLeft;
    export let backgroundColor;
    export let arrow_color;
    export let button_text_color;
    export let info_heading_color;
    export let tiny_top_text_color;
    export let info_para_color;
    export let button_text;
    //giving variables default text
    export let tiny_top_text = 'tiny top text';
    export let info_para = 'info paragraph begins here';
    export let info_heading = 'info heading';

    let buttonText = button_text;
    let btn_text_color = button_text_color;
    let buttonUrl;
    let arrowColor = arrow_color;
    let imgUrl='../../static/logo.png';
    let imgAlt;
    </script>
    
    <!--  Main container which comprises of two sub containers -->
    <div class="info-container" style="background-color:{backgroundColor}">
        <!--  container 1 is the image container that is holding a image -->
        <div class="img-container">
            <img src="{imgUrl}" alt="{imgAlt}" class="info-img">
        </div>
    <!--     container 1 ends here -->

        <!-- container 2 consists of text in the form of headings and paragraphs -->
         <div class="info-text-container"  style="margin-left:{marginLeft}px">
                <p class="tiny-text" style="color:{tiny_top_text_color}">{tiny_top_text}</p>
                <h2 class="info-heading" style="color:{info_heading_color}">{info_heading}</h2>
                <p class="info-para" style="color:{info_para_color}">{info_para}</p>
               <!--  arrow button added by importing arrow buton comp and adding text , color and 
                bg color to the button dynamically -->
                <ArrowIconButton 
                    {buttonText}
                    {btn_text_color}
                    {arrowColor}/>
        </div>
       <!--  container 2 ends here -->
    </div>
    
    <style>
  
    
    .info-container {
        display: flex;
        justify-content: center;
        width: 100%;
        background:#480832;
        padding: 50px 0;
        height:50vh;
    
    }
    
    .img-container {
        display: flex;
        justify-content: left;
        width: 30%;
        
    }

 /*    .info-img {
        // width: 400px;
        // height: 400px;
    }
     */
    .info-text-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
       
    }
    
    .tiny-text {
        color:white;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .info-heading {
        color:white;
    }
    
    .info-para {
        margin: 50px 0;
        color:white;
    
          
    }
    
    
    
    
    </style>