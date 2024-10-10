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

        <!-- <div id="content_header">
          <div id="box_left_header">
            <div id="container_text_header">
              <h1>Next generation digital bankink</h1>

              <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, investing, and much more.</p>

              <div>
                <ButtonContact />
              </div>
              
            </div>
          </div>

          <div id="box_rigth_header">
            <div id="container_img_phones">
              <img src="/src/assets/images/image-mockups.png" alt="cell phone images">
            </div>
          </div>
          
        </div> -->
    </header>
</template>

<style scoped>
#content_header {
  border: 2px solid rgb(4, 0, 255);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: aliceblue;
}

#box_left_header {
  border: 3px solid rgb(0, 0, 0);
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#container_text_header {
  border: 2px solid blue;
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
h1 {
  font-size: 4vw;
  font-weight: 100;
}
p {
  font-size: 1.5vw;
}


#box_rigth_header {
  border: 2px solid rgb(26, 255, 0);
  width: 60%;
  background-image: url('/src/assets/images/bg-intro-desktop.svg');
  background-position: center left;
  display: flex;
  justify-content: center;
  align-items: center;
}

#container_img_phones {
  border: 2px solid red;
  width: 70%;
  height: 80%;
  transform: translateY(-100px);
}
#container_img_phones > img {
  object-fit: contain;
}
</style>
