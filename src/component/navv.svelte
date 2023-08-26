<script>

    import '../styles/luxorGlobal.css';
    import {slide , fly} from 'svelte/transition';
       
        export let navbarLeftMenuItems;
        export let navbarRightMenuItems;
        export let menu_icon_color;
        export let BgStyle;
        export let list_item_color;
    
        export let backgroundStyle;
        console.log('bg style' , backgroundStyle);

        let display_product_menu_items = false;
        console.log("value" , display_product_menu_items);

        let display_learn_menu_items = false;
    
        let scrollThreshold = 100;

        let hover = false;
       
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
      /* function OnMouseMove(e)
      {
        y = e.pageY;
        console.log(y);
      }
 */
      function displayMenuItems(title)
      {
        if ( title === 'Products' )
        {
            display_product_menu_items = !display_product_menu_items;
            console.log("new value" , display_product_menu_items);
        }

        if ( title === 'Learn' )
        {
            display_learn_menu_items = !display_learn_menu_items;
            console.log("new value" , display_learn_menu_items);
        }
      }


    
    </script>
    <svelte:window bind:scrollY={y}/>
    <!-- style={ y > scrollThreshold ? `background-color: ${backgroundStyle} `: ""} -->
    <div class="div-flex">
    <nav class={ y > scrollThreshold ? 'nav-after-scroll' : 'nav-before-scroll'}  style={ y > scrollThreshold ? backgroundStyle : ""}>
    <img src="../../static/luxor.svg" alt="not loading" class="image"/>
    <ul class="{display ? 'ul-block': 'ul-none'}">
    
        {#each navbarLeftMenuItems as items, i }
          <li class="left-list"> <a href=“{items.href}“ class='list' style="color:{list_item_color}" on:click|preventDefault="{ displayMenuItems(items.title) }"> {items.title} 
            {#if (i % 2 != 0 && display_product_menu_items == true)}
            <!-- {#if items.title === 'Products'} -->
            <ul class="display-list left-list-height">
                <li class="display-list-item">Stones
                <li class="display-list-item">Sinks & Faucets
                <li class="display-list-item">Edge Profiles
            </ul>

            {:else if (i % 2 != 0 && display_product_menu_items == false)}
            <ul class="display-list display-none left-list-height">
                <li class="display-list-item">Stones
                <li class="display-list-item">Sinks & Faucets
                <li class="display-list-item">Edge Profiles
            </ul>
            {/if}
            
          </a></li>
        {/each} 
    
        <a href=“#“  id="img"> <img id="img-li" src='../../static/luxor.svg' alt='luxor logo' /> </a>
    
        {#each navbarRightMenuItems as itemsss, i}
          <li class="right-list"><a href=“{itemsss.href}“ class='list' style="color:{list_item_color}" on:click|preventDefault="{ displayMenuItems(itemsss.title) }"> {itemsss.title}
           {#if i == 0 && display_learn_menu_items == true}
           <ul class="display-list right-list-height">
                <li class="display-list-item">About US
                <li class="display-list-item">Our Process
                <li class="display-list-item">Work witth us
                <li class="display-list-item">Innovation
                <li class="display-list-item">Sustainability
                <li class="display-list-item">FAQS
           </ul>
           {:else if (i == 0 && display_learn_menu_items == false)}
           <ul class="display-list display-none right-list-height">
                <li class="display-list-item">About US
                <li class="display-list-item">Our Process
                <li class="display-list-item">Work witth us
                <li class="display-list-item">Innovation
                <li class="display-list-item">Sustainability
                <li class="display-list-item">FAQS
            </ul>
          
           {/if}
           </a></li>
        {/each}
    
    </ul>
    
    <button>Get a Quote</button>
    <div class="Divv" on:click="{ () => display = !display }" style="background-color:{BgStyle}">
        <hr style="background-color:{menu_icon_color}">
        <hr style="background-color:{menu_icon_color}">
        <hr style="background-color:{menu_icon_color}">
    </div>
    
    
    
    </nav>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    




                 <!--   Styles -->
            <!--  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

    <style lang="scss">
        @import '../styles/theme.scss';
        @import '../styles/breakpoints.scss';
        .nav-before-scroll
        {
            width: 100%;
            position:fixed;
            height:16vh;
            display:flex;
            top:0px;
            
        }
    
        .nav-after-scroll
        {
            background-color:#050839;
            width: 100%;
            position:fixed;
            top:0px;
            height:16vh;
            border-bottom:white 2px solid;
            display:flex;
            
        }
    
        nav 
        {
            transition:background-color .6s ease !important;
        }
        ul
        { 
            list-style-type: none;
            height:16vh;
            margin-top:0;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            align-items: center;
            padding-inline-start:0px;

            
        }

        li
            {
             
            width:110px;  
            text-align: center;
            height:5vh;
            padding-top:17px;
               
            }
    
        a
        {
            text-decoration:none;
            color:white;
             font-weight: bold;
        }
        
        
        button
        {
            background-color: transparent;
            width:120px;
            margin-top:52px;
            border:white 1px solid;
            color:white;
            position: absolute;
            right: 1%;
            font-size: 15px;
            font-weight:bold;
            padding-top:12px;
            padding-bottom: 12px;
        }

        button:hover
        {
            background-color:white;
            transition: 0.6s;
            color:rgba(6,147,227,1);
        }
   

        #img-li
        {
            
            width:160px;
            object-fit:cover;
            padding-left:12px; 
                
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

        .display-list
        {
            display: none;
        }


     /*    .bg
        {
            background-color: aqua;
        } */

        p
        {
            margin-top: 9%;
        }

    
     
                                             /*     CSS MEDIA QUERIES */
                /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
        @media screen and (min-width:360px) and (max-width: 399px){
            
            button
            {
            display:none;
            }

            .Divv
            {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:10%;
            cursor: pointer;
            }


            hr{
            width: 18px;
            height: 1px;
            background-color:white;
            border:white 1px solid;
            margin: 2px 0;
            border-radius: 2px;
            }

            

            .ul-none
            {
            display:none;
            }

          

            nav ul li:hover
            {
            background-color:#525252;
            transition: 0.5s;
            }

            nav ul li a
            {
            
            color:black;
           
            }

            #img
            {
            display: none;

            }

            .image
            {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;/* 
            height: 9vh; */
    
           

            }
            
            .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:26%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
                
            }

            .display-none
            {
                display: none;
            }

            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top: 14px;
            height:fit-content;
            

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 11px;

            } 
        

            .left-list-height, .right-list-height
            {
                /*  height:17.5vh; */
                height: fit-content;
            }

            


            
            .left-list, .right-list
            {
              text-align: center;
            }

          
           

          

        }

        @media screen and (min-width:400px) and (max-width: 459px)
        {
        
        button
        {
            display:none;
        }

        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:10%;
            cursor: pointer;
        }


        hr
        {
            width: 18px;
            height: 1px;
            background-color: white;
            border:white 1px solid;
            margin: 2px 0;
            border-radius: 2px;
        }

     
        .ul-none
        {
            display:none;
        }

     

        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }

        nav ul li a
        {
            color:black;
        }

        #img
        {
            display: none;

        }

        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;

        }

        .left-list, .right-list
        {
            text-align: center;
        }

            
        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:24%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
                margin-top: 0px;
            }

            .display-none
            {
                display: none;
            }


            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top:14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 11px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
            }

  

    }
    
   
    @media screen and (min-width:460px) and (max-width: 529px){
  
       button
        {
            display:none;
        }
    
        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:10%;
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
    
    
        .ul-none
        {
            display:none;
        }
    
        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }
    
        nav ul li a
        {
            color:black;
        }
    
        #img
        {
            display: none;
    
        }
    
        
        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;
            height: 9vh;
          
        }

        .left-list, .right-list
        {
            text-align: center;
        }

               
        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:20%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
            }

            .display-none
            {
                display: none;
            }


            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top:14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 12px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
            }

        



  
    }


    @media screen and (min-width:530px) and (max-width: 629px){
    
       
      button
        {
            display:none;
        }
    
        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:10%;
            cursor: pointer;
        }
    
    
        hr{
            width: 18px;
            height: 1px;
            background-color:white;
            border:white 1px solid;
            margin: 2px 0;
            border-radius: 2px;
        }

    
        .ul-none
        {
            display:none;
        }
    
        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }
    
        nav ul li a
        {
            color:black;
        }
    
        #img
        {
            display: none;
    
        }
    
        
        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;
            height: 9vh;
          
        }

        .left-list, .right-list
        {
            text-align: center;
        }


        
        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:17%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
            }

            .display-none
            {
                display: none;
            }


            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top: 14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 13px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
              
            }

        


       
    }
        
    @media screen and (min-width:630px) and (max-width: 719px){
    
        button
        {
            display:none;
        }
    
        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:10%;
            cursor: pointer;
        }
    
    
        hr{
            width: 18px;
            height: 1px;
            background-color:white;
            border:white 1px solid;
            margin: 2px 0;
            border-radius: 2px;
        }
    
    
        .ul-none
        {
            display:none;
        }
    
        

        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }
    
        nav ul li a
        {
            color:black;
        }
    
        #img
        {
            display: none;
    
        }
        
        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;
          
        }

        .left-list, .right-list
        {
            text-align: center;
        }

        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:15%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
            }

            .display-none
            {
                display: none;
            }


            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top:14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top:14px;
                padding-bottom:14px;
                font-size: 13px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
              
            }

           


    
    }
    
    @media screen and (min-width:720px) and (max-width: 859px){
    
        .nav-after-scroll
        {
            height:12vh;
        }


       button
        {
            display:none;
        }
    
        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:7%;
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
    
    
        .ul-none
        {
            display:none;
        }
   
    
        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }
    
        nav ul li a
        {
            color:black;
        }
    
        #img
        {
            display: none;
    
        }
 
        
        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;
          
        }

        .left-list, .right-list
        {
            text-align: center;
        }

        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:9%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
            }

            .display-none
            {
                display: none;
            }


            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top: 14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 13px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
              
            }

           
    
       
    }
  
    
    @media screen and (min-width:860px) and (max-width: 1139px)
    {
       
        button
        {
            display:none;
        }
    
        .Divv
        {
            display:block;
            margin-top: 48px;
            position:absolute;
            right:5%;
            cursor: pointer;
        }
    
    
        hr{
            width: 18px;
            height: 1px;
            background-color:white;
            border:white 1px solid;
            margin: 2px 0;
            border-radius: 2px;
        }
    
      
    
        .ul-none
        {
            display:none;
        }
    

    
        nav ul li:hover
        {
            background-color:#525252;
            transition: 0.5s;
        }
    
        nav ul li a
        {
            color:black;
        }
    
        #img
        {
            display: none;
    
        }

        
        .image
        {
            display: block;
            width: 120px;
            position: absolute;
            left:2.5%;
            top:24%;     
        
        }

        .left-list, .right-list
        {
            text-align: center;
        }
        .ul-block
            {
            display: flex;
            flex-direction: column;
            margin-top:9%;
            width:100%;
            height:fit-content;
            background-color:white;
            padding-inline-start: 0px;
            
            }

          
            .display-list
            {
                display: block;
                background-color:white;
                color:black;
    
            }

            .display-none
            {
                display: none;
            }

            nav ul li
            {
            width:100%;
            /*   margin-top: 0px; */
            padding-top:14px;
            height:fit-content;
          

            }
            
            
            .display-list-item
            {
                padding-top: 14px;
                padding-bottom:14px;
                font-size: 13px;
            }
         

            .left-list-height, .right-list-height
            {
                height:fit-content;
              
            }

    
    
    }

    @media screen and (min-width:1140px) 
    {
        nav ul li
        {
            width:110px;
          
        }
    
        #img-li
        {
            
            object-fit:cover;
            width: 130px;
        }

        
        .list:hover > .display-list
        {
    
            display: block;
            background-color:white;
            color:black;


        }

        .display-list-item
        {
          font-size:13px;
          text-align: center;
          height:5vh;
          align-content: center;
          padding-top: 14px;
        }

        .display-list-item:hover
        {
          color:white;
          background-color:#050839;
        }
        
      
        

        .right-list-height, .left-list-height
        {
           height:fit-content;
    
        }

      
      
    }



    
    
</style>
    