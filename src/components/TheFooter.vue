<script>
import Logo from './Logo.vue';
import IconsSocial from './IconsSocial.vue';
import ButtonContact from './ButtonContact.vue';
    export default {
        name: "TheFooter",
        components: { Logo, IconsSocial, ButtonContact },
        data() {
            return {
                path_img_logo: '/src/assets/images/logo_white.png'
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

                    <aside>
                        
                    </aside>

                    <aside>

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
}
#content_left {
    border: 2px solid red;
    width: 65%;
}
#container_logo_footer {
    border: 2px solid blue;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
#content_rigth {
    border: 2px solid rgb(0, 30, 255);
    width: 25%;
}
</style>