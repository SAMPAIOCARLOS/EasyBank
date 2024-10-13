<script>
    export default {
        name: 'Contact',
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
    <h1>contato</h1>

    <button @click="back(text)">
        voltar 
    </button>
</template>

<style scoped>

</style>