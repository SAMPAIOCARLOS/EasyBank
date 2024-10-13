<script>
    export default {
        name: 'Blog',
        props: {
            data_cards_blog: { type: Array, required: true }
        },
        methods: {
            router_blog(item_card_blog) {
                alert(`teste ${item_card_blog.id}`)
                this.$router.push({ 
                    name: 'DetailsBlog',
                    params: { id: item_card_blog.id },
                    query: { 
                        text_span: item_card_blog.text_span,
                        title: item_card_blog.title, 
                        description: item_card_blog.text_content 
                    }
                 });
            }
        }
    }
</script>

<template>
    <section id="container_blog">
        <div class="container_center_main">
            <div id="container_text_blog">
                <aside>
                    <h1>Latest Articles</h1>
                </aside>

                <aside id="container_cards_blog">
                    <div class="card_blog" v-for="item_card_blog in data_cards_blog" :key="item_card_blog.text_span" @click="router_blog(item_card_blog)">
                        <div class="box_img_blog">
                            <img :src="item_card_blog.url_img" alt="">
                        </div>

                        <div class="text_content_blog">
                            <span>{{ item_card_blog.text_span }}</span>

                            <h3>{{ item_card_blog.title }}</h3>

                            <p>{{ item_card_blog.text_content.length > 129 ? item_card_blog.text_content.slice(0, 129) + '...' : item_card_blog.text_content }}</p>
                        </div>
                    </div>    
                </aside>
            </div>
        </div>
    </section>
</template>

<style scoped>
#container_blog {
    background-color: aliceblue;
    width: 100vw;
    min-height: 100vh;
}

#container_text_blog {
/* border: 3px solid rgb(4, 0, 255); */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 100px;
}

h1 {
    font-size: 3.5vw;
    font-weight: 100;
    margin-top: 50px;
}

#container_cards_blog {
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1vw;
    flex-wrap: wrap;
    padding-bottom: 5vw;
}

.card_blog {
    width: 23%;
    min-width: 250px;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.box_img_blog {
    width: 100%;
    height: 50%;
}

.box_img_blog > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-right-radius: 1vw;
    border-top-left-radius: 1vw;
}

.text_content_blog {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    border-bottom-right-radius: 1vw;
    border-bottom-left-radius: 1vw;
    background-color: #ffffff;
    padding: 2vw;
}
span {
    font-size: 0.8vw;
}
h3 {
    transition: all 0.3s;
    font-size: 1.2vw;
}
h3:hover {
    color: rgb(66, 211, 182);
}

p {
    font-size: 1vw;
}

@media(max-width: 1200px) {
span {
    font-size: 1vw;
}
h3 {
    transition: all 0.3s;
    font-size: 1.5vw;
}

p {
    font-size: 1.2vw;
}
}

@media(max-width: 961px) {
    .card_blog {
        width: 45%;
    }

    span {
        font-size: 1.4vw;
    }
    h3 {
        transition: all 0.3s;
        font-size: 2vw;
    }

    p {
        font-size: 1.5vw;
    }
    }

@media(max-width: 632px) {
    .card_blog {
        width: 75%;
    }

    span {
        font-size: 2vw;
    }
    h3 {
        transition: all 0.3s;
        font-size: 3vw;
    }

    p {
        font-size: 2.5vw;
    }
    .text_content_blog {
        gap: 3vw;
    }
}
</style>