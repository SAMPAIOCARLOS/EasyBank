<script>
import Logo from './Logo.vue';
import IconsSocial from './IconsSocial.vue';
import ButtonContact from './ButtonContact.vue';
    export default {
        name: "TheFooter",
        components: { Logo, IconsSocial, ButtonContact },
        data() {
            return {
                path_img_logo: '/src/assets/images/logo_whitev2.png',
                lists_footer_one: [
                    { path: 'http://localhost:5173/#container_about', name: 'About' },
                    { name: 'Contact' },
                    { path: 'http://localhost:5173/#container_blog', name: 'Blog' },
                ],
                lists_footer_two: [
                    { name: 'Careers' },
                    { name: 'Support' },
                    { name: 'Privacy policy' }
                ],

            }
        },
        methods: {
            router_path(name) {
                switch (name) {
                    case 'Careers':
                        this.$router.push({ name: 'Careers', params: { name } });
                        break;
                    case 'Contact':
                        this.$router.push({ name: 'Contact', params: { name } });
                        break
                    case 'Support':
                        this.$router.push({ name: 'Support', params: { name } });
                        break
                    case 'Privacy policy':
                        this.$router.push({ name: 'PrivacyPolicy', params: { name } });
                        break
                    default:
                        break;
                }
            }
        }
    }
</script>

<template>
    <footer>
        <div class="container_center_main">
            <div id="container_group_content">
                <div id="content_left">
                    <aside id="container_logo_footer">
                        <Logo :path_img_logo="path_img_logo"/>
                        
                        <IconsSocial />
                    </aside>

                    <aside class="container_lists_footer">
                        <ul>
                            <li v-for="item in lists_footer_one" :key="item.name" @click="router_path(item.name)">
                                <a :href="item.path">{{ item.name }}</a>
                            </li>
                        </ul>
                    </aside>

                    <aside class="container_lists_footer">
                        <ul>
                            <li v-for="item in lists_footer_two" :key="item.name" @click="router_path(item.name)">
                                <a href="">{{ item.name }}</a>
                            </li>
                        </ul>
                    </aside>
                    
                </div>

                <div id="content_rigth">
                    <ButtonContact />

                    <p style="color: #ffffff;">Easybank. All Rights Reserved</p>
                    
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #2D314D;
    width: 100vw;
    min-height: 20vh;
}

#container_group_content {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    flex-wrap: wrap;
}
#content_left {
    /* border: 2px solid red; */
    width: 55%;
    display: flex;
    justify-content: space-between;
}
#container_logo_footer {
    /* border: 2px solid blue; */
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

ul {
    list-style: none;
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
li {
    font-size: 1.2vw;
}
a {
    text-decoration: none;
    color: #ffffff;
}
#content_rigth {
    /* border: 2px solid rgb(0, 30, 255); */
    width: 25%;
}
#content_rigth > p {
    margin-top: 25px;
}

@media(max-width: 950px) {
    #container_group_content{
        gap: 70px;
    }
    #content_left {
        width: 90%;
    }
    li {
        font-size: 2vw;
    }
    #content_rigth {
        width: 90%;
    }
}

@media(max-width: 700px) {
    #content_left {
        width: 90%;
        flex-wrap: wrap;
    }

    #container_logo_footer {
        width: 100%;
    }
    .container_lists_footer {
        padding-top: 40px;
    }
    ul {
        gap: 40px;
    }
    li {
        font-size: 3vw;
    }
}

@media(max-width: 500px) {
    li {
        font-size: 4vw;
    }

    #content_left {
        width: 100%;
    }
}

@media(max-width: 320px) {
    li {
        font-size: 5vw;
    }
}
</style>