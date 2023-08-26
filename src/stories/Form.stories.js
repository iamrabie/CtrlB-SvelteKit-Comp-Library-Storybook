import Form from '../stories/form.svelte'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    Fname : { control : 'text' },
    Lname : { control : 'text' },
    email : { control : 'text' },
    text : { control : 'text' },
    primary: { control: 'boolean' },
   
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Form,
  props: args,
 
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const form = Template.bind({});
form.args = {
  primary: true,
};