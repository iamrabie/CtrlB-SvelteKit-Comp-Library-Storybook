<script>
    //importing arrays to get the content from it and is usedin the footer section
    import {footerList1} from './data'
    import {footerList2} from './data'
    import {iconList} from './data'
    
    
    let linkList1 = footerList1;
    let linkList2 = footerList2;
    //export let linkList2 = navbarArray;
   /*  export let image_description = "this is logo image's description"; */
    
    /* let footerLogoUrl = "../../static/logo.png";
    let footerLogoAlt = "logo image"; */
    let contactList = iconList;
   /*  let CustomerName; */
    
    //variables for linking the component with storybook
    export let backgroundColor;
    export let text_color;
    export let copyright_text_color;
    </script>

    <div class="flexColumn">
    <div class="footer-container" style="background-color:{backgroundColor}; color:{text_color}">
        <!--col 1-->
        <div class="description">
        <!-- <img src="{footerLogoUrl}" alt="{footerLogoAlt}" class="logo" style="background-color:{backgroundColor};color:{text_color}">
            <div class="description-text" style="color:{text_color}">
                {image_description}
            </div> -->
        <div class="flex">
           <img src='../../static/luxor.svg' alt="luxor footer logo"  />
        </div>
        <p style="color:{text_color}">We are one of the Tri-State’s premier stone countertop fabricators and providers of sinks & faucets
           with over 18 years of experience. We pride ourselves on specialized services and leading products.</p>
        </div>
        <!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
        <!--col 2-->
        <div class="links">
            <ul class="links-list">
                {#each linkList1 as link}
                    <li>
                    <a href="{link.url}" style="color:{text_color}">{link.label}</a>
                    </li>
                {/each}
            </ul>
            <ul class="links-list">
                  {#each linkList2 as link}
                    <li>
                    <a href="{link.url}" style="color:{text_color}">{link.label}</a>
                    </li>
                {/each}
            </ul>
        </div>
        <!--xxxxxxxxxxxxxxxxxxx-->
        <!--col 3-->
        <div class="contact">
            {#each contactList as contact}
                <div class="contact-row">
                <img src="{contact.iconUrl}" alt="{contact.iconAlt}" class="contact-logo">
                <p class="contact-text" style="color:{text_color}">{contact.label}</p>
                </div>
            {/each}
        </div>
        <!--xxxxxxxxxxxxxxxxxx-->
        </div>
    <!--footer div ends here-->
   
    <!--copyright div begins-->
    <div class="copyright">
    <p class="copyright-text" style="color:{copyright_text_color}">Copyright &copy; 2022  Luxor Stone Group</p>
    </div>
    <!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
    </div>

        
    
    
    <style>

    
        .footer-container
        {

            display: flex;
            justify-content:center;
            width: 100%;
            background-color:#050839;
            min-height: 51vh;
            align-items: center; 
            
        }

        .flex
        {
            display:flex;
        }

        .flexColumn
        {
            display: flex;
            flex-direction: column;
        }
    
        .description 
        {
            display: flex;
            flex-direction: column;
            flex: 0 1 23%;
            min-height:41vh;
           
        
        }

    

        .description p
        {
            color:white;
            text-align: left;
            font-weight: lighter;
            line-height: 30px;
            font-size: 16px;
        }

       

    
      /*   .logo 
        {
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
            margin-top: 10px;
            background-color:red;
            color:$primaryColor;
        }
 */
      /*   img 
        {
            width:140px;
            height:6.5vh;
            object-fit:cover;
            background-color: maroon;

        } */

     /*    .vertical-line
        {
			border-left: 2px solid white;
			display: inline-block;
			height: 50px;
			margin: 0 20px;
            color:white;
		} */

/* 
        .flex-col
        {
            display: flex;
            flex-direction: column;
        }

        .flex-col p
        {
            font-weight:normal;
            line-height:1em;
            text-indent:14px;
            margin-top: 1%;
            margin-bottom: 0%;
        }
     */
      /*   .description-text 
        {
            color:$primaryColor;
            width: 90%;
            line-height: 1.6;
           
       
        }
     */
        .links 
        {
            display: flex;
            flex: 0 1 30%;
            justify-content:space-evenly;
            height:46vh;
            line-height: 24px;
        }
    
         
        .links-list li 
        {
            list-style-type: none;
            margin-bottom: 15px;
          
        }
    
        .links-list li a 
        {
            color:white;
            text-decoration: none;
            font-weight: 300;
        }
    
        .links-list li a:hover {
            color:white;
            text-decoration: none;
        }
    
    
        .contact 
        {
            display: flex;
            flex-direction: column;
            flex: 0 1 27%;
            height: 44vh;
            margin-left:2%;
            padding-left: 3%;
            
        }
    
        .contact-row {
            display: flex;
            margin-bottom: 10px;
          
        }
    
        .contact-logo {
            width: 40px;
            height: 40px;
            margin-top:10px;
         
        }
    
        .contact-text {
            color:white;
            margin-bottom: 0;
            margin-left: 30px;
            font-size:15px;
        }
    
        .copyright 
        {
            width: 100%;
            background-color:#050839;
            display: flex;
            height: 6vh;
         
        }
    
        .copyright-text {
            color:white;
            font-weight: 300;
            margin:0;
            font-size:16px;
           
        }
                                         /*   css media queries */
                                  /*  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

        @media screen and (min-width:299px) and (max-width:409px)
        {

            
            .footer-container
            {
                display: flex;
                flex-direction: column;
            }

            .description
            {
              
               padding-top: 4%;
               min-height:24vh;
        
            }

                
            .description img {
                width:318px;
                height:10.5vh;
                padding-left: 5%;
                padding-right: 4%;

            }

       /*      .vertical-line
            {
				border-left: 2px solid white;
				display: inline-block;
				height: 60px;
				margin: 0 20px;
                color:white;
			}
 */
            
            .description p
               {
                /* margin-block-start: 1em;
                margin-block-end: 1em; */
                padding-left: 5.5%;
                padding-right: 2.5%;
              
                
               
               }

               .copyright-text
                {
                    margin-left: auto;
                    margin-right:auto;
                    margin-top: 1%;
                }
        }

        @media screen and (min-width:410px) and (max-width:588px)
        {

            .footer-container
            {
                display: flex;
                flex-direction: column;
            }

            .description
            {
              
               padding-left: 0%;
               padding-top: 4%;
               min-height:24vh;
            
        
            }
                
        /* 
            .vertical-line{
				border-left: 2px solid white;
				display: inline-block;
				height: 85px;
				margin: 0 20px;
                color:white;
			}
 */
            
        

               .copyright-text
                {
                    margin-left: auto;
                    margin-right:auto;
                    margin-top: 1%;
                }

        }

        @media screen and (min-width:410px) and (max-width: 450px) {
        .description img 
            {
                width:350px;
                height:15vh;
                padding-left: 6%;
                padding-right: 5%; 
               

            }

            .description p
               {
                margin-block-start: 1em;
                margin-block-end: 1em;
                padding-left:5.5%;
                padding-right:5%; 
               
               }
            }
         
        
        @media screen and (min-width:451px) and (max-width: 470px) {
        .description img 
            {
                width:405px;
                height:20vh;
                padding-left: 6%; 
              
            }

            .description p
               {
                
                padding-left:5.5%;
                padding-right:4%; 
                margin-top: 0%;
               
               }
            }

               
        @media screen and (min-width:471px) and (max-width: 500px) {
        .description img 
            {
                width:420px;
                height:22vh;
                padding-left: 6%; 
              

            }

            .description p
               {
                
                padding-left:5.5%;
                padding-right:3%; 
                margin-top: 0%;
               }
            }

         @media screen and (min-width:501px) and (max-width: 540px) {
        .description img 
            {
                width:440px;
                height:22vh;
                padding-left: 6%; 
                

            }

            .description p
               {
                
                padding-left:5.5%;
                padding-right:3%; 
                margin-top: 0%;
               }
            }

        
            @media screen and (min-width:541px) and (max-width: 588px) {
            .description img 
                {
                    width:490px;
                    height:26vh;
                    padding-left: 6%; 
                   
                }

            .description p
               {
                
                padding-left:5.5%;
                padding-right:3%; 
                margin-top: 0%;
               
               }
            }


            @media screen and (min-width:588px) and (max-width: 650px) {
            .description img 
                {
                    width:520px;
                    height:28vh;
        
                }

            .description p
               {
                
                padding-left:7.5%;
                padding-right:5%; 
                margin-top: 0%;
               }
            }

            
            @media screen and (min-width:650px) and (max-width:730px) {
            .description img 
                {
                    width:540px;
                    height:30vh;
        
                }

            .description p
               {
                
                padding-left:8.5%;
                padding-right:5%; 
                margin-top: 0%;
               
               }
            }

            @media screen and (min-width:731px) and (max-width:800px) {
            .description img 
                {
                    width:560px;
                    height:32vh;
        
                }

            .description p
               {
                
                padding-left:11%;
                padding-right:5%; 
                margin-top: 0%;
               
               }
            }



        @media screen and (min-width:589px) and (max-width: 800px) {
            .footer-container
            {
                display: flex;
                flex-direction: column;
            }



            .links
            {
               width: 100%;
            
               justify-content: space-evenly;
            }
            
        
           

            .contact
            {
              
               width: 100%;
               padding-left: 0%;
               margin-left: 0%;
            }

            .contact-row
            {
                justify-content: center;
            }

            .flex
            {
                margin-left: auto;
                margin-right: auto;
            }

                
            img {
                width:330px;
                height:16.5vh;

                }

          /*   .vertical-line{
				border-left: 2px solid white;
				display: inline-block;
				height: 100px;
				margin: 0 20px;
                color:white;
			} */

            .links
            {
                height:38vh;
            }

            .copyright-text
            {
                margin-left: auto;
                margin-right:auto;
                margin-top: 1%;
            }

          
        }

        @media screen and (min-width:801px) and (max-width:924px)
        {

            .description
            {
                padding-left: 1%;
                flex: 0 1 25%;
            }

            .description img
            {
                margin-top: 10%;
                padding-left: 1%;

            }

            .contact
            {
                padding-left: 0%;
                 margin-top: -5%;
                 flex: 0 1 23%;
                 padding-left: 1%;
                 padding-right: 1%;
            }

            .links
            {
                flex: 0 1 35%;
                margin-top: -5%;

            }

        
        }

        
        @media screen and (min-width:925px) and (max-width:1050px)
        {

            .description
            {
                padding-left: 1%;
                flex: 0 1 25%;
            }

            .description img
            {
                margin-top: 10%;
                padding-left: 1%;

            }

            .contact
            {
                padding-left: 0%;
                 margin-top: -1%;
                 flex: 0 1 23%;
                 padding-left: 1%;
                 padding-right: 1%;
            }

            .links
            {
                flex: 0 1 35%;
                margin-top: -1%;

            }

        
        }


        @media screen and (min-width:801px) and (max-width:862px)
        {

            .copyright-text
            {
               
                padding-top:2%;
                padding-left:1%;
            }


        }

        @media screen and (min-width:863px) and (max-width:890px)
        {

            .copyright-text
            {
               
                padding-top:2%;
                padding-left:1%;
            }

        }

        @media screen and (min-width:891px) and (max-width:946px)
        {

            .copyright-text
            {
               
                padding-top:1%;
                padding-left:2%;
                
            }

        }

        @media screen and (min-width:947px) and (max-width:980px)
        {

            .copyright-text
            {
               
                padding-top:1%;
                padding-left:2.5%;
                
            }

        }
        
        @media screen and (min-width:981px) and (max-width:1050px)
        {

            .copyright-text
            {
               
                padding-top:1%;
                padding-left:3.5%;
                
            }

        }

        @media screen and (min-width:1051px) 
        {

            .copyright-text
            {
               
                padding-top:1%;
                padding-left:7%;
                
            }

        }





       
    
    </style>