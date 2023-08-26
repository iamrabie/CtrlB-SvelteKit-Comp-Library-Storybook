<script>
    import Ques from '../component/displayQA.svelte';

    //this comp is used in the parent comp so that array of questions ans answers can be accessed.
    export let array;

   /*  console.log("array iss" , array); */

    //variable exported from the storybook to get connected with component
    export let BgStyle;
    //console.log('bg color for question' , BgStyle);

    let BackgroundStyle = BgStyle;

</script>

<div class="section">
    <h1>FAQS</h1>
    <div class="flex">

        <div class="common-ques">
           <p class="common-ques-text">
              Most Common Questions
           </p>
        </div>

        <div class="QA-Block">
        <div class="faqBlock">
            {#each array as arrayItem}
              {#each arrayItem.questionList as ques}
              <hr>
              <!-- using the imported comp here so that the questions and answers can be passed to it -->
              <Ques question={ques.question} answer={ques.answer} {BackgroundStyle}/>
              {/each}
              {/each}
              <hr>
        </div>
        </div>

    </div>
</div>

<style>
  
    .flex
    {
        display:flex;
    }

    .common-ques
    {
        width:35%;
        margin-top: 3%;
    }

    .QA-Block
    {
        width:65%;
        margin-top: 3%;
    }

    .faqBlock
    {
        width:600px;
    }

    .section
    {
        margin:0;
        padding:0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    h1
    {
        text-align: center;
        margin-top: 0%;
        font-size:40px;
    }

 
    .common-ques-text
    {
        font-size: 22px;
        float:right;
        margin-top:5.5%;
        padding-right: 15px;
        color:blue;
    }

    hr{
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: auto;
        margin-inline-end: auto;
    }
 

    @media screen and (max-width:555px)
    {
        .flex
        {
            display:flex;
            flex-direction:column;
        }

        .common-ques
        {
            width: 100%;
        }

        .QA-Block
        {
            width:100%;
        }

        .common-ques-text
        {
         font-size:20px;
         float:none;
         text-align:center ;
        }

        .faqBlock
        {
            width:350px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width:556px) and (max-width:650px)
    {
        

        .QA-Block
        {
         font-size:16px;
         padding-right: 0px;
        }

        .faqBlock
        {
            width:320px;
            margin-left: auto;
            margin-right: auto;
        }

        

    }

    @media screen and (min-width:651px) and (max-width:800px)
    {
        

        .common-ques-text
        {
         font-size:17px;
        }

        .faqBlock
        {
            width:400px;
         
        }

        

    }

    @media screen and (min-width:801px) and (max-width:900px)
    {
        

        .common-ques-text
        {
         font-size:18px;
        }

        .faqBlock
        {
            width:460px;
         
        }

        

    }

    @media screen and (min-width:901px) and (max-width:1000px)
    {
        

        .common-ques-text
        {
         font-size:20px;
        }

        .faqBlock
        {
            width:540px;
         
        }

        

    }




</style>