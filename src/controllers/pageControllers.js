const pageControllers={
    home:(req,res)=>{
        res.render('home');
    },
    carrito:(req,res)=>{
        res.render('carrito');
    },
    nosotros:(req,res)=>{
        res.render('nosotros');
    },
    paraLlevar:(req,res)=>{
        res.render('paraLlevar');
    }
}

module.exports=pageControllers;