import FAQ from './faq-parent-comp.svelte';

export default {
    title: 'Example/Faq',
    component: FAQ,
    argTypes: {
        backgroundColor: { control: 'color' },
        ques1 : { control : 'text' },
        ques2 : { control : 'text' },
        ques3 : { control : 'text' },
        ques4 : { control : 'text' },
        ques5 : { control : 'text' },
        ans1 : { control : 'text' },
        ans2 : { control : 'text' },
        ans3 : { control : 'text' },
        ans4 : { control : 'text' },
        ans5 : { control : 'text' },
      
      },
};

const Template = (args) => ({
    Component: FAQ,
    props: args,
   
});

export const faq = Template.bind({});
faq.args = {
 
 
};
  