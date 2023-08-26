import StatBlock from './stat-block.svelte';


export default {
    title: 'Example/Stat_Block',
    component: StatBlock,
    argTypes: {
      backgroundColor: { control: 'color' },
      font_family: {
        control : { type: 'select' },
        options : [ 'Courier New', 'Franklin Gothic Medium' , 'sans-serif' , 'Arial' , 'Arial Narrow'],
      },
      damping: {
        control : { type : 'select' },
        options : [ 0.01 , 0.02 , 0.03 , 0.04 , 0.05 , 0.06 , 0.07 , 0.08 , 0.09,
                     0.1 , 0.2 , 0.3 , 0.4 , 0.5 , 0.6 , 0.7 , 0.8 , 0.9]
      }
    },
  };

const Template = (args) => ({
    Component: StatBlock,
    props: args,
   
});

export const Courier_New_font = Template.bind({});
Courier_New_font.args = {
    
        font_family : 'Courier New',
 
};

export const Frankin_Gothic_Medium_font = Template.bind({});
Frankin_Gothic_Medium_font.args = {
    
        font_family :  'Frankin Gothic Medium',
 
};

export const sans_serif_font= Template.bind({});
sans_serif_font.args = {
    
        font_family :  'sans-serif',
 
};

export const Arial_font= Template.bind({});
Arial_font.args = {
    
        font_family :  'Arial',
 
};

export const Arial_Narrow_font= Template.bind({});
Arial_Narrow_font.args = {
    
        font_family :  'Arial Narrow',
 
};

