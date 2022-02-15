const pageRoutes=require('./src/routes/pageRoutes')
const usersRoutes=require('./src/routes/usersRoutes')
const productosRoutes=require('./src/routes/productosRoutes')

const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))

app.use('/', pageRoutes);





app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});