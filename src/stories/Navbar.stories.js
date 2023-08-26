import Navbar from './navbar.svelte';

export default {
    title: 'Example/navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
        burger_icon_color : { control: 'color' },
        list_elements_color : { control : 'color'},
        contact_background_color : { control : 'color'},
      },
};

const Template = (args) => ({
    Component: Navbar,
    props: args,
   
});

export const  nav = Template.bind({});
nav.args = {
 
 
};
  