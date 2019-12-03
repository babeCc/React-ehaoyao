import {
    Ticket,
    Home,
    List,
    Doctor,
    Cart,
    Mine,
    Login,
    Activity,
    Seacrh,
    Detail,
    Sort,
    ticketList
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
        path:"/sort",
        component:Sort,
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
            flag:false
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
    },
<<<<<<< HEAD
    {
        path:"/list/:link",
        component:List,
        meta:{
            flag:true
        },
        title:"",
        icon:""
    },
    
=======

>>>>>>> c74ca575f06ec7df21474bb9672dbf7d233aa961
];


export const NoTabBarRoute = [
    
    {
        path:"/ticketlist/:id/:name",
        component:ticketList,
        meta:{}
    },
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/ticket",
        component:Ticket,
        meta:{}
            
    },
    {
        path:"/activity",
        component:Activity,
        meta:{}
            
    },
    {
        path:"/search",
        component:Seacrh,
        meta:{}
            
    },
    
    {
        path:"/detail/:groupId",
        component:Detail,
        meta:{
           
        },
       
    },
    {
        path:"/list/:link",
        component:List,
        meta:{
            flag:true
        },
        title:"",
        icon:""
    },
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);