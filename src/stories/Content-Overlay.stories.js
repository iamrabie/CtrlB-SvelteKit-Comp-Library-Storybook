import Overlay from './content-overlay.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
    title: 'Example/Content_Block_Overlay',
    component: Overlay,
    argTypes: {
      heading3 : { control : 'text' },
      heading1 : { control : 'text' },
      text : { control : 'text' },
      button : { control : 'text' },
     
    },
  };
  
  // More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
  const Template = (args) => ({
    Component: Overlay,
    props: args,
   
  });
  
  // More on args: https://storybook.js.org/docs/svelte/writing-stories/args
  export const overlay = Template.bind({});
  overlay.args = {
 
  };