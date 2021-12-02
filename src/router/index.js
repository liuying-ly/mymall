import { createRouter, createWebHistory } from 'vue-router'

const Home =() => import('../views/home/Home.vue') //路由懒加载
const Category =() => import('../views/category/Category.vue')
const Cart =() => import('../views/cart/Cart.vue')
const My =() => import('../views/my/My.vue')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // children:[
    //   {
    //     path: 'message',
    //     component: Message
    //   },
    // ]
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '',
    redirect:'/home'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to,from,next) => {
//   document.title = to.matched[0].meta.title
//   next()
// })
export default router
