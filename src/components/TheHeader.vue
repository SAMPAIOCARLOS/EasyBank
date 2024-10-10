<script>
import NavBar from './NavBar.vue';
import ButtonContact from './ButtonContact.vue';
  export default {
    name: 'TheHeader',
    components: { NavBar, ButtonContact }
  }
</script>

<template>
    <header>
        <NavBar />

        <section id="container_content">

          <div id="container_content_header">

            <div id="box_left_header">
              <div id="box_text_header">
                <h1>Next generation digital banking</h1>

                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, investing, and much more.</p>

                <div>
                  <ButtonContact />
                </div>
              </div>
            </div>

            <div id="box_rigth_header">
              <div id="conatiner_img_phones">
                <img src="/src/assets/images/image-mockups.png" alt="">
              </div>
            </div>
          </div>


        </section>
    </header>
</template>

<style scoped>

header {
  /* border: 2px solid red; */
  width: 100vw;
  min-height: 100vh;
}

#container_content {
  /* border: 5px solid blue; */
  background-color: aliceblue;
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: flex-end;
}
#container_content_header {
  width: 90%;
  height: 100%;
  /* border: 3px solid rgb(255, 0, 0); */
  display: flex;
  flex-wrap: wrap-reverse;
}
#box_left_header {
  /* border: 3px solid rgb(123, 255, 0); */
  width: 40%;
  height: 85vh;
  display: flex;
  align-items: center;
}

#box_text_header {
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
h1 {
  font-size: 4.5vw;
  font-weight: 100;
}
p {
  font-size: 1.5vw;
  color: rgb(59, 59, 59);
}
#box_rigth_header {
  /* border: 3px solid rgb(0, 0, 0); */
  width: 60%;
  height: 85vh;
  background-image: url('/src/assets/images/bg-intro-desktop.svg');
  background-repeat: no-repeat;
  background-position: center left;
}
#conatiner_img_phones {
  /* border: 5px solid red; */
  width: 100%;
  height: 100%;

}
#conatiner_img_phones > img {
  object-fit: contain;
  width: 100%;
  height: 130%;
}


@media(max-width: 900px) {

  p {
    font-size: 2.5vw;
  }
}

@media(max-width: 850px) {
  #container_content_header {
    width: 100%;
    gap: 100px;
  }
  #box_left_header {
    width: 80%;
    height: 60vh;
    margin: auto;
    /* border: 2px solid red; */
    margin-top: 100px;
  }

  h1 {
    font-size: 10vw;
  }

  p {
    font-size: 3vw;
  }

  #box_rigth_header {
    width: 100%;
    background-image: url('/src/assets/images/bg-intro-mobile.svg');
    background-size: cover;
  }
  
}
@media(max-width: 700px) {
  #box_left_header {
    margin-top: 30px;
  }
}
@media(max-width: 550px) {
  #box_left_header {
    height: 40vh;
    margin-bottom: 50px;
  }
  #box_rigth_header {
    height: 60vh;
  }
  #conatiner_img_phones {
    height: 50vh;
  }

  #container_content_header {
    width: 100%;
    gap: 0px;
  }
}

@media(max-width: 400px) {
  p {
    font-size: 4.5vw;
  }

  #box_left_header {
    margin-bottom: 20px;
  }
}
</style>
