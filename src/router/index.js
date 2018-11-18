import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/main.vue'
import NewsInfo from '@/pages/newsinfo/info.vue'
import Paragraph from '@/pages/paragraph/paragraph.vue'
import test from '@/pages/test/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/info',
      name: 'newsinfo',
      component: NewsInfo
    },
    {
      path: '/paragraph',
      name: 'paragraph',
      component: Paragraph
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
