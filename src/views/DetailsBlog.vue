<script>
    export default {
        name: 'DetailsBlog',
        data(){
            return {
                text: "home"
            }
        },
        props: ['id'],
        methods: {
            back(home) {
                this.$router.push({ name: 'home', params: { home } });
            }
        }
    }
</script>

<template>

    <div>
        <h1>Detalhes da Notícia</h1>
        <p>ID da notícia: {{ id }}</p>


        <h1>{{ $route.query.title }}</h1>
        <!-- Aqui você pode exibir mais informações com base no ID -->
    </div>


    <button @click="back(text)">
        voltar 
    </button>
</template>

<style scoped>

</style>