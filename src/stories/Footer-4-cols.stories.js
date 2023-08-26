import Footer from '../component/footer-4-col.svelte';

export default {
    title: 'Example/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
        text_color: { control : 'color'},
        copyright_bg_color: {control : 'color'},
        copyright_text_color: {control : 'color'},
        image_description : { control : 'text' },
      
      },
};

const Template = (args) => ({
    Component: Footer,
    props: args,
   
});

export const footer_4_col = Template.bind({});
footer_4_col.args = {
 
 
};
  