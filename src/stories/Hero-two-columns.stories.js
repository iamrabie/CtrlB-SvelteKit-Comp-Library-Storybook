import Hero_Two_Cols from '../component/hero-two-columns.svelte';

export default {
    title: 'Example/Hero_TwoColumns',
    component: Hero_Two_Cols,
    argTypes: {
        backgroundColor: { control: 'color' },
        h1 : { control : 'text' },
        p : { control : 'text'},
        cta_text : { control : 'text' },
        h1_color : { control : 'color' },
        p_color : { control : 'color'},
        cta_text_color : { control : 'color' },
        marginLeft : { 
            control : { type : 'select' },
            options : [ 5 , 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 
                        85, 90, 95, 100]

        }
    
      },
};

const Template = (args) => ({
    Component: Hero_Two_Cols,
    props: args,
   
});

export const hero_Cols = Template.bind({});
hero_Cols.args = {
 
 
};