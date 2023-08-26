<script>
    export let src;
    export let alt;
    export let imageShowing;
    export let slideNo;
    export let totalSlides;
  

</script>


<div class="mySlides" class:show={imageShowing}>
    <span class="numberText">{slideNo + 1}/{totalSlides}</span>
   <!--  <div class="numberText">1/6</div> -->
    <img src={src} alt="{alt}"/>
</div>

<style>

    .mySlides
    {
        display:none;
        
    }

    img
    {
        width:50%;
        display: block;
        margin-left: auto;
        margin-right: auto;

    }

    .show
    {
        margin-top: 7%;
        display: block;
      
    }

     
    .numberText
    {
        color : #f2f2f2;
        font-size: 14px;
        padding:8px 12px;
        position:absolute;
        top:2.5%;
        left:1%;
    }

    @media screen and (min-width:300px) and (max-width:420px)
    {

        img
        {
            width:100%;
            height:100%;
            margin-top: 50%;

        }

    }

    @media screen and (min-width:421px) and (max-width:500px)
    {

        img
        {
            width:100%;
            height:100%;
            margin-top: 45%;

        }

    }

    @media screen and (min-width:501px) and (max-width:570px)
    {

        img
        {
            width:90%;
            height:100%;
            margin-top: 30%;

        }

    }

    @media screen and (min-width:570px) and (max-width:630px)
    {

        img
        {
            width:80%;
            height:100%;
            margin-top: 23.5%;

        }

    }

    @media screen and (min-width:631px) and (max-width:800px)
    {

        img
        {
            width:75%;
            height:100%;
            margin-top: 18%;

        }

    }

    @media screen and (min-width:801px) and (max-width:900px)
    {

        img
        {
            width:70%;
            height:100%;
            margin-top: 14.5%;

        }

    }
    @media screen and (min-width:901px) and (max-width:1150px)
    {

        img
        {
            width:65%;
            height:100%;
            margin-top: 11%;

        }

    }
 
 

</style>