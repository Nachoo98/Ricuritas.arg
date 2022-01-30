const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'));
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'));
})

app.get('/producto',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/producto.html'));
})

app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/carrito.html'));
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/registro.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'));
})

app.listen(3015, ()=>{
    console.log("Servidor corriendo")
});