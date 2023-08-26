<script>
    import OnlyButton from '../component/onlybutton.svelte';
    import ParagraphButton from '../component/para-button.svelte';

    export let backgroundColor;
    //console.log('background color' , backgroundColor);
    let BgStyle = backgroundColor ? `background-color: ${backgroundColor}` : '';
    console.log('bG' , BgStyle);

    export let button1_text;
    export let button2_text;
    export let paragraph;
    export let button1_background_color;
    //console.log("in banner svelte" , button1_background_color);
    //let btn1_bg = button1_background_color ? `background-color : ${button1_background_color}` : '';
    let btn1_bg = button1_background_color;

    export let button2_background_color;
    //let btn2_bg = button2_background_color ? `background-color : ${button2_background_color}` : '';
    let btn2_bg = button2_background_color;

    export let button1_text_color;
    //let btn1_text = button1_text_color ? `color : ${button1_text_color}` : '' ;
    let btn1_text = button1_text_color;

    export let button2_text_color;
    //let btn2_text = button2_text_color ? `color : ${button2_text_color}` : '';
    let btn2_text = button2_text_color;


  
</script>

<OnlyButton  {BgStyle}
             {button1_text}
             {btn1_bg}
             {btn1_text} />

<ParagraphButton {button2_text}
                 {paragraph}
                 {btn2_bg}
                 {btn2_text} />