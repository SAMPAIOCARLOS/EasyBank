<script>
import ButtonContact from './ButtonContact.vue';
import ListNav from './ListNav.vue';
export default {
    name: 'ListFull',
    components: { ButtonContact, ListNav },
    props: {
        itens_obj_list: {type: Object, required: true}
    },
    mounted() {
        const container_listFull = this.$refs.container_listFull
        this.$emit('mountedListFull', container_listFull)
    }
}
</script>

<template>
    
    <div id="container_listFull" ref="container_listFull">

        <ListNav :itens_nav_list="itens_obj_list" class="listFull_componente"/>

        <ButtonContact />

    </div>

</template>

<style scoped>
#container_listFull {
    width: 40%;
    height: 100%;
    position: fixed;
    left: 100%;
    top: 0%;
    background-image: linear-gradient(to bottom, #f0f0f0, #eff9ff);
    z-index: 100;
    transition: 1s;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

#container_listFull.active {
    left: 60%;
}

.listFull_componente {
    display: none !important;
}
@media(min-width: 900px) {
    #container_listFull {
        display: none;
    }
}

@media(max-width: 700px) {
    .listFull_componente {
        display: flex !important;
        flex-direction: column;
        text-align: center;
    }
}

@media(max-width: 600px) {
    #container_listFull {
        width: 60%;
    }

    #container_listFull.active {
        left: 40%;
    }
}
@media(max-width: 400px) {
    #container_listFull {
        width: 100%;
        border-radius: 0;
    }

    #container_listFull.active {
        left: 0%;
    }
}
</style>