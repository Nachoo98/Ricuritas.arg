//requires
const pageRoutes=require('./src/routes/pageRoutes')
const usersRoutes=require('./src/routes/usersRoutes')
const productosRoutes=require('./src/routes/productosRoutes')
const session=require('express-session')
const cookies = require('cookie-parser');
const methodOverride = require('method-override');

const express=require('express');
const path=require('path');
const app=express();

const apiUsersRouter=require('./src/routes/api/users');
const apiProductsRouter=require('./src/routes/api/productos');


//middlewares
const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret:"Esto es un secreto",
    resave:false,
    saveUninitialized:false,
}))

app.use(cookies());

app.use('/', pageRoutes);

app.use('/usuarios', usersRoutes);

app.use('/productos', productosRoutes);

app.use('/api/users',apiUsersRouter);

app.use('/api/products',apiProductsRouter);

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});

//--------------------DETALLES-------------------------
//rutas => Crear producto (para no ingresar por url) ?
//Header Logueado
//Middlewares y cookies
//productos
//-----------------------------------------------------