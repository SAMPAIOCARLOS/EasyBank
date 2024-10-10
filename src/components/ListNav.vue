<script>
export default {
    name: 'ListNav',
    props: {
        itens_nav_list: {type: Object, required: true}
    }
}
</script>

<template>
    <ul id="list_nav">
        <li v-for="i_navList in itens_nav_list" :key="i_navList.name">
            <a :href="i_navList.path" class="item_li">{{ i_navList.name }}</a>
        </li>
    </ul>
</template>

<style scoped>
#list_nav {
    display: flex;
    gap: 1vw;
    list-style: none;
}
.item_li {
    padding: 0 0.5vw 0.2vw 0.5vw;
    border-bottom: 3px solid transparent;
    transition: all 0.5s;
    color: #00000080;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2vw;
}
.item_li:hover {
    border-bottom: 3px solid rgb(21, 197, 162);
    color: #000000;
}
@media(max-width: 900px) {
    .item_li {
        font-size: 2vw;
    }
}
@media(max-width: 700px) {
    .item_li {
        font-size: 3vw;
    }
}

</style>