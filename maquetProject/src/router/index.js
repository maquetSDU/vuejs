import Vue from 'vue'
import Router from 'vue-router'

import PostMainPage from '@/components/pages/PostMain'
import NewPostPage from '@/components/pages/PostCreate'
import PostInfoPage from '@/components/pages/PostInfo'
import PostEditPage from '@/components/pages/PostEdit'

import Error from '@/components/pages/Error'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: PostMainPage
    },
    {
      path: '/new',
      name: 'new',
      component: NewPostPage
    },
    {
      path: '/post/info/:id',
      name: 'info',
      component: PostInfoPage,
    },
    {
      path: '/post/edit/:id',
      name: 'edit',
      component: PostEditPage
    },
    {
      path: '*',
      name: 'error',
      component: Error
    },
    
  ]
})



router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
