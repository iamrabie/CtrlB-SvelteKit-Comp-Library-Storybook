<script>
    import RectangularButton from "./rect-button.svelte";
    
        //linking the comp with the storybook using these variables
        export let btn2_bg;
        export let btn2_text;
        export let buttonUrl;
        //here the value of these variables is set by default
        export let button2_text = 'this is a para button';
        export let paragraph  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    </script>
    
   <!--  main banner div -->
  <!--  two cntainers within the banner div -->
    <div class="banner">
 
       <!--  text container -->
        <div class="text-container">
        <p class="paragraph">{paragraph}</p>
        </div>

       <!--  and the button container -->
        <div class="button-container">
        <!-- rectangular button imported -->
        <RectangularButton 
            buttonText = {button2_text}
            {buttonUrl} 
            btn_bg = {btn2_bg} 
            btn_text = {btn2_text}/>
        </div>

    </div>
   <!--  banner div ends here -->

   
    <style>
  /*   @import './public/scss/theme.scss';
    @import './public/scss/breakpoints.scss'; */
    
    .banner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:dark-grey;
        height: 25vh;
    }
    
    .text-container {
        flex: 0 1 50%;
    }
    
    .button-container {
        flex: 0 1 20%;
        margin-left: 60px;
    }
    
    .paragraph {
        color: black;
        margin-bottom: 0;
    }
    
    </style>