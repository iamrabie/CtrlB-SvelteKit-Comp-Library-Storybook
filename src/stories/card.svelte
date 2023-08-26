<script> 

    export let backgroundColor;

    console.log('bg' , backgroundColor);
    export let IWidth;

    console.log('inner Width' , IWidth);
    

   /*  export let primary = false;
    let mode = primary ? 'outerContainer' : '';  */

    let stylee = backgroundColor ? `background-color: ${backgroundColor}` : '';
    let style2 = IWidth ? `width : ${IWidth}` : '' ;

</script>


<div class={["outerContainer"]}>

    <div class={['innerContainer']} {stylee} {style2} style="width:{IWidth}%">
     
        <slot name = 'grids'></slot>

    </div>


</div>


<style>

    .outerContainer
    {
        width:100%;
        background-color: yellow;
        height: 100%;
        position:absolute;
        top:0%;
        left:0%;
       
    }

    .innerContainer
    {
        width: 80%;
        background-color:black;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
      
        
    }




</style>