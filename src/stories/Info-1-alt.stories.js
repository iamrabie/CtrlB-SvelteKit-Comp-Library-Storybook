import Info from '../component/info-1-alt.svelte';

export default {
    title: 'Example/info_1_alt',
    component: Info,
    argTypes: {
        backgroundColor: { control: 'color' },
        tiny_Top_Text : { control : 'text' },
        info_para : { control : 'text' },
        info_Heading :  { control : 'text' },
        button_text : { control : 'text' },
      },
};

const Template = (args) => ({
    Component: Info,
    props: args,
   
});

export const info_1_alt = Template.bind({});
info_1_alt.args = {
 
 
};
  