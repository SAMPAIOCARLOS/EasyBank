import { createRouter, createWebHistory } from 'vue-router';


import DetailsBlog from '@/views/DetailsBlog.vue';
import Contact from '@/views/Contact.vue';
import Careers from '@/views/Careers.vue';
import Support from '@/views/Support.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';

import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';

const routes = [
    {
      path: "/:home",
      name: 'home',
      component: [TheHeader, TheMain],
      props: true
    },
    {
      path: "/id/:id",
      name: 'DetailsBlog',
      component: DetailsBlog,
      props: true
    },
    {
      path: "/contact/:name",
      name: 'Contact',
      component: Contact,
      props: true
    },
    {
      path: "/careers/:name",
      name: 'Careers',
      component: Careers,
      props: true
    },
    {
      path: "/Support/:name",
      name: 'Support',
      component: Support,
      props: true
    },
    {
      path: "/PrivacyPolicy/:name",
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
      props: true
    }
    
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
  