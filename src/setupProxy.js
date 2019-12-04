const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://m.ehaoyao.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),
    app.use("/front_api",proxy({
        target:"http://m.ehaoyao.com",
        changeOrigin:true,
       
    }))
    //注册
    app.use("/users/register",proxy({
        target:" http://39.105.204.151:3000",
        changeOrigin:true,
    //登录 
    }))
    app.use("/users/login",proxy({
        target:" http://39.105.204.151:3000",
        changeOrigin:true,
       
    }))
}