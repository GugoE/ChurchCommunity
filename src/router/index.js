import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import SermonsView from '../views/Sermons.vue'
import BlogsView from '../views/Blog.vue'
import SingleSermon from '../views/SingleSermon.vue'
import SingleBlog from '../views/SingleBlog.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/sermons',
      name: 'sermons',
      component: SermonsView  
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView  
    },
    {
      path: '/sermons/:id',
      name: 'SingleSermon',
      component: SingleSermon,
      props:true  
    },
    {
      path: '/blogs/:id',
      name: 'SingleBlog',
      component: SingleBlog,
      props:true  
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ]
  
})

export default router
