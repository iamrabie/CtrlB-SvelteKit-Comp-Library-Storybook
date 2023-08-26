<script>
    import ArrowIconButton from "./arrow-icon-button.svelte";
    
    //variables exported from storybook to get the comp in storybook and comp is interactive and functional in the storybook.
    export let button_text;
    export let backgroundColor;
    //giving variables default text
    export let info_Heading ='info Card';
    export let tiny_Top_Text ='information start here';
    export let info_para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
   
    let buttonText = button_text;
    let buttonUrl ='/';
    let imgUrl = '../../static/logo.png';
    let imgAlt = 'img';
    </script>
   <!--  Main container which comprises of two sub containers -->
    <div class="info-container" style="background-color:{backgroundColor}">
       <!--  container 1 is the image container that is holding a image -->
        <div class="img-container">
            <img src="{imgUrl}" alt="{imgAlt}" class="info-img">
        </div>
       <!--  container 1 ends here -->

       <!-- container 2 consists of text in the form of headings and paragraphs -->
        <div class="info-text-container">
                <p class="tiny-text">{tiny_Top_Text}</p>
                <h2 class="info-heading">{info_Heading}</h2>
                <p class="info-para">{info_para}</p>
               <!--  Arrow button comp used here  and values are passed to it dynamically-->
                <ArrowIconButton 
                    {buttonText}
                    {buttonUrl}/>
        </div>
       <!--  container 2 ends here -->
    </div>
  <!--   main container ends here -->
    
    <style>
    
    .info-container {
        display: flex;
        justify-content: center;
        width: 100%;
        background:palegreen;
        padding: 50px 0;
    
    }
    
  
    
    
    .img-container {
        display: flex;
        justify-content: left;
        width: 40%;

    }
    .info-img {
        width: 400px;
        height: 400px;
    }
    
    .info-text-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
       
    }
    
    .tiny-text {
        color: green;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .info-heading {
        color: maroon;
    }
    
    .info-para {
        margin: 50px 0;
    
           
    }
    
    
    
    
    </style>