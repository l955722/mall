import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// const Home = () => import('../views/home/Home')
// const Category = () => import('../views/category/Category')
// const Shopcart = () => import('../views/shopcart/Shopcart')
// const Profile = () => import('../views/profile/Profile')



// //1.安装插件
Vue.use(VueRouter)

// //2.创建路由对象,一般把routes抽出来单独作一个对象
const routes= [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
// const routes = [
//     {
//         path:'',
//         redirect:'/home'
//     },
//     {
//         path:'/home',
//         component: Home
//     },
//     {
//         path:'/category',
//         component: Category
//     },
//     {
//         path:'/shopcart',
//         component: Shopcart
//     },
//     {
//         path:'/profile',
//         component: Profile
//     },
// ]

// const router = new VueRouter({
//   mode: 'hash',
//   base: process.env.BASE_URL,
//   routes
// })

// // router.onError((error) => {
// //     const pattern = /Loading chunk (\d)+ failed/g;
// //     const isChunkLoadFailed = error.message.match(pattern);
// //     const targetPath = router.history.pending.fullPath;
// //     if (isChunkLoadFailed) {
// //     router.replace(targetPath);
// //     }
// // });

// 3.导出router
export default router

// 4.去main.js导入路由路径,并挂载
