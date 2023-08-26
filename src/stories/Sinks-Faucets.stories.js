import Sinks from '../component/sinks-faucets.svelte';


export default {
    title: 'Example/Sinks',
    component: Sinks,
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
    Component: Sinks,
    props: args,
   
});

export const sinks = Template.bind({});
sinks.args = {
 
 
};
  