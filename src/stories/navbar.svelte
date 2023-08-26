<script>
     import Nav from '../component/nav.svelte';
     export let backgroundColor;
     let BgStyle = backgroundColor ? `background-color: ${backgroundColor}` : '';
     export let list_elements_color;
     let list_item_color = list_elements_color;
     export let burger_icon_color;
     let menu_icon_color = burger_icon_color;
</script>

<Nav {BgStyle}
     {list_item_color}
     {menu_icon_color}/>