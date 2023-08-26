import Hero_fullScreen from '../component/hero-fullscreen.svelte';

export default {
    title: 'Example/Hero_Full_Screen',
    component: Hero_fullScreen,
    argTypes: {
        h1: {control : 'text'},
        p: {control : 'text'},
        cta_text: { control : 'text'},
        h1_color : { control : 'color'},
        p_color : { control : 'color'},
        cta_text_color : { control : 'color'},
        background_img_size : {
             control : {type : 'select'},
             options : ['cover' , 'contains' , 'auto' , 'unset' , 'inherit']
             },
        height: {
                control : { type : 'range' , min : 50 , max : 100 , step : 1 }
            },
      },
};

const Template = (args) => ({
    Component: Hero_fullScreen,
    props: args,
   
});

export const Full_Screen= Template.bind({});
Full_Screen.args = {
 
 
};