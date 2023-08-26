<script>

    export let Columns;
    export let Row_Gap;
    export let Col_Gap;
    let sinksAndFaucets_array = [
      {
         title : 'Under Mount-Special Size – KSU23186',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount-Special Size – KSU4621TR',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount-Special Size – KSU361910D',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount-Special Size – KSU31219S',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount – KSU30189',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount – KSU27189',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount – KSU27186',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount – KSU23216',
         image_src : '../../static/sinks.jpg',
         url : '#'
      },
  
      {
         title : 'Under Mount-Classical – KSU322079',
         image_src : '../../static/sinks.jpg',
         url : '#'
      }
  
  
  ];
  </script>
  
  <div class="grid-container" style="grid-template-columns: repeat({Columns}, 265px); row-gap: {Row_Gap}px; column-gap:{Col_Gap}px">
      {#each sinksAndFaucets_array as items}  
      <div class="grid-item">
         <div class="flex-col">
         <a href="{items.url}">
          <img src="{items.image_src}" alt=""/> 
          <p>{items.title}</p>
         </a>
         </div>
      </div>
      {/each}
  </div>
  
  <style lang="scss">
  
      @import '../styles/theme.scss';
  
      .grid-container
      {
          display:grid;
          grid-template-columns: 265px 265px 265px;
          background-color: white;
          padding-top:1%;
          padding-bottom: 1%;
          column-gap: 10px;
          row-gap: 35px;
      }
  
     /*  .grid-item
      {
          border: 1px dashed red;
  
      } */
  
      img
      {
          width:240px;
          height:240px;
          object-fit: cover;
          border:2px solid #F6F5F5;
      }
  
      a
      {
          color:#050839;
          text-decoration: none;
         
      }
      
      .flex-col
      {
          display:flex;
          flex-direction: column;
      }
  
      p
      {
          margin-top: -1.5%;
          padding-top:5%;
          padding-bottom:5%;
          text-align: center;
          font-size: 25px;
          font-weight:600;
          background-color:#F6F5F5;
          margin-bottom: 0;
      }
  
    @media screen and (min-width:370px) and (max-width:467px)
    {
  
      .grid-container
      {
          grid-template-columns:auto;
          
      }
  
      img
      {
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15%;
          padding-right: 15%;
      }
  
      p
      {
          font-size: 30px;
      }
  
    }
  
    @media screen and (min-width:468px) and (max-width:624px)
    {
  
      .grid-container
      {
          grid-template-columns:auto;
          
      }
  
      img
      {
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20%;
          padding-right: 20%;
      }
  
      p
      {
          font-size: 30px;
      }
  
    }
  
    @media screen and (min-width:625px) and (max-width:768px)
    {
  
      .grid-container
      {
          grid-template-columns:auto;
          
      }
  
      img
      {
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding-left: 26%;
          padding-right: 26%;
          padding-bottom: 2%;
      }
  
      p
      {
          font-size: 30px;
      }
  
    }
    
      
    @media screen and (min-width:769px) and (max-width:1024px)
    {
      .grid-container
      {
          grid-template-columns:35% 35%;
          column-gap: 30px;
          justify-content: center;
      }
  
      p
      {
          
          margin-top: -1.5%;
          padding-top:2.5%;
          padding-bottom:2.5%;
          padding-left:3%;
          padding-right:3%;
          display: block;
          margin-left: auto;
          margin-right: auto;
          object-fit: cover;
      }
  
      
      img
      {
          width: 98.75%;
          height:260px;
          object-fit: cover;
          border:2px solid #F6F5F5;
      }
  
      
  
  
    }
  
    @media screen and (min-width:1025px)
    {
  
      .grid-container
      {
          justify-content: center;
      }
      p
      {
          width:92%;
      }
    } 
  
  </style>