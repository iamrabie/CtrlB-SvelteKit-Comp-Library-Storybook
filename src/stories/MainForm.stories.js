import MainForm from './mainForm.svelte';
export default {
    title: 'Example/Form_Container',
    component: MainForm,
    argTypes: {
      primary: { control: 'boolean' },
     
    },
  };


const Template = (args) => ({
    Component: MainForm,
    props: args,
   
});

export const container = Template.bind({});
container.args = {
}
