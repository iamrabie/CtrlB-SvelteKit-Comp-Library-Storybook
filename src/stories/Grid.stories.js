import Grid from './grid.svelte';


export default {
    title: 'Example/Grids',
    component: Grid,
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
    Component: Grid,
    props: args,
   
});

export const grid = Template.bind({});
grid.args = {
 
 
};
  
