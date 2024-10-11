<script>
    export default {
        name: 'CardAbout',
        props: {
            data_cards_about: {type: Array, required: true}
        }
    }
</script>

<template>
    <div class="card_about" v-for="item_card_about in data_cards_about" :key="item_card_about.title">
        <div class="box_icon_about">
            <img :src="item_card_about.url_img" alt="bank icons">
        </div>

        <h2>{{ item_card_about.title }}</h2>

        <p class="p_text_content_about">{{ item_card_about.text_content }}</p>
    </div>
</template>


<style scoped>
.card_about {
  /* border: 2px solid red; */
  width: 22%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  
}
.box_icon_about > img {
  width: 3.5vw;
}
h2 {
  font-weight: 100;
  font-size: 2vw;
}
.p_text_content_about {
  font-size: 1.2vw;
}

@media(max-width: 1200px) {
    .card_about{
        width: 40%;
    }
    .box_icon_about > img {
        width: 7.5vw;
    }
    h2 {
        font-size: 3.5vw;
    }
    .p_text_content_about {
        font-size: 2vw;
    }
    
}

@media(max-width: 850px) {
    .card_about{
        width: 100%;
        gap: 5vw;
        text-align: center;
    }
    .box_icon_about > img {
        width: 9.5vw;
    }

    h2 {
        font-size: 4.5vw;
    }
    .p_text_content_about {
        font-size: 3vw;
    }
}

@media(max-width: 400px) {
    .box_icon_about > img {
        width: 11.5vw;
    }

    h2 {
        font-size: 5.5vw;
    }
    .p_text_content_about {
        font-size: 4vw;
    }
}
</style>