<script>

import '../styles/luxorGlobal.css';

    export let List_Items1;
    export let List_Items2;
    export let List_Items3;

    export let backgroundStyle;
    console.log('bg style' , backgroundStyle);

    let scrollThreshold = 90;
   

    //import Logo from '/yo.svg';
    //vanila js
    /* window.onmousemove(e) = function()
    {
        console.log(e.pageY);
    } */
    
  /**
* @type {number}
*/
  let y;
  let display = false;
  /**
* @param {{ pageY: number; }} e
*/
  function OnMouseMove(e)
  {
    y = e.pageY;
    console.log(y);
  }

console.log("list items are" , List_Items1);
</script>
<svelte:window on:mousemove={OnMouseMove}/>
<!-- style={ y > scrollThreshold ? `background-color: ${backgroundStyle} `: ""} -->
<div class="div-flex">
<nav class={ y > scrollThreshold ? 'nav-after-scroll' : 'nav-before-scroll'} style={ y > scrollThreshold ? backgroundStyle : ""}>
<img src="src/Luxor-Logo.png" alt="not loading" class="image"/>
<ul class="{display ? 'ul-block': 'ul-none'}">

    {#each List_Items1 as items }
      <li> <a href=“{items.href}“> {items.title} </a></li>
    {/each}

    {#each List_Items2 as itemss }
      <li id="img">
         <a href=“{itemss.href}“ class="logo Logo2"> <img id="img-li" src={itemss.src} alt={itemss.alt} /> </a>
      </li>
    {/each}

    {#each List_Items3 as itemsss }
      <li> <a href=“{itemsss.href}“> {itemsss.title} </a></li>
    {/each}
   <!--  <li>
        <a href="www.facebook.com">Home</a>
    </li>
    <li>
        <a href="www.facebook.com">About</a>
    </li>
    <li id="img">
        <a href="www.facebook.com" class="logo Logo2"><img src="src/Luxor-Logo.png" alt="not loading" id="img-li"/></a>
    </li>
    <li>
        <a href="www.facebook.com">Contact</a>
    </li>
    <li>
        <a href="www.facebook.com">Gallery</a>
    </li> -->
</ul>

<button>Contact Us</button>
<div class="Divv" on:click="{ () => display = !display }">
    <hr>
    <hr>
    <hr>
</div>



</nav>
</div>



<style>
    .nav-before-scroll
    {
        background-color:transparent;
        width: 100%;
        position:sticky;
        height:16vh;
        display:flex;
        
    }

    .nav-after-scroll
    {
        background-color:navy;
        width: 100%;
        position:sticky;
        height:16vh;
        border-bottom: white 2px solid;
        
    }

    nav ul
    {
        
        list-style-type: none;
        width:50%;
        height:10vh;
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      
    } 


    nav ul li
    {
        display: inline-block;
        height:6vh;
        width:130px;
        margin-top: 15px;
    }
    

    nav ul li a
    {
       text-decoration:none;
       color:white;
       font-size: 18px;
       font-weight: bold;
    }

    .logo img {
    margin-top:17px;
    display: block;
    width:145px;
    height:6vh;
    object-fit:cover;
    margin-left: auto;
    margin-right: auto;
    }

    button
    {
        background-color: transparent;
        width:140px;
        font-size: 16px;
        margin-right: 2%;
        height:7vh;
        margin-top:30px;
        border:white 2px solid;
        color:white;
    }
    
    hr{
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
    }

    .Divv
    {
        display: none;
    }

    .image
    {
        display: none;
    }

    #img-li
    {
        margin-top: 12px;
    }

  
    @media screen and (min-width:150px) and (max-width: 529px){

    nav
    {
        height: 11vh;
    }
    nav ul
    {
        display:none;
    
    }

    button
    {
        display:none;
    }

    .Divv
    {
        display:block;
        margin-top: 45px;
        position:absolute;
        left:80%;
        cursor: pointer;
    }


    hr{
        width: 18px;
        height: 1px;
        background-color: white;
        border:white 1px solid;
        margin: 2px 0;
        border-radius: 2px;
    }

    .ul-block
    {
        display: block;
        margin-top:83px;
        width:100%;
        height:35vh;
        background-color: white;
        padding-inline-start: 0px;
    }

    .ul-none
    {
        display:none;
    }

    nav ul li
    {
        width:100%;
        padding-top: 20px;
        margin-top: 0px;

    }

    nav ul li:hover
    {
        background-color:#525252;
        transition: 0.5s;
    }

    nav ul li a
    {
        font-size: 12px;
        color:black;
    }

    #img
    {
        display: none;

    }

    .nav-before-scroll
    {
        background-color:transparent;
        width: 100%;
        position:sticky;
        height:11vh;
        border-bottom: 0px;
    }

    .image
    {
        display: block;
        width: 160px;
        position: absolute;
        left:5%;
        top:28%;
        height: 7vh;
    }



   
}

@media screen and (min-width:529px) and (max-width: 750px)
{

    button
    {
        display:none;
    }

    nav ul li a
    {
        font-size:14px;
    }

    nav ul
    {
        padding-inline-start:0px;
        width:100%;
        margin-block-end:0px;
        left:0%;

    }

    nav ul li
    {
        height:6vh;
        width:90px;
    }



    #img-li
    {
        width:120px;
        height:5vh;
        margin-top: 16px;
    }

    #img
    {
        width:140px;
    }

}

@media screen and (min-width:751px) and (max-width: 1000px)
{

    button
    {
        display:block;
        margin-top: 30px;

    }

    nav ul li a
    {
        font-size:16px;
    }

    nav ul
    {
        padding-inline-start:0px;
        width:100%;
        margin-block-end:0px;
        left:0%;

    }

    nav ul li
    {
        height:6vh;
        width:105px;
    }



    #img-li
    {
        width:140px;
        height:6vh;
    }

    #img
    {
        width:140px;
    }

}

@media screen and (min-width:1001px) and (max-width: 1337px)
{

    button
    {
        display:block;
        margin-top: 30px;

    }

    nav ul li a
    {
        font-size:18px;
    }

    nav ul
    {
        padding-inline-start:0px;
        width:100%;
        margin-block-end:0px;
        left:0%;

    }

    nav ul li
    {
        height:6vh;
        width:130px;
        padding-top: 5px;
    }



    #img-li
    {
        width:150px;
        height:7vh;
        margin-top: 10px;
       
    }

    #img
    {
        width:150px;

    }

}



</style>
