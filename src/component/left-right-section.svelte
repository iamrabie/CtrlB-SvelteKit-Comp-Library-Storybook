<script>

    /* exporting variables from left right comp's story so  that this comp becomes interactive and
    functional in the storybook */
    export let even_child_bg_color;
    export let odd_child_bg_color;

    //setting defalt values of the variables
    export let para1 = "Kabab and Curry started from humble roots in Santa Clara, with the aim of creating a distinct culinary experience that would bring the flavors of East to the Bay Area.";
    export let para2 = "Soon after its launch, our humble restaurant caught the attention of the patrons of the Bay Area as well as critics. We soon garnered a fan-following that has made us the preferred dining spot for South Asian culinary delights.";
    export let para3 = "Over the last decade our restaurant chain has witnessed a fast expansion, including new branches at the MCA Mosque in Santa Clara, Cupertino and the unique cafe dining experience of Kettle'e Cafe. Our bold flavors have wowed our patrons and made  us a mainstay restaurant for the culinary adventurists.";
    export let title1 = "Where it all started";
    export let title2 = "Growing in popularity";
    export let title3 = "Bringing the best of flavor to the Bay Area";
    export let heading = "Heading Text";

    let infoArray = [
        {
            imgUrl: "../../static/logo.png",
            imgAlt: "",
            title: title1,
            paragraph: para1,
        },
        {
            imgUrl: "../../static/logo.png",
            imgAlt: "",
            title: title2,
            paragraph: para2,
        },
        {
            imgUrl: "../../static/logo.png",
            imgAlt: "",
            title: title3,
            paragraph: para3,
        },
    ]

 /*    export let backgroundColor =  backgroundColor ? `background-color: ${backgroundColor}` : '';
    let bgColor = backgroundColor; */
</script>

    <div class="left-right-container">
    <h2 class="info-section-heading">{heading}</h2>

    {#each infoArray as info, i}
        <div class="info-row { (i % 2) == 0 ? 'even-child': 'odd-child' }" style = { (i % 2) == 0 ? 'background-color:' + even_child_bg_color : 'background-color:' + odd_child_bg_color  }>
            <img src="{info.imgUrl}" alt="{info.imgAlt}" class="info-image">
            <div class="info-text-container">
                <h3 class="info-row-heading">{info.title}</h3>
                <p class="info-row-paragraph">{info.paragraph}</p>
            </div>
        </div>
    {/each}
    </div>

<style>

.left-right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.info-row {
    width: 100%;
    margin: 0 auto;
    padding: 50px 15%;
    display: flex;
    justify-content: center;
 /*    @include for-size(tablet-portrait-down) {
            padding: 50px 5%;
            flex-direction: column;
            flex-wrap: wrap;
    } */
    /* @include for-size(tablet-landscape-up) {

    padding: 50px 5%;

    }

    @include for-size(tablet-desktop-up) {

    padding: 50px 15%;

    } */

}

/* .info-row:nth-child(even) {
    background-color:blueviolet;
} */
.even-child
{
    background-color:blueviolet;
 /*    .info-image {
        order: 1;
    }

    .info-text-container {
        order: 2;
    }
 */
  /*   @include for-size(tablet-portrait-down) {
            .info-text-container {
                 margin-left: 0;
            }
    } */
}

/* .info-row:nth-child(odd) {
    background-color:pink;
} */

.odd-child
{
    background-color: white;
/* 
    .info-image {
        order: 2;
    }

    .info-text-container {
        order: 1;
    } */
}

.info-text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
 /*    @include for-size(tablet-portrait-down) {
                width: 100%;
        } */

}

.info-row-heading {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
    margin-left: 14px;
 /*    @include for-size(tablet-portrait-down) {
                text-align: center;
    } */

}

.info-row-paragraph {
    font-size: 18px;
    font-weight: 400;
    width: 70%;
    line-height: 1.7;
    margin-left: 16px;
  /*   @include for-size(tablet-portrait-down) {
                text-align: center;
                width: 90%;
                margin: auto;

    }

        @include for-size(tablet-landscape-up) {

                width: 85%;


    }

     @include for-size(tablet-desktop-up) {

                width: 70%;

    } */

}

.info-image
{
    width: 300px;
    height: 300px;
}


</style>