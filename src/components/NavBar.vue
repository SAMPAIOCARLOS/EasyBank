<script>
import ButtonContact from './ButtonContact.vue';
import ListNav from './ListNav.vue';
import ListFull from './ListFull.vue';
  export default {
    name: 'NavBar',
    components: { ButtonContact, ListNav, ListFull },
    data() {
        return {
            itens_nav_list: [
                {name: 'Home', path: '#container_content_header'},
                {name: 'About', path: '#container_about'},
                {name: 'Contact', path: '#'},
                {name: 'blog', path: '#'},
                {name: 'Careers', path: '#'}
            ],
            show_listFull: false,
        }
    },
    methods: {
        toggle_btn() {
            const hamburguer = this.$refs.hamburguer
            hamburguer.classList.toggle("active")
            if(hamburguer.classList.contains('active')) {
                this.show_listFull = true
            }else {
                this.show_listFull = false
            }
        },
        addClassListFull(container_list_full) {
            container_list_full.classList.add('active')
        }
    }
  }
</script>

<template>
    <div id="container_center_main_nav">
        <div class="container_center_main">
            <nav>
                <div id="container_logo">
                    <img src="/src/assets/images/logo.svg" alt="">
                </div>

                <ListNav :itens_nav_list="itens_nav_list"/>
                
                <ButtonContact id="btn_component"/>

                <div class="hamburguer" @click="toggle_btn" ref="hamburguer">
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                </div>
            </nav>

            <ListFull :itens_obj_list="itens_nav_list" v-if="show_listFull" @mountedListFull="addClassListFull"/>
        </div>
    </div>
</template>

<style scoped>
#container_center_main_nav {
    background-color: #ffffff;
    /* position: fixed; */
    width: 100%;
}
nav {
    width: 100%;
    height: 15vh;
    /* border: 3px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

#container_logo > img {
    /* border: 2px solid red; */
    width: 13vw;
}






.hamburguer {
    display: none;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
}
.hamburguer.active {
    position: fixed;
    top: 3%;
    left: 90%;
}

.line-span {
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background-color: #3d3d3d;
    transition: 0.5s;
}





.hamburguer.active .line-span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}
.hamburguer.active .line-span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
}
.hamburguer.active .line-span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
}



@media(max-width: 900px) {
    .hamburguer {
        display: flex;
    }

    #btn_component {
        display: none;
    }
}

@media(max-width: 700px) {
    #list_nav {
        display: none;
    }

    #container_logo > img {
        width: 30vw;
    }

    nav {
        height: 10vh;
    }
}
</style>
