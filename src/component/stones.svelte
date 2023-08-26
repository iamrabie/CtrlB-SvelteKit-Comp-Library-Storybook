<script>

    export let Columns;
    export let Row_Gap;
    export let Col_Gap;

    let stones_array = [
         {
            title : 'Bianco Carrata',
            image_src : '../../static/stone1.jpg',
            url : '#'
         },

         {
            title : 'Bianco Veno',
            image_src : '../../static/stone2.jpg',
            url : '#'
         },

         {
            title : 'Delicato Crema',
            image_src : '../../static/stone3.jpg',
            url : '#'
         },

         {
            title : 'Wave',
            image_src : '../../static/stone4.jpg',
            url : '#'
         },

         {
            title : 'Calcatta Infiniti',
            image_src : '../../static/stone5.jpeg',
            url : '#'
         }

    ];
</script>


<div class="grid-container" style="grid-template-columns: repeat({Columns}, auto); row-gap: {Row_Gap}px; column-gap:{Col_Gap}px">
    {#each stones_array as stones}
    <div class="grid-item">
       <div class="flex-col">
       <a href="{stones.url}">
        <img src="{stones.image_src}" alt=""/> 
        <p>{stones.title}</p>
       </a>
       </div>
    </div>
    {/each}
</div>

<style>

  .grid-container
  {
    display:grid;
    justify-content: center;
    grid-template-columns: auto auto auto ;
    column-gap:55px;
    row-gap: 65px;
    margin-top: 3%;

  }

  .grid-item
  {
   
  }

  img
  {

   width:210px;
   height:210px;
   object-fit: cover;
   border-radius: 140px;
  }

  .flex-col
  {
    display: flex;
    flex-direction: column;
  }

  p
  {
    text-align: center;
    color:black;
    margin-top:14px;
    margin-bottom: 0;
    font-size: 25px;
    font-weight: bold;
    line-height: 35px;
  
  }

  a
  {
    text-decoration: none;
  }
</style>