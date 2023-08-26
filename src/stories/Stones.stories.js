import Stones from '../component/stones.svelte';


export default {
    title: 'Example/Stones',
    component: Stones,
    argTypes: {
      Columns: {
        control : { type : 'range' , min : 1 , max : 10 , step : 1 }
      },
     
      Row_Gap : {
        control :{ type : 'range' , min : 0 , max : 50 , step : 2 }
      },

      Col_Gap : {
        control :{ type : 'range' , min : 0 , max : 50 , step : 2 }
      }
      }
  };

const Template = (args) => ({
    Component:Stones,
    props: args,
   
});

export const stones = Template.bind({});
stones.args = {
 
 
};