import LRsection from '../component/left-right-section.svelte';

export default {
    title: 'Example/Left_Right_Section',
    component: LRsection,
    argTypes: {
        para1 : {control : 'text'},
        para2 : {control : 'text'},
        para3 : {control : 'text'},
        title1 : {control : 'text'},
        title2 : {control : 'text'},
        title3 : {control : 'text'},
        heading:{control : 'text'},

        
      },
};

const Template = (args) => ({
    Component: LRsection,
    props: args,
   
});

export const left_right_sec = Template.bind({});
left_right_sec.args = {
 
 
};