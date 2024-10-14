<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
    export default {
        name: 'Support',
        components: { NavBar, TheFooter },
        data() {
            return {
                text: 'home',
                data_faq: [
                            {
                                title: "How do I open an account at Easybank?",
                                content: "You can open an account through our website or app. Simply click on the 'Open Account' option, fill out the form with your personal details, and submit the required documents. The process is quick and easy, and you'll have your account open in minutes!"
                            },
                            {
                                title: "What documents are required to open an account?",
                                content: "The required documents include: A photo ID (ID card, driver's license, or passport), a recent proof of address (last 90 days), and a CPF (Individual Taxpayer Registry)."
                            },
                            {
                                title: "Does Easybank charge monthly fees?",
                                content: "No! Easybank offers a digital account with no monthly maintenance fees. Some specific transactions may have additional costs, but we are transparent about these on our website."
                            },
                            {
                                title: "How do I contact customer support?",
                                content: "You can contact us through the following channels: Phone: (11) 1234-5678, WhatsApp: (11) 98765-4321, Email: contato@seubanco.com. Our customer support hours are Monday to Friday, from 9 AM to 6 PM."
                            },
                            {
                                title: "Does Easybank offer WhatsApp support?",
                                content: "Yes! Our WhatsApp number (11) 98765-4321 is available to assist with your questions and resolve issues quickly."
                            },
                            {
                                title: "Can I make physical deposits and withdrawals at Easybank?",
                                content: "Easybank is 100% digital, so we do not have physical branches for deposits or withdrawals. However, you can transfer funds to other accounts or use our partner networks for ATM withdrawals."
                            },
                            {
                                title: "What are Easybank's operating hours?",
                                content: "Our customer service hours are Monday to Friday, from 9 AM to 6 PM. However, you can access your account and make transactions 24/7 through our website or app."
                            },
                            {
                                title: "How can I recover my access password?",
                                content: "If you forgot your password, click on the 'Forgot Password' option on the login page. You will receive instructions to reset your password via email or SMS. Be sure to keep your security information updated."
                            },
                            {
                                title: "How does security work at Easybank?",
                                content: "The security of your data is our priority. We use advanced encryption to protect your information and transactions. Additionally, we offer two-step authentication to ensure extra security when accessing your account."
                            },
                            {
                                title: "Does Easybank offer a credit card?",
                                content: "Yes! After opening your account, you can apply for a credit card directly through the app. We offer various limit options, and the card has no annual fee."
                            }
                          ],
            }
        },
        methods: {
            back(home) {
                alert()
                this.$router.push({ name: 'home', params: { home } });
            }
        }
    }
</script>

<template>
    <NavBar />

    <div id="container_support">
        <div class="container_center_main">
            <div id="container_faq">
                <h1>FAQ - Easybank</h1>
                <details v-for="item_faq in data_faq" :key="item_faq">
                    <summary>{{ item_faq.title }}</summary>

                    <p>{{ item_faq.content }}</p>
                </details>
                    
                
            </div>
        </div>
    </div>

    <TheFooter />
</template>

<style scoped>
#container_support {
    width: 100vw;
    min-height: 100vh;
    background-color: aliceblue;
}
#container_faq {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
}

h1 {
    font-size: 4vw;
    padding: 5vw 0;
}
details {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 15px;
    transition: all 0.3s ease;
}

summary {
    cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
  outline: none;
}

details[open] {
    background-color: #e8f4ff;
    border-color: #0d6efd;
}

summary::-webkit-details-marker {
    display: none;
}

summary::before {
  color: #0d6efd;
  font-size: 1.5em;
  margin-right: 10px;
}
@media(max-width: 900px) {
    h1 {
        font-size: 7vw;
        padding: 6vw 0;
    }
}

@media(max-width: 600px) {
    h1 {
        font-size: 9vw;
        padding: 8vw 0;
    }
}
</style>