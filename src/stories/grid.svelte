<script>

       export let Columns ;
       console.log("n of columns" , Columns);

       export let Row_Gap;
       export let Col_Gap;
       var array = [1 , 2 , 3 , 4 , 5 ];

      /*  export let Color;
       console.log("background color" , Color); */

      /*  let stylee = Color ? `background-color: ${Color}` : '';
       console.log("stylee" , stylee);
        */

    
</script>

<div class={["grid-container"]}  style="grid-template-columns: repeat({Columns}, auto); row-gap: {Row_Gap}px; column-gap:{Col_Gap}px">

   {#each array as gridItem}
    <div class="grid-items">{gridItem}</div>
   {/each}
  <!--  <div class='grid-items'>1</div>
   <div class='grid-items'>2</div>
   <div class='grid-items'>3</div>
   <div class='grid-items'>4</div>
   <div class='grid-items'>5</div> -->

</div>

<p>thjms</p>

<style>

 .grid-container
 {
       display:grid;
       background-color: blueviolet;
       font-weight: bold;
       font-family: 'Times New Roman', Times, serif;
       text-align: center;
       font-size: 20px;
       padding: 5px;
    
    
 }

.grid-items
{
       background-color: pink;
       border:1px solid black;
       padding: 3px;
}

p
{
       color:white;
}


</style>