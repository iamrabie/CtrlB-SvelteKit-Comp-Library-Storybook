<script>

    export let Fname = '';
    export let Lname = '';
    export let email ='';
    export let phone = '';
    export let text = '';




    let FNerrorMsg = '' ;
    let showFNMessage;
    function FNmessage()
    {
       var nameRGEX = /^[a-zA-Z ]{1,10}$/;
       var FnameResult = nameRGEX.test( Fname );

       if (FnameResult)
       {

           if ( Fname.length >0  && Fname.length < 3)
           {
               FNerrorMsg = 'first name should contain minimum 3 characters';
               showFNMessage = false;
           } 

           if (Fname.length >= 3 && Fname.length <= 10)
           {
               FNerrorMsg = 'valid name!';
               showFNMessage = true;

           }

       
       }

       else
       {
           FNerrorMsg = 'invalid';
           showFNMessage = false;

           if ( Fname.length > 10)
           {
               FNerrorMsg = 'first name should not exceed more than 10 characters';
               showFNMessage = false;
       
           }    
       }

    }

    


    let showLNMessage;
    let LNerrorMsg = '';
    function LNmessage()
    {
       var LnameRGEX = /^[a-zA-Z ]{1,10}$/;
       var LnameResult = LnameRGEX.test( Lname );

       if (LnameResult)
       {

           if ( Lname.length > 0  && Lname.length < 3)
           {
               LNerrorMsg = 'last name should contain minimum 3 characters';
               showLNMessage = false;
           } 

           if (Lname.length >= 3 && Lname.length <= 10)
           {
               LNerrorMsg = 'valid name';
               showLNMessage = true;
               //console.log("exceeded than 10");

           }

       
       }

       else
       {
           LNerrorMsg = 'invalid';
           showLNMessage = false;

           if ( Lname.length > 10)
           {
               LNerrorMsg = 'last name should not exceed more than 10 characters';
               showLNMessage = false;
       
           }    
       }
        

   }


    var phoneResult;
    let validatePh;
    let PhoneMessage = '';
    function validatePhone()
    {
       var phoneRGEX = /^[0][3][0-9]{9}/g;
       phoneResult = phoneRGEX.test(phone);
       console.log("phone:"+phoneResult );
       console.log("phone value" , phone);

       
       if (phoneResult && phone.length == 11)
       {
           PhoneMessage = 'valid phone no. ';
           validatePh = true;

       } 
       else
       {
           PhoneMessage = 'invalid phone no.';
           validatePh = false;
       }

       if (phone.length == 0)
       {
           PhoneMessage = '';
           validatePh = 'false';
       }

  
    }



    var emailResult;
    let validateE;
    let EmailErrorMsg = '';
    function validateEmail()
    {
       var emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       emailResult = emailRGEX.test(email);


       if (emailResult)
       {
           EmailErrorMsg = 'valid email address';
           validateE = true;
       }
       else
       {
           EmailErrorMsg = 'invalid email address';
           validateE = false;
       }

       if (email.length == 0)
       {
           EmailErrorMsg = '';
           validateE = false;
       }


    }



       
</script>


<form action="">
   <label>Send us a message</label>
   <input type="text"
          placeholder="First Name" 
          bind:value={Fname}
          on:input={FNmessage} required/>
   
   {#if showFNMessage}
   <p class="message">{FNerrorMsg}</p>
   {:else}
   <p class="Errormessage">{FNerrorMsg}</p>
   {/if} 
   
                 <!-- xxxxxxxxxxxxxxxxxx -->


   <input type="text" 
          placeholder="Last Name" 
          bind:value={Lname} 
          on:input={LNmessage} required>

   {#if showLNMessage}
   <p  class="message">{LNerrorMsg}</p>
   {:else} 
   <p  class="Errormessage">{LNerrorMsg}</p>
   {/if}
 


                 <!--  xxxxxxxxxxxxxxxxxxxx -->


   <input type="email" 
          placeholder="Email" 
          bind:value={email} 
          on:input={validateEmail} required/>


   {#if validateE}
   <p  class="message">{EmailErrorMsg}</p>
   {:else}
   <p class="Errormessage">{EmailErrorMsg}</p>
   {/if}
                   <!--xxxxxxxxxxxxxxxxxxxx -->
   
   
   <input type="tel" 
          placeholder="03xxxxxxxxx" 
          bind:value={phone} 
          on:input="{validatePhone}" required/>

   {#if validatePh}
   <p  class="message">{PhoneMessage}</p>
   {:else}
   <p  class="Errormessage">{PhoneMessage}</p>
   {/if}


                    <!--  xxxxxxxxxxxxxxxxxxxx -->

   
   <textarea cols="30"
             rows="5"
             placeholder="Enter your message here" 
             bind:value={text}></textarea>


   <button>Send</button>
</form>



<style>
   form
   {
       width:67%;
       float:right;
       display:flex;
       flex-direction: column;
       margin-top: 11%;
       background-color:aliceblue;
   }

   input
   {
       width:85%;
       height:32px;
       margin-top: 10px;
       margin-left: auto;
       margin-right: auto;
       background-color: white;
       border: 0px;
   }

   input::placeholder
   {
       font-size: 12px;
       padding-left: 5px;
       color:gray;
       font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }

 
   textarea
   {
       width:87%;
       margin-top: 13px;
       margin-left: auto;
       margin-right: auto;
       border: 0px;
   }

   textarea::placeholder
   {
       font-size: 12px;
       padding-left: 8px;
       color:gray;
       font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }

   button
   {
       width:89%;
       margin-top: 20px;
       margin-left: auto;
       margin-right: auto;
       height: 30px;
       margin-bottom: 8%;
       border: 0px;
       color:white;
       font-weight: bold;
       background-color:steelblue;
   }

   label
   {
       font-size: 26px;
       text-indent: 40px;
       font-weight: bold;
       margin-top: 8%;
       margin-bottom: 3%;
   }


   .message
   {
       font-size: 10px;
       color:green;
       margin-bottom: 0px;
       text-indent: 33px;
       margin-top: 2px;
      
   }

   .Errormessage
   {
       font-size: 10px;
       color:red;
       margin-bottom: 0px;
       text-indent: 33px;
       margin-top: 2px;
      
   }



   
   @media screen and (min-width:350px) and (max-width:460px)
   {
       form
       {
           float:none;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 10%;
           margin-top: 9%;
           width: 75%;
       }

       input
       {
           height:28px;
           margin-top: 13px;
       }

       label
       {
       font-size: 18px;
       text-indent: 26px;
       font-weight: bold;
       margin-top: 8%;
       }


       input::placeholder
       {
           font-size: 10px;
       }

       textarea
       {
           margin-top: 16px;
           height:44px;
       }

       textarea::placeholder
       {
           font-size: 10px;
       }

       button
       {
           font-size:11px;
       }
  }

  @media screen and (min-width:461px) and (max-width:600px)
   {

       form
       {
           float:none;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 6%;
           margin-top: 5%;
           width: 65%;
       }

       input
       {
           height:28px;
           margin-top: 13px;
       }

       label
       {
           font-size: 20px;
           text-indent: 28px;
           font-weight: bold;
           margin-top: 8%;
       }


       input::placeholder
       {
           font-size: 12px;
       }

       textarea
       {
           margin-top: 16px;
           height:46px;
       }

       textarea::placeholder
       {
           font-size: 12px;
       }

       button
       {
           font-size:13px;
       }
   
   }


   @media screen and (min-width:601px) and (max-width:800px)
   {

       form
       {
           width:92.5%;
           margin-top: 14%;

       }

       label
       {
           font-size: 20px;
           text-indent: 24px;

       }

       input
       {
           margin-top: 13px;
       }

       input::placeholder
       {
           font-size: 11px;
       }

       textarea::placeholder
       {
           font-size: 11px;
       }

       button
       {
           font-size: 13px;
       }


   }


   
   @media screen and (min-width:801px) and (max-width:1000px)
   {

       form
       {
           width:80%;
           margin-top: 14%;

       }

       label
       {
           font-size: 22px;
           text-indent: 28px;

       }

       input
       {
           margin-top: 15px;
       }

       input::placeholder
       {
           font-size: 12px;
       }

       textarea::placeholder
       {
           font-size: 12px;
       }

       button
       {
           font-size: 14px;
       }


   }

   @media screen and (min-width:1001px) and (max-width:1150px)
   {
       label
       {
           font-size: 23px;
           text-indent: 30px;

       }

       form
       {
           margin-top: 14%;
           width:80%;
       }

       button
       {
           font-size: 15px;
       }


   }
   
   
</style>