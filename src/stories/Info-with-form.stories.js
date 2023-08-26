import Form_with_info from '../component/info-with-form.svelte';

export default {
    title: 'Example/info_with_form',
    component: Form_with_info,
    argTypes: {
        backgroundColor: { control: 'color' },
        tiny_top_text : { control : 'text' },
        tiny_top_text_color : { control : 'color'},
        info_para : { control : 'text' },
        info_para_color : { control : 'color' },
        info_heading : { control : 'text' },
        info_heading_color : { control : 'color' },
        first_name : { control : 'text' },
        last_name : { control : 'text' },
        email_address : { control : 'text' },
        phone_number : { control : 'text' },
        message_area : { control : 'text' },
      },
};

const Template = (args) => ({
    Component: Form_with_info,
    props: args,
   
});

export const form_info = Template.bind({});
form_info.args = {
 
 
};
  