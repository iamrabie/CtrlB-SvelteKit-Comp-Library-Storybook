<script>
  /*   rectangular button comp imported */
    import RectangularButton from "./rect-button.svelte";
    

       //exporting variables from storybook to organize the comp in storybook
        export let btn1_text;
        export let buttonUrl;
        export let BgStyle;
        export let btn1_bg;
        //variable set with dynamic value
        export let button1_text = 'this is a simple button';
        //console.log("button comp bg color" , BgStyle);
        //console.log(" in only button svelte file " , btn1_bg);

    </script>
    
   <!--  Main div with text and a button -->
   <!-- adding bg color dynamically to the banner --> 
    <div class="banner" style={BgStyle}>

       <!--  passing values dynamically to the button -->
        <RectangularButton 
            buttonText = {button1_text}
            {buttonUrl}    
            btn_bg = {btn1_bg}
            btn_text = {btn1_text} />
    </div>
    <!--   banner ends here-->


    <style>
  /*   @import './public/scss/theme.scss';
    @import './public/scss/breakpoints.scss';
     */
    .banner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray; 
        height: 18vh;
    }
    </style>