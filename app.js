const pageRoutes=require('./src/routes/pageRoutes')

const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))

app.use('/', pageRoutes);

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/registro.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'));
})

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});