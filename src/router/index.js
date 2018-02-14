import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Installers from '@/components/Installers'
import Faq from '@/components/Faq'
import Installation from '@/components/Installation'
import Other from '@/components/Other'
import Robpin from '@/components/Robpin'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/installers',
      name: 'Installers',
      component: Installers
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/installation',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/robpin',
      name: 'Robpin',
      component: Robpin
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
