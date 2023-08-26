<script>
    import Form_2 from "./form-2.svelte";
    
    //giving variables default text
    export let info_heading = 'Info Heading';
    export let tiny_top_text = 'info text ..';
    export let info_para = 'Info paragraph providing information about the form';
     //variables exported from storybook to get the comp in storybook and comp is interactive and functional in the storybook.
    export let backgroundColor;
    export let tiny_top_text_color;
    export let info_para_color;
    export let info_heading_color;
    export let first_name;
    let firstName = first_name;
    export let last_name;
    let lastName = last_name;
    export let email_address;
    let email = email_address;
    export let phone_number;
    let phoneNumber =  phone_number;
    export let message_area;
    let messageArea = message_area;
    </script>

    <!--Main container -->
    <div class="info-container" style="background-color:{backgroundColor}">
        <!-- form container -->
        <div class="form-container">
           <!--  form comp used here to get the form and passing value to form input
            field dynamically within storybook -->
            <Form_2 {firstName}
                    {lastName}
                    {email}
                    {messageArea}
                    {phoneNumber}></Form_2>
        </div>
        <hr class="separator">
       <!--  second container for text -->
        <div class="info-text-container">
                <p class="tiny-text" style="color:{tiny_top_text_color}">{tiny_top_text}</p>
                <h2 class="info-heading" style="color:{info_heading_color}">{info_heading}</h2>
                <p class="info-para" style="color:{info_para_color}">{info_para}</p>
        </div>
    </div>
    
    <style>
 
    
    .separator {
        height: 500px;
        width: 1px;
        background-color: #eaeaea;
        order: 2;

    }
    
    .info-container {
        display: flex;
        justify-content: center;
        width: 100%;
        background: purple;
        padding: 50px 15%;
    
    }
    
    .form-container {
        display: flex;
        justify-content: left;
        width: 50%;
           
    }
 /*    .info-img {
        // width: 400px;
        // height: 400px;
    }
     */
    .info-text-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30px;
       
    }
    
    .tiny-text {
        color: white;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .info-heading {
        color: aquamarine;
    }
    
    .info-para {
        margin: 50px 0;
        color:white;

    }
    
    
    
    
    </style>