//requires
const pageRoutes=require('./src/routes/pageRoutes')
const usersRoutes=require('./src/routes/usersRoutes')
const productosRoutes=require('./src/routes/productosRoutes')
const methodOverride = require('method-override');

const express=require('express');
const path=require('path');
const app=express();

//middlewares
const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', pageRoutes);

app.use('/usuarios', usersRoutes);

app.use('/productos', productosRoutes);



app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});