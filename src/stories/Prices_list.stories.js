import PricesList from '../component/prices-list.svelte';

export default {
    title: 'Example/Price_List',
    component: PricesList,
    argTypes: {
        list_card_bg_color : { control: 'color' },
        total_lists :
            {
                control : { type : 'range' , min : 1 , max : 5 , step : 1 },
            },
        text_color: { control : 'color'},
        button_bg_color : { control : 'color'},
        button_text_color : { control : 'color'},
        button_text : { control : 'text'},
        option1_text : { control : 'text' },
        option2_text : { control : 'text' },
        option3_text : { control : 'text' },
        card_heading_text : { control : 'text' },
        card_heading_color : { control : 'color' },
        card_subHeading_text : { control : 'text' },
        card_subHeading_color : { control : 'color' },
        card_text : { control : 'text' },
        list_heading_text : { control : 'text' },
        list_heading_color : { control : 'color' },
        please_enter_price : {control : 'text'},
        }
      };

const Template = (args) => ({
    Component: PricesList,
    props: args,
   
});

export const list = Template.bind({});
list.args = {
 
 
};
  