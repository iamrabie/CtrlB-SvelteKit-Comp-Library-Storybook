import Form1 from '../component/form-1.svelte';

export default {
    title: 'Example/Form1',
    component: Form1,
    argTypes: {
        button_bg_color: { control: 'color' },
        button_text_color: { control : 'color'},
        formTitle: {control : 'text'},
        formMessage: {control: 'text'},
        firstName: {control : 'text'},
        lastName: {control : 'text'},
        email: {control : 'text'},
        phoneNumber : {control : 'text' },
        messageArea : {control : 'text'},

        
      },
};

const Template = (args) => ({
    Component: Form1,
    props: args,
   
});

export const form = Template.bind({});
form.args = {
 
 
}