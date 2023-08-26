import Info from '../component/info-1-alt2.svelte';

export default {
    title: 'Example/info_1_alt2',
    component: Info,
    argTypes: {
        backgroundColor: { control: 'color' },
        info_para : { control : 'text' },
        info_para_color : { control : 'color' },
        info_heading : { control : 'text' },
        info_heading_color : { control : 'color' },
        tiny_top_text: {control : 'text' },
        tiny_top_text_color: {control : 'color' },
        button_text : { control : 'text' },
        button_text_color : { control : 'color' },
        arrow_color: {control : 'color'},
        marginLeft : { 
            control : { type : 'select' },
            options : [ 5 , 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 
                        85, 90, 95, 100]

        }
      },
};

const Template = (args) => ({
    Component: Info,
    props: args,
   
});

export const info = Template.bind({});
info.args = {
 
 
};
  