<script>
import CardAbout from './CardAbout.vue';
    export default {
        name: 'About',
        components: { CardAbout },
        props: {
            data_cards_about: {type: Array, required: true}
        }
    }
</script>

<template>
    <section id="container_about">
        <div class="container_center_main">
          <div id="container_text_about">
            <aside id="text_about_question">
              <h1>Why choose EastBank?</h1>

              <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </aside>
            <aside id="container_cards_about">

              <CardAbout :data_cards_about="data_cards_about"/>

            </aside>
          </div>
        </div>
    </section>
</template>

<style scoped>
#container_about {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  min-height: 100vh;
}

#container_text_about {
  /* border: 3px solid rgb(4, 0, 255); */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 100px;
}

#text_about_question {
  /* border: 2px solid black; */
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
h1 {
  font-size: 3.5vw;
  font-weight: 100;
}

p {
  font-size: 1.2vw;
  color: rgb(59, 59, 59);
}
#container_cards_about {
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

@media(max-width: 1200px) {
  #text_about_question {
    width: 70%;
  }
  h1 {
    font-size: 4.5vw;
  }

  p {
    font-size: 2vw;
  }

  #container_text_about {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media(max-width: 850px) {
  #container_text_about {
    margin-top: 0px;
  }

  #container_cards_about {
    justify-content: center;
  }
  #text_about_question {
    width: 100%;
  }

  h1 {
    font-size: 7.5vw;
    text-align: center;
  }

  p {
    font-size: 3vw;
  }
}

@media(max-width: 400px) {
  #container_text_about {
    gap: 20px;
  }
  h1 {
    font-size: 8.5vw;
  }

  p {
    font-size: 4vw;
  }
}
</style>