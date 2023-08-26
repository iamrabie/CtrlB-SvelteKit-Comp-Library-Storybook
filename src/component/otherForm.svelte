<script>

</script>

 <!--    this div used for displayinhg dummy text for the form and all the divs are placed next to each other 
    but vertically
 -->
    <div class="flexCol">

       <div class="flex">
            <div class="dummy-num">
                  01
            </div>
            <div class="dummy-text">
                 513-900-1991
            </div>
       </div>

        <div class="flex">
             <div class="dummy-num">
                 02
             </div>
             <div class="dummy-text">
                 info@luxorstonegroup.com
             </div>
        </div>

        <div class="flex">
             <div class="dummy-num">
                 03
             </div>
             <div class="dummy-text">
                 2126 Stapleton Court,Cincinnati,Ohio 45240
             </div>
        </div>

        <div class="flex">
            <div class="dummy-num">
                 04
            </div>
            <div class="dummy-text">
                <div class="flexColumn"></div>
                      <div>
                          Mon-Fri: 9am - 6pm
                      </div>
                      <div>
                          Sat: 10am - 4pm
                      </div>
                </div>
            </div>
        </div>

 
<style>

    
  .flexCol
    {
        display:flex;
        flex-direction: column;
        margin-top: 29%;
        margin-left: 5%;
    }

    .flexColumn
    {
        display: flex;
        flex-direction: column;
    }


    .dummy-num
    {
        width:80px;
        padding-bottom: 34px;
        text-align: center;
        color:white;
    }

    .dummy-text
    {
        width:360px;
        color:white;
        font-weight: bold;
    }

    .flex
    {
        display: flex;
    }

    @media screen and (min-width:350px) and (max-width:460px)
    {

    .flexCol
    {
        margin-left: 12%;
        margin-top: 0%;
    }

    
    .dummy-num
    {
        width:60px;
        padding-bottom: 18px;
        font-size: 12px;
    }

    .dummy-text
    {
        font-size: 12px;
    }


    }

    @media screen and (min-width:461px) and (max-width:600px)
    {

    .flexCol
    {
        margin-left: 17.5%;
        margin-top: 0%;
    }

    
    .dummy-num
    {
        width:60px;
        padding-bottom: 18px;
        font-size: 13px;
    }

    .dummy-text
    {
        font-size: 13px;
    }


    }

    @media screen and (min-width:601px) and (max-width:800px)
    {

    .flexCol
    {
        display:flex;
        flex-direction: column;
        margin-top:45%;
        margin-left: 6%;
    }

    
    .dummy-num
    {
        width:60px;
        padding-bottom: 38px;
        text-align: center;
        color:white;
        font-size:12px;
    }

    .dummy-text
    {
        width:380px;
        color:white;
        font-weight: bold;
        font-size:12px;
    }

    }


    @media screen and (min-width:801px) and (max-width:1000px)
    {

    .flexCol
    {
        display:flex;
        flex-direction: column;
        margin-top:38%;
        margin-left: 5%;
    }

    
    .dummy-num
    {
        width:60px;
        padding-bottom: 38px;
        font-size:14px;
    }

    .dummy-text
    {
        width:380px;
        color:white;
        font-weight: bold;
        font-size:14px;
    }

    }


    @media screen and (min-width:1001px) and (max-width:1150px)
    {

    .flexCol
    {
        display:flex;
        flex-direction: column;
        margin-top:36%;
        margin-left: 8%;
    }

    
    .dummy-num
    {
        padding-bottom: 40px;
        font-size:15px;
    }

    .dummy-text
    {
        font-size:15px;
    }

    }

</style>