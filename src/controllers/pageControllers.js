const pageControllers={
    home:(req,res)=>{
        res.render('home');
    },
    carrito:(req,res)=>{
        res.render('carrito');
    },
    producto:(req,res)=>{
        res.render('producto');
    },
}

module.exports=pageControllers;