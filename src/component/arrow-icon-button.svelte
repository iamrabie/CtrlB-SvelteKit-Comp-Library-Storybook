<script>

    export let buttonText = 'submit';
    export let buttonUrl;
    export let btn_text_color;
    export let arrowColor;
</script>

<a href="{buttonUrl}" class="button" style="color:{btn_text_color}">{buttonText}<img src="../../static/arrow-right-long.svg" class="arrow" alt="Go to {buttonText}" style="color:{arrowColor}"></a>


<style>
.arrow {
  width: 15px;
  transition: transform 0.2s ease-in;
}

.button:hover .arrow{
    transform: scale(1.4) translateX(3px);
}

.button {
    color:wheat;
    text-decoration: none;
    font-size: 20px;
}

.button:hover {
    text-decoration: none;
    color:green;
}
</style>