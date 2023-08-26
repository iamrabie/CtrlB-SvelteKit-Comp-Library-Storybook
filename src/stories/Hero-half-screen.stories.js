import Hero_halfScreen from '../component/hero-halfscreen.svelte';

export default {
    title: 'Example/Hero_Half_Screen',
    component: Hero_halfScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
        title : { control : 'text' },
        subheading : { control : 'text' },
        title_color : {control : 'color' },
        subheading_color : { control : 'color' },
        button_text : { control : 'text' },
        button_bg_color : { control : 'color' },
        height: {
            control : { type : 'range' , min : 50 , max : 100 , step : 1 }
        },
        button_text_color : { control : 'color' },
      },
};

const Template = (args) => ({
    Component: Hero_halfScreen,
    props: args,
   
});

export const half_screen = Template.bind({});
half_screen.args = {
 
 
};