<script>
import Navbar from './luxor.svelte';

  
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

]; 

export let backgroundColor;
/* let backgroundStyle = backgroundColor ? `${backgroundColor}` : ''; */
let backgroundStyle = backgroundColor ? `background-color: ${backgroundColor}` : '';

</script>


<Navbar List_Items1={ListItems1}
        List_Items2={ListItems2} 
        List_Items3={ListItems3}
        {backgroundStyle} /> 

