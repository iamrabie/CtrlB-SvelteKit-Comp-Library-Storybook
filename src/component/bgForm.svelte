<script>
  
    //This is the main form component where all the other two components are impoted for two different sections.
    import  OtherForm from './otherForm.svelte';
    import Form from '../stories/form.svelte';



</script>



<div class="bg">
    <div class="flex">
      <!-- section 1 -->
      <!--  Here in this section a form comp is used so that form is shown in this half of the comp -->
      <div class="formBlock">  
        <slot name="A">
            <Form />
        </slot>
      </div>
      <!-- section 2 -->
      <!--  And in this section a dummy text comp is used so show some text related to the form or any other 
       information like email, phone , address etc -->
      <div class="dummyBlock">
        <slot name="B">
            <OtherForm />
         </slot>
      </div>
    </div>
</div>
<style>
    .bg
    {
        background-image: url('../../static/bg.jpg');
        position: absolute;
        top:0%;
        left: 0%;
        right: 0%;
        height: 100%;
        background-size: cover;
        z-index: -2;
    }
  
    .flex
    {
        display:flex;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .formBlock
    {
        width:50%;
        height:100%;
    }

    .dummyBlock
    {
        width:50%;
        height:100%;
    }

    @media screen and (min-width:350px) and (max-width:600px)
    {

    .formBlock , .dummyBlock
    {
        width:100%;

    }

    .flex
    {
        display:flex;
        flex-direction: column;
    }

    }



</style>