<script>
    export default {
        name: 'IconsSocial',
        data() {
            return {
                path_imgs: ['logo-facebook', 'logo-youtube', 'logo-twitter', 'logo-pinterest', 'logo-instagram']
            }
        }
    }
</script>

<template>
    <div id="container_icons_social">
        <ul>
            <li v-for="(path, index) in path_imgs" :key="index">
                <ion-icon :name="path"></ion-icon>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#container_icons_social {
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between
}
li {
    font-size: 2vw;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.5s;
}
li:hover {
    color: rgb(66, 211, 182);
    scale: 1.2;
}
</style>