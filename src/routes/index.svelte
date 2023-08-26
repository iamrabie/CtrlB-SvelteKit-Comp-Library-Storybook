<script>
/* import Images_grid from '../component/imagesGrid.svelte'; */
import Img from '../component/imagess.svelte';

 /*  import Img from '../component/imagesGrid.svelte'; */
 import FaqComp from '../component/faq-comp.svelte'; 
 import Grid from '../stories/grid.svelte';
/* import OtherForm from '../component/otherForm.svelte'; */
/*  import PricesList from '../component/prices-list.svelte';  */
/* import Hero_Full from '../component/hero-fullscreen.svelte'; */
/* import LRsection from '../component/left-right-section.svelte'; */
    
    import PriceList from '../component/prices-list.svelte';
    import Hero from '../component/hero-two-columns.svelte';
    import LRsection from '../component/left-right-section.svelte';
    import Hero_Full from '../component/hero-fullscreen.svelte';
    import Hero_Half from '../component/hero-halfscreen.svelte';
    import Info1 from '../component/info-1.svelte'; 
    /*  import Nav from '../component/nav.svelte';   */
     import Nav from '../component/nav.svelte'; 
/*     import Info_1 from '../component/info-1.svelte'; */
/*      import Footer from '../component/footer-4-col.svelte'; */
      /* import FormInfo from '../component/info-with-form.svelte'; */
      /*   import Info from '../component/info-1-alt.svelte';
         import Info_Alt_2 from '../component/info-1-alt2.svelte';  */
          /* import Form from '../component/form-1.svelte'; */
        /*    import OnlyButton from '../component/onlybutton.svelte';
    import ParagraphButton from '../component/para-button.svelte';  */
  /*   import Tabs from '../component/Tab.svelte'; */

/* 
    import Dummy from '../component/dummy.svelte'; */
   //import BgForm from '../component/bgForm.svelte';
   /* import Luxor from '../stories/luxorNavbar.svelte'; */
  /*  import Navbar from '../stories/luxor.svelte' 

   
   let ListItems1= [

{
    href:'#',
    title: 'Home'
},


{
    href:'#',
    title: 'About'
}
]

let ListItems2= [

{
    href:'#',
    src:'../Luxor-Logo.png',
    alt:'Luxor logo'
}

]


let ListItems3= [

{
    href:'#',
    title: 'Contact'
},


{
    href:'#',
    title: 'Gallery'
}

];  */
 
  import StatBlock from '../component/stat-blocks.svelte';

  let y;

    var Stats = [
        {
          'title' : 'Years of Excellence',
          'startingNumber' : 0,
          'endingNumber' : 110

        },

        {
          'title' : 'Product SKUs',
          'startingNumber' : 0,
          'endingNumber' :150
        },

        {
          'title' : 'Team Members',
          'startingNumber' : 0,
          'endingNumber' : 130
        } 

        
] ; 


 


    import Overlay from '../stories/content-block-overlay.svelte';
    import Onlybutton from '../component/onlybutton.svelte';
    let heading3='THIS IS THE SAME HEADING';
    let heading1='This is a title for the next page';
    let text='This is a body of text';
    let button='THIS IS A BUTTON';
 
 


    let array = [
	            {
                    title: "Most Common Questions",
                    questionList: [
                        {
                            question: "Which location does the platform cover?",
                            answer: "Zoneomics provides national coverage on demand and is expanding coverage weekly. We can add any city within 7 days."
                        },
                        {
                            question: "Which location does the platform cover?",
                            answer: "More zoning data enables you to make better faster appraisal decisions. Stop visiting multiple city websites to find zoning maps. Easily access up-to-date permitted land uses, lot size, FAR, and building height of the property, all in one place.Understand the specific zoning of a property in any city in the U.S. Stop waiting in line at city zoning departments and battling through 2,000 pages of zone codes, and do your own zoning analysis with Zoneomic's platform!"
                        },
                        {
                            question: "How simple is it to use zoneomics?",
                            answer: "Zoneomics is designed to be very user-friendly. Most users get up and running on their own and like to make use of our tutorials and documentation. Our Client Success team is responsive to answer questions and help you make the most out of Zoneomics."
                        }
		                        ]
	            },


                {
                    title: "Billing Questions",
                    questionList: [
                        {
                            question: "Can I customize my payments?",
                            answer: "Most users pay annually to save money. Some people prefer the flexibility of paying monthly or using pay-as-you-go credits. If you require a customized package specific to your needs, reach out to our team, and we can search for options to help you maximize your potential using Zoneomics."
                        },
                        {
                            question: "What is your cancellation policy?",
                            answer: "Payment obligations for use of the Zoneomics Services are non-cancelable and Fees paid are non-refundable."
                        }
                    ]
                }

]
 

</script>


<!-- <Overlay  {heading3} {heading1} {text} {button}/>  -->
<FaqComp {array} />
<!-- <Hero_Half /> -->
<LRsection />
<!-- <Grid />  -->
<svelte:window bind:scrollY={y} />

 <div class={ y > 500 ? 'div' : 'div2'}>


 </div>

<!-- <PriceList /> -->
<Info1 />
<StatBlock {Stats } /> 
<!-- <Nav /> -->
<Hero_Full />
<Hero />
<!-- <Info1 /> -->
<!-- <Img /> -->
<!-- <Footer /> -->
<!-- <Img /> -->

<!-- <div class="main-container">
  <h1>SASS</h1>
  <p>it's interesting</p>
</div>
<div class="secondDiv">
  <h1>hai tamana hme tme dulhan bnaien</h1>
  <h2>Tere hathoan p mehndi apney naam ki sajaien</h2>
  <h3>teri ley ley balaien</h3>
  <h1>Tere sadqey utarien, hai tamana hme tme apna bnaien!</h1>
</div>

<style lang="scss">
  @import '../../static/secondDiv';

  .main-container 
  {
    background-color: aquamarine;
    height:30vh;

    p
    {
      color:red;
    }
  }

</style> -->

<!-- <Form />  -->
<!-- <Info />  -->
<!-- <FormInfo /> -->
<!-- <Info_Alt_2 />  -->
<!--  <Tabs />  -->
<!-- <Info1 />
<Hero_Half />
<Hero_Full />
<LRsection />
<Hero /> -->
<!-- <LRsection />  -->
<!-- <Hero_Full /> -->
<!-- <Dummy /> -->
<!-- <BgForm />
 -->


<!-- <Navbar List_Items1={ListItems1} 
        List_Items2={ListItems2} 
        List_Items3={ListItems3}/> 


 <Luxor />  -->

<!--*********************************************-->
<!-- Stat block-->

<!-- <OnlyButton />
<ParagraphButton /> -->




<!-- <style>
  div
  {
    height:150vh;
    background-color: darkolivegreen;
  }

  .div2
  {
    background-color: khaki;
  }
</style> -->
