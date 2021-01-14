const express = require("express");

const app = express()
const path = __dirname

app.use((req,res,next) => {
    console.log(req.originalUrl)
    next()
})

app.get('/', function (req,res) {
  res.sendFile(path + "/index.html");
});

app.get('/favicon-16x16.png',(req,res,next)=>{
  res.sendFile(path + "/favicon-16x16.png")
})

app.get('/favicon-32x32.png',(req,res,next)=>{
  res.sendFile(path + "/favicon-32x32.png")
})

app.get('/oauth2-redirect.html',(req,res,next)=>{
  res.sendFile(path + "/oauth2-redirect.html")
})

app.get('/openapi.yml',(req,res,next)=>{
  res.sendFile(path + "/openapi.yml")
})

app.get('/swagger-ui-bundle.js',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-bundle.js")
})

app.get('/swagger-ui-bundle.js.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-bundle.js.map")
})

app.get('/swagger-ui-es-bundle-core.js',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-es-bundle-core.js")
})

app.get('/swagger-ui-es-bundle-core.js.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-es-bundle-core.js.map")
})

app.get('/swagger-ui-es-bundle.js.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-es-bundle.js.map")
})

app.get('/swagger-ui-standalone-preset.js',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-standalone-preset.js")
})

app.get('/swagger-ui-standalone-preset.js.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui-standalone-preset.js.map")
})

app.get('/swagger-ui.css',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui.css")
})

app.get('/swagger-ui.css.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui.css.map")
})

app.get('/swagger-ui.js',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui.js")
})

app.get('/swagger-ui.js.map',(req,res,next)=>{
  res.sendFile(path + "/swagger-ui.js.map")
})


const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
