import Card from './card.svelte';

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        primary: { control: 'boolean' },
        IWidth : {
            control : { type : 'range' , min : 1 , max : 90 , step : 3 }
        }
      },
};

const Template = (args) => ({
    Component: Card,
    props: args,
   
});

export const card = Template.bind({});
card.args = {
 
 
};
  