import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Upload from '../views/Upload.vue'
import Download from '../views/Download.vue'
import Delete from '../views/Delete.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
