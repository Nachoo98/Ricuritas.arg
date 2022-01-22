const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))


app.get('/',(req,res)=>{
    res.send("Bienvenidos");
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'));
})

app.listen(3015,);