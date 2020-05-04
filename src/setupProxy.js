const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app){
    app.use("/hbb",createProxyMiddleware({
       // https://api.hongbeibang.com/question/getNew?_t=1588504389133&csrfToken=&pageIndex=0&pageSize=10
        target:"https://api.hongbeibang.com",
        changeOrigin:true,
        pathRewrite:{
            "^/hbb":""
        }

    }))

}