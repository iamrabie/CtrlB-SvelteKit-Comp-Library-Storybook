<script>

    /* total_lists : a variable total_lists to store the value that user enters based on how many lists he/she needs 
    and is initialized with value of 3 so initially three lists can be seen on the web page
    and later whatever value user enters it will be stored in this variable. There is a constraint that user can have 2-5 lists only 
    i.e. not less than two lists and not more than 5 lists.  */
    export let total_lists = 3;
    /* console.log("No of Lists" , total_lists); */

/*     console.log('working!'); */

    export let list_card_bg_color;
    export let text_color;
    export let button_text = 'GET STARTED';
    export let button_text_color;
    export let button_bg_color;
    export let option1_text = 'Search Zoning Maps';
    export let option2_text = 'View Zoning Classifications';
    export let option3_text = 'Save favourite sites and notes';
    export let card_heading_text = 'Zoning Reports';
    export let card_heading_color;
    export let card_subHeading_text = 'Get 1 Report';
    export let card_subHeading_color;
    export let card_text = 'Best for small business and enterpreners getting started with zoning reports';
    export let list_heading_text = 'Access to:';
    export let list_heading_color;
    export let please_enter_price = 79.95;


   /*  Price_List:  an array Price_List  that comprises of five lists which were later iterated using 
   each loop based on how much lists user wants.*/
    var Price_List = [
      {
        title : card_heading_text,
        price : please_enter_price,
        subHeading : card_subHeading_text,
        text : card_text,
        buttonText : button_text,
        heading : list_heading_text,
        List : [
                option1_text , 
                option2_text , 
                option3_text
                ]

      },

      {
        title : 'Zoning Reports',
        price : '',
        subHeading : 'Get 16 Report',
        text : 'Out most popular package with more filters, tools, filters and features to meet all your zoning data needs.',
        buttonText : 'GET IN TOUCH',
        heading : 'Everything in Zoning Reports, and:',
        List : [
                 'Filter Permitted Land Use' ,
                 'Screenshot and Print Maps' , 
                 'Filter by Zoning' ,
                 'Building Controls' ,
                 'Rezoning and Variance notifications' ,
                 'Request and Coverage' , 
                 'Export to CSV',
                 'Prospecting Tool (50 Credits)  Overages at $0.99 per property' , 
                 'Additional Auto Zoning Reports for $50/Report'
                ]

      },

      {
        title : 'Zoning Reports',
        price : '',
        subHeading : 'Get 1 Report',
        text : 'Best for small business and enterpreners getting started with zoning reports',
        buttonText : 'GET STARTED',
        heading : 'Access to:',
        List : [
                'Prospecting Tool(24,000 credits and overages at $0.99 per prospect property',
                'API Access (10,000 Call Limit and overages at $0.75/Call)' , 
                'Additional Auto Zoning Report for $50/Report after exceeding limit.'
                ]

      },

      {
        title : 'Zoning Reports',
        price : '',
        subHeading : 'Get 16 Report',
        text : 'Out most popular package with more filters, tools, filters and features to meet all your zoning data needs.',
        buttonText : 'GET IN TOUCH',
        heading : 'Everything in Zoning Reports, and:',
        List : [
                 'Filter Permitted Land Use' ,
                 'Screenshot and Print Maps' , 
                 'Filter by Zoning' ,
                 'Building Controls' ,
                 'Rezoning and Variance notifications' ,
                 'Request and Coverage' , 
                 'Export to CSV',
                 'Prospecting Tool (50 Credits)  Overages at $0.99 per property' , 
                 'Additional Auto Zoning Reports for $50/Report'
                ]

      },

      {
        title : 'Zoning Reports',
        price : '$79.95',
        subHeading : 'Get 1 Report',
        text : 'Best for small business and enterpreners getting started with zoning reports',
        buttonText : 'GET STARTED',
        heading : 'Access to:',
        List : [
                'Search Zoning Maps' , 
                'View Zoning Classifications' , 
                'Save favourite sites and notes' 
                ]

      }

      

    ];


</script>

<div class='main' style="color:{text_color}">
<div class='grid-container'>
   <!--  each loop used to iterate the list from the array 'Price_List' -->
    {#each Price_List as priceList, i}
   <!--  if condition used to show the no of list user wants-->
    {#if i < total_lists} 
    <div class="grid-item flex">
      <div class="card" style="background-color:{list_card_bg_color}">
        <div class="card-heading">
          <h2 class="card-heading-color" style="color:{card_heading_color}">{priceList.title}</h2>
          <h1 class="h1-height">${priceList.price}</h1>
          <h3 class="card-heading-color" style="color:{card_subHeading_color}">{priceList.subHeading}</h3>
        </div>
        <div class="card-text">
          <p class="card-text-margin">
            {priceList.text}
          </p>
        </div>
      </div>
      <button style="background-color:{button_bg_color};color:{button_text_color}">{priceList.buttonText}</button>
      <h3 class="list-options-heading" style="color:{list_heading_color}">{priceList.heading}</h3>
      <div class="list-options">
        {#each priceList.List as list_item}
          <hr>
          <p class="list-options-text-width">{list_item}</p>
        {/each}
          <hr>
      </div>    
    </div>
    {/if}
    {/each}

 
</div>
</div>



<style>

  .main
  {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .grid-container
  {
    display : grid;
    grid-template-columns: auto auto auto;
    background-color:#D3D3D3;
   /*  height:365vh; */
   /*  height: 180vh; */
  /*   justify-content: center; */
    column-gap:0px;
    padding-top: 44px;
    padding-bottom: 44px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-item
  {
   /*  width:416px; */
    width:97%; 
    background-color:white;
    min-height:170vh;
    height : fit-content; 
    margin-bottom:3%;
    
  }

  .flex
  {
    display: flex;
    flex-direction: column;
  }

  .card
  {
    min-height:54vh;
    height: fit-content;
    background-color:#E3E3E3;
    margin-top:12px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 10px;
  }

  .card-heading
  {
    text-align: center;
    padding-top:35px;
  }

  .card-heading-color
  {
    color:#4667b4;
  }

  .card-text
  {
    padding-top:28px;
    text-align: center;
    font-size: 22px;
    font-weight: lighter;
  }

  .card-text-margin
  {
    margin-left:15px;
    margin-right:15px;
  }

  button
  {
    width:167px;
    background-color:#4667b4;
    color:white;
    border:#4682b4;
    height:54px;
    font-size:18px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    border-radius: 5px;
  }

  .list-options
  {
  /*   text-indent: 80px; */
    font-size:18px;

  }

  .list-options-heading
  {
    margin-top:37px;
    font-size:23px;
    margin-bottom:55px;
    margin-left: 16px;
    margin-right: 16px;
    color:black;
  }

  .list-options-text-width
  {
    width:70%;
    margin-left: 70px;
  }

  hr
  {
    width:75%;
  }

  .h1-height
  {
    height:5.5vh;
  }

  @media screen and (min-width:150px) and (max-width: 770px){

    .grid-container
    {
      grid-template-columns: auto;
    }

    .grid-item
    {
      width:350px;
    }
  }

  @media screen and (min-width:771px) and (max-width: 920px){

  .grid-container
  {
    grid-template-columns: auto auto;
    column-gap:14px;
  } 

  .grid-item
  {
    width:350px;
  }
}

@media screen and (min-width:921px) and (max-width: 1120px){

.grid-container
{
  grid-template-columns: auto auto;
  column-gap:17px;
} 

.grid-item
{
  width:380px;
}
}

@media screen and (min-width:1121px) and (max-width: 1350px){

.grid-container
{
  grid-template-columns: auto auto auto;
  column-gap: 12gitpx;
} 

.grid-item
{
  width:340px;
}
}
  




</style>