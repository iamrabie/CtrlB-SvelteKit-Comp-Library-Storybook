<script>

        import {navbarArray} from './data.js';
        //console.log('navbar array' , navbarArray);
        const logoUrl="static/logo.png";
        const logoAlt = "";
    

        //variables expoted from storybook 
        export let BgStyle;
        export let list_item_color;
        export let menu_icon_color;
        export let contact_bg;
    
        let isActive = false;
        console.log("isActive "  , isActive);
       /*  function navToggle(e) {
            isActive = !isActive
        } */
     
    </script>
   <!--  Navbar starts here -->
    <nav style="{BgStyle}">
       <!--  navbar logo -->
        <div class="logo">
        <img class="logo" src={logoUrl} alt="{logoAlt}">
        </div>
        <!-- an unordered list to display the menu on the navbar -->
        <ul class="nav-links {isActive ? 'nav-active' :''}">
          <!--   getting menu options for ul list from the array therefore iterating the array -->
            {#each navbarArray as navItem, index}
                <li style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s; {navbarArray.length == index + 1 ? 'background-color:' + contact_bg : ''}"
                class={navbarArray.length == index + 1 ? 'bg-style' : ''}>
       
                    <a href="{navItem.url}" style="color:{list_item_color}">{navItem.label}</a>
                </li>
                <!-- <p> {index}</p> -->
            {/each}
            <!-- each loop ends here -->
        </ul>
       <!--  unordered list ends here -->
        
       <!-- div for burger menu which is shown on smaller screen is initially it is set to display none -->
       <div on:click="{ () => isActive = !isActive }" class="burger" style="background-color:{BgStyle}">
            <script>
                console.log("isActive" , isActive);
            </script>
            <div style="background-color:{menu_icon_color}"></div>
            <div style="background-color:{menu_icon_color}"></div>
            <div style="background-color:{menu_icon_color}"></div>
        </div>
       <!--  burger menu ends here -->
    </nav>
    <!--navbar ends -->
    
    
    <style>
    
        .logo {
            height: 80px;
            width: 80px;
        }
    
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 8vh;
            background-color: olive;
            width: 100%;
            flex-wrap: wrap;
        }
    
        ul
        {
            margin-left:auto;
            margin-right: auto;
        }
    
        .nav-links {
            display: flex;
            width: 30%;
            justify-content: space-around;
            align-items: center;
         
        }
    
    
        .nav-links a {
            color: white;
            text-decoration: none;
            letter-spacing: 3px;
            font-weight: bold;
            font-size: 16px;
    
        }
    
        .nav-links a:hover {
            text-decoration: none;
        }
    
        .nav-links li {
            list-style-type: none;
        }
    
     /*    .nav-links li:last-child {
            background-color: pink;
            padding: 20px 50px;
        } */
    
        .nav-links li:last-child a {
            color: white;
        }
        .burger {
            cursor: pointer;
            display:none;
        }
        .burger div{
            width: 25px;
            height: 2px;
            margin: 5px;
            background-color: white;
    
        }
    
        .nav-active {
            transform: translateX(-1px);
            display:inline-block;
        }
    
      
    
        .bg-style
        {
            background-color: yellowgreen; 
            padding: 20px 50px;
        }
    
     
    
    
        @media screen and (max-width: 600px){
    
            .nav-links
            {
                display: none;
            }
    
            .burger
            {
                display:block;
            }
    
           
        }
    
    
    
    
        /**
    
    @include for-size(small-phone-only) {
    
    }
    
    @include for-size(large-mobile-up) {
    
    }
    
    @include for-size(tablet-portrait-up) {
    
    }
    
    @include for-size(tablet-landscape-up) {
    
    }
    
    @include for-size(desktop-up) {
    
    }
    
    @include for-size(big-desktop-up) {
    
    }
        
        **/
    
    </style>
    