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
}