import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import home_add from '@/components/home_add'
import home_child from '@/components/home_child'
//import homeChild from '@/components/homeChild'
import videos from '@/components/videos'
import videos_child from '@/components/videos_child'
import follow from '@/components/follow'
import follow_child from '@/components/follow_child'
import login from '@/components/login'
import loginSuccess from '@/components/login-success'
import forget from '@/components/forget'
import register from '@/components/register'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children : [{
        	path : '/home/child',
        	name: 'home_add',
        	component : home_add
        },{
        	path : '/content',
        	name: 'home_child',
        	component : home_child
        }]
    },{
        path: '/videos',
        name: 'videos',
        component: videos,
        children : [{
        	path : 'child/:id',
        	name: 'videos_child',
        	component : videos_child
        }]
    },{
        path: '/follow',
        name: 'follow',
        component: follow,
        children : [{
        	path : 'child/:id',
        	name: 'follow_child',
        	component : follow_child
        }]
    },{
        path: '/login',
        name: 'login',
        component: login,
        children : [{
        	path : '/forget',
        	name : 'forget',
        	component : forget
        },{
        	path : '/register',
        	name : 'register',
        	component : register
        },{
        	path : '/success',
        	name : 'success',
        	component : loginSuccess
        }]
    },{
    	path: '*',
    	redirect: '/home'
    }
  ]
})
