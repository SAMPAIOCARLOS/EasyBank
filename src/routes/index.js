import { createRouter, createWebHistory } from 'vue-router';


import DetailsBlog from '@/views/DetailsBlog.vue';
import Contact from '@/views/Contact.vue';

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
      path: "/path/:name",
      name: 'Contact',
      component: Contact,
      props: true
    }
    
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
  