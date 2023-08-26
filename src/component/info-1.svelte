<script>

    //storybook variables linking the comp with storybook 
    export let backgroundColor;
    export let info_heading_color;
    export let info_para_color;
    export let info_cta_text_color;
    //initializing the variables
    export let info_heading ="So much more than just a cafe";
    export let info_para = "Kettle'e was started by the talented team of foodies at Kabab & Curry to expand their culinary horizons with medleys of different cuisines along with Indian and Pakistani food. Set in a picturesque setting, the cafe has become a mainstay in the Santa Clara area and has grown a unique fan following.";
    export let info_cta_text = "About Us";

    let  infoCtaUrl = "#";
    //const infoImageUrl;
    </script>
    
   <!--  info container which is the main container -->
    <div class="info-container" style="background-color:{backgroundColor}">
       <!--  image container -->
        <div class="img-container">
            <img src="../../static/logo.png" alt="" class="info-img">
        </div>
       <!--  info text container -->
        <div class="info-text-container">
            <h2 class="info-heading" style="color:{info_heading_color}">{info_heading}</h2>
            <p class="info-para"  style="color:{info_para_color}">{info_para}</p>
            <a href="{infoCtaUrl}" class="info-cta btn-style"  style="color:{info_cta_text_color}">{info_cta_text}</a>
        </div>
    </div>
   <!--  info div ends here -->
    
    <style>
    
    .info-container {
        display: flex;
        justify-content: center;
        width: 100%;
        background:maroon;
        padding: 50px 0;
    
    }
    
    .img-container {
        display: flex;
        justify-content: left;
        width: 40%;
    }
  /*   
    .info-img {
        // width: 400px;
        // height: 400px;
    } */
    
    .info-text-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .info-heading {
        color:#deb128;
    }
    
    .info-para {
        margin: 50px 0;
        color:white;
    }

    .info-cta
    {
        color:#deb128;
    }
    
    
    
    
    </style>