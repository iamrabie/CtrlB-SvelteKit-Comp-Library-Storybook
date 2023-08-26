<script>
    import '../styles/overlayGlobal.css'
    export let head3;
    //head3 = 'This is heading 3';
    export let head1;
    //head1 = 'This is the title for the next page';
    export let text_;
    //text_ = 'This is a body of text';
    export let btn;
    //btn = 'THIS IS A BUTTON';

</script>

<div class="Bg">
<div class="blank-block">

</div>
<div class="overlay-text-block">
   <div class="positioning">
     <h3>{head3}</h3>
     <h1>{head1}</h1>
     <p>{text_}</p>
     <button>{btn}</button>
   </div>
</div>
</div>


<style>
  
    .blank-block
    {
        width:50%;
        height:100%;
    }

    .overlay-text-block
    {
        width:50%;
        background-color:rgba(33, 102, 151, 0.81);
        /* position: absolute;
        top:0%;
        bottom:0%;
        right:0% */;
        height:100%;
      
    }

    .positioning
    {
       display: flex;
       flex-direction: column;
       margin-left: 7%;
       margin-top: 11%;
       color:white;
    }

    h3
    {
        font-weight:bold;
        font-size: 28px;
    }

    h1
    {
        font-size: 66px;
        font-weight: lighter;
        width:80%;
        margin-top: -2%;
      
    }

    p
    {
        font-size: 36px;
        margin-top: -5%;
        font-weight: lighter;
    }

    button
    {
        background-color: transparent;
        width:340px;
        font-size: 26px;
        padding-top: 35px;
        padding-bottom: 35px;
        border:white 5px solid;
        color:white;
        margin-top: 3%;
        font-weight: lighter;
    }

    .Bg
    {
        display:flex;
        background-image: url('../../static/RollBanners.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        width:100%;
        height:100vh;
        margin:0px;
        padding:0px;
       /*  position:absolute;
        top:0%;
        left:0%; */

    }

    @media screen and (min-width:350px) and (max-width: 456px){

        
    .overlay-text-block
    {
        width:100%;
        background-color:rgba(33, 102, 151, 0.81);
        position: absolute;
        top:0%;
        bottom:0%;
        right:0%;
        left:0%;
        height:100%;
    }

    h3
    {
        font-size: 20px;
    }

    h1
    {
        font-size: 42px;
        width:90%;
        margin-top:3%;
    }

    p
    {
        font-size: 24px;
        margin-top: 0%;
        font-weight: lighter;
        margin-top: 3%;
    }

    
    button
    {
       
        width:260px;
        font-size: 18px;
        padding-top:25px;
        padding-bottom:25px;
        margin-top: 9%;
    }

    
    .positioning
    {
      margin-left: 12%;
      margin-top: 32%;
    }

    }

    @media screen and (min-width:457px) and (max-width: 700px){

    .overlay-text-block
    {
        width:100%;
        height:100%;
    }

    .blank-block
    {
      width:0%;
    }

    h3
    {
        font-size: 24px;
    }

    h1
    {
        font-size: 48px;
        width:78%;
        margin-top:-1.5%;
    }

    p
    {
        font-size: 28px;
        margin-top: -6%;
        font-weight: lighter;
        margin-top: -1%;
    }

    
    button
    {
       
        width:290px;
        font-size: 20px;
        padding-top:29px;
        padding-bottom:29px;
        margin-top: 6%;
    }

    
    .positioning
    {
       margin-left: 10%;
       margin-top: 16%;
    }

    }

    @media screen and (min-width:701px) and (max-width: 900px){
    
    h3
    {
        font-size: 22px;
    }

    h1
    {
        font-size: 42px;
        width:90%;
        margin-top:0%;
    }

    p
    {
        font-size: 30px;
        margin-top: -6%;
        font-weight: lighter;
        margin-top: 2%;
    }

    
    button
    {
       
        width:277px;
        font-size: 18px;
        padding-top:32px;
        padding-bottom:32px;
        margin-top: 6%;
    }

    
    .positioning
    {
       margin-left:9%;
       margin-top: 22%;
    }



    }

    @media screen and (min-width:901px) and (max-width: 1100px){

    h3
    {
        font-size: 26px;
    }

    h1
    {
        font-size: 56px;
        width:90%;
        margin-top:1%;
    }

    p
    {
        font-size: 36px;
        margin-top: -6%;
        font-weight: lighter;
        margin-top: 2%;
    }

    
    button
    {
       
        width:368px;
        font-size: 20px;
        padding-top:35px;
        padding-bottom:35px;
        margin-top: 3%;
    }

    
    .positioning
    {
       margin-left:9%;
       margin-top: 14%;
    }


    }



</style>
