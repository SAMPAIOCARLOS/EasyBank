<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
    export default {
        name: 'PrivacyPolicy',
        components: { NavBar, TheFooter },
        data() {
            return {
                text: 'home',
                topic_one: [
                                { strong: 'Personal Identification Information:', textContent: 'Name, email address, phone number, date of birth, CPF (Taxpayer Identification Number), and identification documents.' },
                                { strong: 'Financial Information:', textContent: 'Bank account details, credit card information, transaction history.' },
                                { strong: 'Usage Data:', textContent: 'Information about how you use our website or app, including IP addresses, browser type, and pages accessed.' },
                                { strong: 'Location Data:', textContent: 'Approximate location based on your device\'s GPS, with your consent.' }
                            ],
                topic_two: [
                                { strong: 'Account Management:', textContent: 'To create and maintain your account with Easybank.' },
                                { strong: 'Transaction Processing:', textContent: 'To facilitate payments, transfers, and other banking services.' },
                                { strong: 'Customer Support:', textContent: 'To respond to your inquiries and provide assistance.' },
                                { strong: 'Fraud Detection and Security:', textContent: 'To monitor and prevent fraudulent activity and unauthorized access.' },
                                { strong: 'Marketing and Communication:', textContent: 'With your consent, we may send promotional materials and updates regarding our services.' },
                                { strong: 'Legal Obligations:', textContent: 'To comply with applicable laws and regulations, such as anti-money laundering (AML) laws.' }
                            ],
                topic_three: [
                                { strong: 'Service Providers:', textContent: 'Third-party companies that help us operate our services, such as payment processors, cloud storage providers, and customer support platforms.' },
                                { strong: 'Legal Authorities:', textContent: 'When required by law, such as to comply with a legal process, court order, or government request.' },
                                { strong: 'Business Transfers:', textContent: 'In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.' }
                            ],
                topic_four: [
                                { strong: 'Right to Access:', textContent: 'You can request a copy of the personal data we hold about you.' },
                                { strong: 'Right to Rectification:', textContent: 'You can request the correction of any inaccurate or incomplete information.' },
                                { strong: 'Right to Erasure:', textContent: 'You can request the deletion of your data under certain circumstances.' },
                                { strong: 'Right to Restrict Processing:', textContent: 'You can request that we limit the processing of your data in certain cases.' },
                                { strong: 'Right to Data Portability:', textContent: 'You can request that your data be transferred to another organization in a structured, commonly used format.' },
                                { strong: 'Right to Withdraw Consent:', textContent: 'If you have provided consent for the collection and processing of your data, you can withdraw it at any time.' }
                            ],
                topic_five: [
                                { strong: 'Encryption:', textContent: 'We use encryption to protect sensitive data during transmission and storage.' },
                                { strong: 'Access Controls:', textContent: 'Only authorized personnel have access to your data, and we monitor access to ensure security.' },
                                { strong: 'Two-Factor Authentication:', textContent: 'We require additional verification for access to your account to enhance security.' }
                            ],
                topic_six: [
                                { strong: 'Easybank Headquarters:', textContent: 'Av. Central, 1234 - Centro, Cidade, Estado, CEP 12345-678' },
                                { strong: 'Phone:', textContent: '(11) 1234-5678' },
                                { strong: 'WhatsApp:', textContent: '(11) 98765-4321' },
                                { strong: 'Email:', textContent: 'contato@seubanco.com' },
                                { strong: 'Hours:', textContent: 'Monday to Friday, from 9 AM to 6 PM' }
                            ],
            }
        }
    }
</script>

<template>
    <NavBar />
    
    <div id="container_Privacy">
    <h1>Privacy Policy - Easybank</h1>

    <p>Effective Date: [xx-xx-xxxx]</p>

    <p>
      At Easybank, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our website, mobile application, and services. Please read it carefully to understand our practices.
    </p>

    <h2>1. Information We Collect</h2>
    <p>We may collect the following types of information:</p>
    <ul>
      <li v-for="item_topic_one in topic_one" :key="item_topic_one"><strong>{{ item_topic_one.strong }}</strong> {{ item_topic_one.textContent }}</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul>
      <li v-for="item_topic_two in topic_two" :key="item_topic_two"><strong>{{ item_topic_two.strong }}</strong> {{ item_topic_two.textContent }}</li>
    </ul>

    <h2>3. Data Sharing</h2>
    <p>We do not sell or rent your personal data. However, we may share your information with:</p>
    <ul>
      <li v-for="item_topic_three in topic_three" :key="item_topic_three"><strong>{{ item_topic_three.strong }}</strong> {{ item_topic_three.textContent }}</li>
    </ul>

    <h2>4. Your Data Protection Rights</h2>
    <p>As a user of Easybank, you have the following rights regarding your personal data:</p>
    <ul>
      <li v-for="item_topic_four in topic_four" :key="item_topic_four"><strong>{{ item_topic_four.strong }}</strong> {{ item_topic_four.textContent }}</li>
    </ul>

    <h2>5. Data Security</h2>
    <p>We take the protection of your data seriously and implement various security measures, including:</p>
    <ul>
      <li v-for="item_topic_five in topic_five" :key="item_topic_five"><strong>{{ item_topic_five.strong }}</strong> {{ item_topic_five.textContent }}</li>
    </ul>

    <h2>6. Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:</p>

    <div class="contact-info">
      <h3>Easybank Headquarters:</h3>
      <p v-for="item_topic_six in topic_six" :key="item_topic_six"><strong>{{ item_topic_six.strong }}</strong> {{ item_topic_six.textContent }}</p>
    </div>

  </div>

    <TheFooter />
</template>

<style scoped>

#container_Privacy {
    max-width: 80%;
    margin: 0 auto;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #0d6efd;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 10px;
    border-bottom: 2px solid #0d6efd;
}

h2 {
    margin-top: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

ul {
    margin-bottom: 1rem;
    padding-left: 20px;
}

ul li {
    margin-bottom: 0.5rem;
}

.contact-info {
    background-color: #e8f4ff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 1.5rem;
}

.contact-info h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: #0d6efd;
}

.contact-info p {
    margin: 0;
    font-size: 1rem;
}

@media (max-width: 768px) {
    h1 {
    font-size: 2rem;
    }

    h2 {
    font-size: 1.5rem;
    }

    p, ul li {
    font-size: 0.9rem;
    }
}
</style>