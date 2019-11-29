import {
    Home,
    List,
    Doctor,
    Cart,
    Mine,
    Login
} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue64c",
        title:"首页"
    },
    {
        path:"/list",
        component:List,
        meta:{
            flag:true
        },
        title:"分类",
        icon:"\ue61d"
    },
    {
        path:"/doctor",
        component:Doctor,
        meta:{
            flag:true
        },
        title:"问好药师",
        icon:"\ue601"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        title:"购物车",
        icon:"\ue618"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        title:"我的",
        icon:"\ue659"
    }
];


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    }
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);