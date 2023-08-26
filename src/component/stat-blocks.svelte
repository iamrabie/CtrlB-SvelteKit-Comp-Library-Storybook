<script>
  //import '../styles/global.css';
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  //storybook variables
  export let backgroundStyle;
  //console.log('bg color of stat block', backgroundStyle);

  export let fontStyle;
  //console.log(' font style ', fontStyle);

  export /**
   * @type {{ title: any; }[]}
   */
  let Stats;
  console.log('Stats: array of  objects', Stats);

  let stat;

  let viewportHeight;

  export let speed;
  console.log('speed2', speed);

  let y;
  console.log(y);
  let number = spring(0, {
    stiffness: 0.1,
    damping: speed,
  });

  let number2 = spring(0, {
    stiffness: 0.1,
    damping: speed,
  });

  let number3 = spring(0, {
    stiffness: 0.1,
    damping: speed,
  });

  //let viewportHeight;
  function scrolll() {
    //let viewportHeight;
    let pos1 = stat.offsetTop;
    console.log('y', y);
    console.log('height', viewportHeight);
    console.log('pos1', pos1);
    if (y + viewportHeight > pos1) {
      number.set(Stats[0].endingNumber);
      number2.set(Stats[1].endingNumber);
      number3.set(Stats[2].endingNumber);
    }
  }
</script>

<!-- for getting the pixels scrolled -->
<svelte:window
  bind:scrollY={y}
  on:scroll={scrolll}
  bind:innerHeight={viewportHeight}
/>

<!-- main div -->
<div class="statBlock" bind:this={stat} style={backgroundStyle}>
 <!--  display flex used so taht all the containers within the flex container ar sitting next to each other -->
  <div class="Flex-Container" style="font-family:{fontStyle}">

    <!--   block1 -->
    <div class="stat-blocks">
      <h1>{$number.toFixed(0)}+</h1>
      <h2>{Stats[0].title}</h2>
    </div>

    <!--   block2 -->
    <div class="stat-blocks">
      <h1>{$number2.toFixed(0)}+</h1>
      <h2>{Stats[1].title}</h2>
    </div>

    <!--   block3 -->
    <div class="stat-blocks">
      <h1>{$number3.toFixed(0)}+</h1>
      <h2>{Stats[2].title}</h2>
    </div>

  </div>
  <!-- flex container ends here -->
</div>
<!-- main stat block container ends here -->

<style>
  .statBlock {
    background-color: navy;
    margin-top: 7%;
    margin-bottom: 4%;
  }

  .Flex-Container {
    display: flex;
    height: 300px;
    text-align: center;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
  }

  .stat-blocks
   {
    width: 33.33%;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100% !important;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 68px;
  }

  h2 {
    font-size: 23px;
    font-weight: lighter;
    margin-top: -9%;
  }

  @media screen and (min-width: 350px) and (max-width: 530px) {
    .Flex-Container {
      display: flex;
      height: 470px;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }

    .stat-blocks
    {
      width: 98.7%;
      padding-top: 0px;
    }

    h2 {
      margin-top: -8%;
      font-size: 20px;
    }

    h1 {
      font-size: 55px;
    }
  }

  @media screen and (min-width: 531px) and (max-width: 650px) {
    h2 {
      font-size: 20px;
      margin-top: -17.5%;
    }

    h1 {
      font-size: 58px;
    }
  }

  @media screen and (min-width: 651px) and (max-width: 796px) {
    h2 {
      font-size: 22px;
      margin-top: -15.5%;
    }

    h1 {
      font-size: 60px;
    }
  }

  @media screen and (min-width: 797px) and (max-width: 1000px) {
    h2 {
      font-size: 24px;
      margin-top: -13.5%;
    }

    h1 {
      font-size: 62px;
    }
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    h2 {
      font-size: 24px;
      margin-top: -12%;
    }

    h1 {
      font-size: 64px;
    }
  }
</style>
