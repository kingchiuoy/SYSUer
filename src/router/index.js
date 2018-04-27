import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import ArticleAndQuestion from '@/components/page/ArticleAndQuestion'
import HomeHeader from '@/components/common/HomeHeader'
import Articles from '@/components/page/Articles'
import Questions from '@/components/page/Questions'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/home',
    	name:'Home',
    	components:{
        default:HomeHeader,
        content:ArticleAndQuestion
      }
    },
    {
      path:'/article',
      name:'Article',
      components:{
        default:HomeHeader,
        content:Articles
      }
    },
    {
      path:'/question',
      name:'Question',
      components:{
        default:HomeHeader,
        content:Questions
      }
    }
  ]
})
