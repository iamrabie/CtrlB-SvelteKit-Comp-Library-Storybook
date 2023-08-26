<script>
    import RectangularButton from "./rect-button.svelte";
    
    //variables exported from storybook to get the comp in storybook and comp is interactive and functional in the storybook.

    //giving variables default text
    export let title = 'Storybook';
    export let title_color;
     //giving variables default text
    export let subheading = 'Using storybook is fun!';
    export let subheading_color;
    export let button_text;
    let buttonText = button_text;
    let buttonUrl;
    export let backgroundColor;
    export let button_bg_color;
    let btn_bg = button_bg_color;
    export let height;
    export let button_text_color;
    let btn_txt_color = button_text_color;
    
    </script>
    
    <!-- Main Container -->
    <div class="hero-container" style="background-color:{backgroundColor}; height:{height}vh">
        <!-- text within the container -->
        <h1 class="hero-heading" style="color:{title_color}">{title}</h1>
        <p class="hero-subtext" style="color:{subheading_color}">{subheading}</p>
        <!-- imported RectangularButton com here to show button in our hero half comp -->
        <RectangularButton 
        {btn_bg}
        {buttonText}
        {buttonUrl}
        {btn_txt_color}/>
    
    </div>
    
    <style>

    
    .hero-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color:#d75656;
        width: 100%;
        height: 50vh;
        margin-bottom: 100px;
    }
    
    .hero-heading {
            color:#d2bc7b;
    }

    .hero-subtext
    {
        color:antiquewhite;
    }
    
    </style>