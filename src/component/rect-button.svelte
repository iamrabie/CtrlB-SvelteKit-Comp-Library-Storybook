<script>
    export let buttonText;
    export let buttonUrl;
    export let btn_bg;
    export let btn_text;
</script>

    <a href="{buttonUrl}" class="hero-cta" style="background-color:{btn_bg}; color:{btn_text}">{buttonText}</a>

<style>
/* @import './public/scss/theme.scss';
@import './public/scss/breakpoints.scss'; */

 .hero-cta {
    width: 250px;
    height: 60px;
    background-color: yellowgreen;
    color: green;
    border-radius: 5px;
    font-size: 24px;
    z-index: 3;
    display: block;
    /* margin: 0 auto; */
    line-height: 60px;
    text-align: center;
  }
</style>


