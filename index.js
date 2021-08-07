const express = require('express')
const app = express()
const path = require('path')
const puerto = process.env.PORT || 8888

app.use(express.static(path.join(__dirname,'build')))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.get('/descargar_cv',(req,res)=>{
    res.download(path.join(__dirname,'public','pdf','CV.pdf'))
})

app.listen(puerto,()=>{
    console.log(`escuhando en el puerto ${puerto}`)
})