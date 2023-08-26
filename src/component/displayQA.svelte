<script>
    //getting questions ans answers from faq-comp
    export let question;
    export let answer;
    let display = false;
    //exported from storybook for getting this comp work there
    export let BackgroundStyle;
    console.log("bggg" , BackgroundStyle);
</script>
            
                <!-- whats happening here is that initially the value of display variable is set to false but
                as soon as we click the question, value of display will be changed to true and once the value of display
                becomes true, the arrow sign next to the question will  be rotated. -->
                <p class="faqQues divQues {display ? 'toggle' : ''}" on:click={ () => display = !display } style={BackgroundStyle}>{question}</p>
              

               <!--  as i mentioned above that the value of display is false initially, so here the class placed in 'else'
                will be working which says that answers are display:block. When question is clicked, display comes true which will
                then allow the 'faqAns2' class to come in action resulting in the answers to be shown. ( display : block ) -->
             
                <p  class="divAns {display ? 'faqAns2' : 'faqAns'}">{answer}</p>
             

<style>
    .faqQues 
    {
        font-size: 14px;
        padding-left: 25px; 
        display: flex;
        cursor: pointer;
      
    }

    .faqQues:after 
    {
        margin-left: auto;
        content: "❯";
        width: 1em;
        height: 1em;
        transition: all 0.35s;
        color:black;
        text-align: center;
        margin-right: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .toggle::after
    {
      transform: rotate(90deg);
    }

    .faqAns
    {
        font-size: 14px;
        padding-left: 25px;
        padding-bottom:0px ;
        padding-right: 15px;
        text-align: justify;
        display:none;
       
    }

    .faqAns2
    {
        font-size: 14px;
        padding-left: 25px;
        padding-right: 25px;
        text-align: justify;
        display:block;
        font-weight: lighter;
        padding-top: 2px;
    }

    p
    {
        margin-block-start:0;
        margin-block-end: 0;
    }

    .divQues
    {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .divAns
    {
        padding-top: 1em;
        padding-bottom: 1em;

    }


    @media screen and (max-width:555px)
    {
        .faqQues, .faqAns2
        {
            font-size: 12px;
        }

        
    }

    @media screen and (min-width:556px) and (max-width:650px)
    {
        .faqQues, .faqAns2
        {
            font-size: 12px;
        }

        
    }

    @media screen and (min-width:651px) and (max-width:800px)
    {
        .faqQues, .faqAns2
        {
            font-size: 13px;
        }

        
    }

 

</style>