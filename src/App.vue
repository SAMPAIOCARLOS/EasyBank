<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
  export default {
    name: 'App',
    components: { TheHeader, TheMain, TheFooter },
    computed: {
      showHeaderAndMain() {
        // Defina quais rotas devem esconder o TheHeader e TheMain.
        // Por exemplo, se estiver na rota de detalhes, não mostrar o header/main.
        const hideOnRoutes = ['DetailsBlog', 'Contact']; // Nome da rota onde você não quer exibir os componentes
        return !hideOnRoutes.includes(this.$route.name);
      }
    }
  }
</script>

<template>
  <TheHeader v-if="showHeaderAndMain"/>

  <TheMain v-if="showHeaderAndMain"/>

  <TheFooter v-if="showHeaderAndMain"/>

  <router-view></router-view>
</template>

<style scoped>

</style>
