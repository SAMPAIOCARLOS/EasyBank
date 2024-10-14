<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
    export default {
        name: 'DetailsBlog',
        components: { NavBar, TheFooter },
        data(){
            return {
                text: "home"
            }
        },
        props: ['id']
    }
</script>

<template>
    <NavBar />

    <div id="container_details">
        <div class="container_center_main">
            <div id="container_content">
                <h1>News Details</h1>
                
                <div class="card">
                    <img :src="$route.query.img_card" alt="Imagem do Card" class="card-image">
                    <span class="card-span">{{ $route.query.text_span }}</span>
                    <h2 class="card-title">{{ $route.query.title }}</h2>
                    <p class="card-description">{{ $route.query.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <TheFooter />
</template>

<style scoped>
#container_details {
    width: 100vw;
    min-height: 50vh;
    background-color: aliceblue;
}

#container_content {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    padding-bottom: 100px;
}

h1 {
    font-size: 4vw;
}
.card {
    background-color: #fff;
    border-radius: 10px; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 80%;
    padding: 20px;
    text-align: center;
}

.card-image {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
}

.card-span {
    display: block;
    margin: 10px 0;
    font-size: 16px; 
    color: #666; 
}

.card-title {
    font-size: 3vw;
    margin: 10px 0;
    color: #333; 
}

.card-description {
    font-size: 1.4vw; 
    color: #555; 
}
@media(max-width: 900px) {
    h1 {
        font-size: 8vw;
    }

    .card-title {
        font-size: 4vw;
    }
    .card-description {
        font-size: 2vw;
    }

}

@media(max-width: 600px) {
    h1 {
        font-size: 9vw;
    }

    .card-title {
        font-size: 5vw;
    }
    .card-description {
        font-size: 2.4vw;
    }
    #container_content {
        gap: 30px;
    }
}
</style>