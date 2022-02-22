const pageControllers={
    home:(req,res)=>{
        res.render('home');
    },
    carrito:(req,res)=>{
        res.render('carrito');
    }
}

module.exports=pageControllers;