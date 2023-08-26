import Projects_grid from '../component/images.svelte';


export default {
    title: 'Example/projects',
    component: Projects_grid,
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
    Component:Projects_grid,
    props: args,
   
});

export const projects = Template.bind({});
projects.args = {
 
 
};