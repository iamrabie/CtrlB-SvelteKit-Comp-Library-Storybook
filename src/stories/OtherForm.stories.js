import OtherForm from "../component/otherForm.svelte";
export default {
    title: 'Example/Form_Dummy_Text',
    component: OtherForm,
    argTypes: {
      primary: { control: 'boolean' },
     
    },
  };


const Template = (args) => ({
    Component: OtherForm,
    props: args,
   
});

export const dummy_text = Template.bind({});
dummy_text.args = {
}

