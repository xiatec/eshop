import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "home" */ '../views/shop/Shop.vue')
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/forgotPassword/ForgotPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/login/Login.vue'),
    // beforeEnter：只有执行特定路由判断时才会执行的函数
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach方法：每次路由判断时都需要执行的函数
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  // 逻辑：如果登陆了且去往页面为Login，正常执行，否则跳转回登陆页
  (isLogin || to.name === 'Login' || to.name === 'Register' ||to.name === 'ForgotPassword') ? next() : next({ name:'Login'})  
  next();
})

export default router
