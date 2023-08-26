import Banners from './banners.svelte';


export default {
    title: 'Example/banner',
    component: Banners,
    argTypes: {
        backgroundColor: { control: 'color' },
        button1_text : { control : 'text'},
        button2_text : { control : 'text'},
        paragraph : { control : 'text'},
        button1_background_color : { control : 'color' },
        button2_background_color : { control : 'color' },
        button1_text_color : { control : 'color' },
        button2_text_color : { control : 'color' },
        
        
      },
};

const Template = (args) => ({
    Component: Banners,
    props: args,
   
});

export const banners = Template.bind({});
banners.args = {
 
 
};
  