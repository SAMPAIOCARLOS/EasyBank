<script>
import About from './About.vue';
import Blog from './Blog.vue';
  export default {
    name: 'TheMain',
    components: { About, Blog },
    data() {
      return {
        data_cards_about: [
          {
            url_img: '/src/assets/images/icon-online.svg',
            title: 'Online Banking',
            text_content: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          },
          {
            url_img: '/src/assets/images/icon-budgeting.svg',
            title: 'Simple Budgeting',
            text_content: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          },
          {
            url_img: '/src/assets/images/icon-budgeting.svg',
            title: 'Fast Onboarding',
            text_content: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          },
          {
            url_img: '/src/assets/images/icon-api.svg',
            title: 'Open API',
            text_content: "Manage your savings, investments. pension, and much more from one account. Tracking your money has never been easier."
          }
        ],
        data_cards_blog: [
          {
            url_img: '/src/assets/images/image-currency.jpg',
            text_span: 'By Claire Robinson',
            title: 'Receive money in any currency with no fees',
            text_content: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
          },
          {
            url_img: '/src/assets/images/image-restaurant.jpg',
            text_span: 'By Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            text_content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...'
          },
          {
            url_img: '/src/assets/images/image-plane.jpg',
            text_span: 'By Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            text_content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
          },
          {
            url_img: '/src/assets/images/image-confetti.jpg',
            text_span: 'By Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            text_content: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site...'
          }
        ]
      }
    }
  }
</script>

<template>
    <main>
      
      <About :data_cards_about="data_cards_about"/>

      <Blog :data_cards_blog="data_cards_blog"/>

    </main>
</template>

<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
}
</style>
