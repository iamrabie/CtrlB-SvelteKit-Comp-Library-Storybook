import Info1  from '../component/info-1.svelte';

export default {
    title: 'Example/Info1',
    component: Info1,
    argTypes: {
        backgroundColor : { control : 'color'},
        info_heading : { control : 'text' },
        info_heading_color : { control : 'color' },
        info_para : { control : 'text' },
        info_para_color : { control : 'color' },
        info_cta_text : { control : 'text' },
        info_cta_text_color : { control : 'color' },
      },
};

const Template = (args) => ({
    Component: Info1,
    props: args,
   
});

export const info = Template.bind({});
info.args = {
 
 
};
  