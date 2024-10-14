<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
import FormContact from './FormContact.vue';
    export default {
        name: 'Contact',
        components: { NavBar, TheFooter, FormContact },
        data() {
            return {
                text: 'home',
                data_infor: [
                    {name_icon: 'location-outline', title: 'Office address', text_address: 'Av. Central, 1234 - Centro Cidade, Estado CEP 12345-678'},
                    {name_icon: 'call-outline', title: 'Call us', text_address: '(11) 1234-5678, (11) 98765-4321 (WhatsApp)'},
                    {name_icon: 'mail-outline', title: 'Mail us', text_address: 'contato@seubanco.com'},

                ]
            }
        },
        methods: {
            // back(home) {
            //     alert()
            //     this.$router.push({ name: 'home', params: { home } });
            // }
        }
    }
</script>

<template>
    <NavBar id="NavBar"/>

    <div id="background_page_contact">
        
        <div id="container_content_contact">
            <h1>Contact Information</h1>

            <p>We are here to help! If you have questions, need assistance or want to know more about our services, don't hesitate to contact us. Fill out the form below and our team will get back to you as soon as possible. We value your trust and are ready to offer the support you deserve.</p>

            <button>
                <a href="#container_contact">
                    Contact us
                    <ion-icon name="arrow-down-circle-outline"></ion-icon>
                </a>
            </button>
        </div>
            
    </div>

    <div id="container_contact">
        <div class="container_center_main">
            <div id="container_group_formAndInfor">
                <FormContact />

                <div id="infor">
                    <h1>Get in Touch</h1>
                    
                    <p>We are always at your disposal! To contact us, use the channels below or fill out the form. Our team is ready to offer support and answer all your questions. If you prefer a face-to-face visit, we are located in an easily accessible location, ready to welcome you. No matter where you are, we are here to ensure your experience is the best it can be.</p>

                    <aside v-for="item_infor in data_infor" :key="item_infor.title">
                        <ion-icon :name="item_infor.name_icon"></ion-icon>
                        <div>
                            <h2>{{ item_infor.title }}</h2>
                            <p>{{ item_infor.text_address }}</p>
                        </div>

                    </aside>
                    <span>Monday to Friday, 9am to 6pm</span>

                </div>
            </div>
        </div>
    </div>
    <!-- <div id="container_contact">
        <h1>contato</h1>
        <button @click="back(text)">
            voltar
        </button>
    </div> -->

    <TheFooter />
</template>

<style scoped>
#background_page_contact {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* border: 1px solid red; */
    background-image: url('/src/assets/images/make-a-phone-call-5190643_1280.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  right;
    display: flex;
    justify-content: center;
    align-items: center;
}
#background_page_contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.626); /* cor preta com 50% de opacidade */
    z-index: 1; /* coloca o overlay atrás do conteúdo */
}

#background_page_contact > * {
    position: relative;
    z-index: 2; 
}

#container_content_contact {
    width: 80%;
    height: 50%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
}
#container_content_contact > h1 {
    font-size: 5vw;
}
#container_content_contact > p {
    font-size: 1.2vw;
}

button {
    width: 15vw;
    padding: 1vw;
    border-radius: 2vw;
    background: linear-gradient(45deg, rgb(66, 211, 182), rgb(94, 239, 210));
    font-weight: bold;
    font-size: 1.2vw;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s;
}
button:hover {
    background: linear-gradient(45deg, rgb(41, 241, 201), rgb(21, 197, 162));
    transform: scale(1.05);
}
button > a {
    text-decoration: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
ion-icon {
    font-size: 2vw;
}
#container_contact {
    position: relative;
    width: 100vw;
    min-height: 80vh;
    background-image: url('/src/assets/images/eyeglasses-8227429_1280.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  right;
}
#container_contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.626);
    z-index: 1;
}
#container_contact > * {
    position: relative;
    z-index: 2; 
}
#container_group_formAndInfor {
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
#infor {
    width: 50%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 150px 0;
}
#infor > h1 {
    font-size: 4vw;
    border-bottom: 4px solid #ffffff;
}
aside {
    display: flex;
    align-items: center;
    gap: 20px;
}
aside > ion-icon {
    font-size: 4vw;
}
span {
    text-align: end;
}

@media(max-width: 1200px) {
    #container_content_contact > h1 {
        font-size: 7vw;
    }
    #container_content_contact > p {
        font-size: 1.5vw;
    }

    button {
        width: 30%;
    }
}

@media(max-width: 900px) {
    #infor {
        width: 100%;
    }
    aside > ion-icon {
        font-size: 6vw;
    }
    #infor > h1 {
        font-size: 6vw;
    }
}

@media(max-width: 850px) {
    #background_page_contact {
        background-position: center;
    }
    #container_content_contact {
        gap: 5vw;
        align-items: flex-start;
    }
    #container_content_contact > h1 {
        font-size: 9vw;
    }
    #container_content_contact > p {
        font-size: 2vw;
    }

    button {
        width: 40%;
        font-size: 2vw;
        padding: 2vw;
        border-radius: 3vw;
    }
    ion-icon {
        font-size: 3vw;
    }
}
@media(max-width: 600px) {
    #background_page_contact {
        height: 90vh;
    }
    #container_content_contact {
        gap: 9vw;
    }
    #container_content_contact > h1 {
        font-size: 11vw;
    }
    #container_content_contact > p {
        font-size: 3vw;
    }

    button {
        width: 50%;
        font-size: 3vw;
        padding: 3vw;
        border-radius: 4vw;
    }
    ion-icon {
        font-size: 4vw;
    }


    aside > ion-icon {
        font-size: 10vw;
    }
    #infor > h1 {
        font-size: 9vw;
    }

}

@media(max-width: 400px) {
    #container_content_contact > h1 {
        font-size: 14vw;
    }
    #container_content_contact > p {
        font-size: 4vw;
    }

    button {
        width: 60%;
        font-size: 4vw;
        padding: 3vw;
        border-radius: 5vw;
    }
    ion-icon {
        font-size: 5vw;
    }
}
</style>