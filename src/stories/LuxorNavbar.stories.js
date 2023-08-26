import Luxor from './luxorNavbar.svelte';


export default {
    title: 'Example/Luxor_Navbar_Container',
    component: Luxor,
    argTypes: {
      backgroundColor: { control: 'color' },
      primary: { control: 'boolean' },
    },
  };

const Template = (args) => ({
    Component: Luxor,
    props: args,
   
});

export const navbar_container = Template.bind({});
navbar_container.args = {
 
};

