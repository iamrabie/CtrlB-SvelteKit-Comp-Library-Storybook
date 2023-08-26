<script>
  import StatBlock from '../component/stat-blocks.svelte';

  let y;
  export let backgroundColor;
  let backgroundStyle = backgroundColor
    ? `background-color: ${backgroundColor}`
    : '';

  export let font_family;
  console.log('font family is', font_family);

  let fontStyle = font_family;

  export let damping;
  console.log('damping speed', damping);

  let speed = damping;
  console.log('speed', speed);



var Stats = [
    {
      title: 'Years of Excellence',
      startingNumber: 0,
      endingNumber: 110,
    },

    {
      title: 'Product SKUs',
      startingNumber: 0,
      endingNumber: 150,
    },

    {
      title: 'Team Members',
      startingNumber: 0,
      endingNumber: 130,
    },
  ];
</script>

<svelte:window bind:scrollY={y} />

<div class={y > 500 ? 'div' : 'div2'} />

<StatBlock {Stats} {backgroundStyle} {fontStyle} {speed} />

<style>
  div {
    height: 150vh;
    background-color: darkolivegreen;
  }

  .div2 {
    background-color: khaki;
  }
</style>
