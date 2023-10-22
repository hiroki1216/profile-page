import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue';
import NotFound from '@/components/NotFound.vue'
import Header from '@/components/Header.vue'
import AdminHeader from '@/components/admin/Header.vue'
import AdminDashboard from '@/components/admin/Dashboard.vue'
import AdminAbout from '@/components/admin/about.vue'
import AdminWorks from '@/components/admin/works.vue'
import Dashboard from '@/components/Dashboard.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'
import Login from '@/components/Login.vue'
import Logout from '@/components/logout.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', 
      component: Header,
      children: [
       {
        path: '', 
        component: Dashboard,
       },
       {
        path: 'about', 
        component: About,
       },
       {
        path: 'works', 
        component: Works,
       },
       {
        path: 'contact', 
        component: Contact,
       },
       {
        path: 'login', 
        component: Login,
       },
      ]
    },
    { path: '/admin', 
      component: AdminHeader,
    //  TODO beforeEnter: authGuard,
    // 現状これをしても意図したリダイレクト先に遷移しない
      children: [
       {
        path: '', 
        component: AdminDashboard,
       },
       {
        path: 'about', 
        component: AdminAbout,
       },
       {
        path: 'works', 
        component: AdminWorks,
       },
       {
        path: 'logout', 
        component: Logout,
       },
      ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;