<script>
    export default {
        name: 'Logo',
        props: {
            path_img_logo: { type: String, require: true }
        }
        
    }
</script>

<template>
    <div id="container_logo">
        <!-- <img src="/src/assets/images/logo.svg" alt=""> -->

        <img :src="path_img_logo" alt="">
    </div>
</template>

<style scoped>

#container_logo > img {
    /* border: 2px solid red; */
    width: 13vw;
}

@media(max-width: 700px) {
    #container_logo > img {
        width: 30vw;
    }
}
</style>