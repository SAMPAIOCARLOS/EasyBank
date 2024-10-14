<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
    export default {
        name: 'Careers',
        components: { NavBar, TheFooter },
        data() {
            return {
                text: 'home'
            }
        },
        methods: {
            back(home) {
                alert()
                this.$router.push({ name: 'home', params: { home } });
            }
        }
    }
</script>

<template>
    <NavBar />
    <div id="container_Careers">
        <h1>Careers</h1>
        <button @click="back(text)">
            voltar
        </button>
    </div>
    <TheFooter />
</template>

<style scoped>
#container_Careers {
    width: 100vw;
    min-height: 100vh;
}
</style>