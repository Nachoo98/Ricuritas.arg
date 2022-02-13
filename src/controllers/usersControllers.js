const usersControllers={
    registro:(req,res)=>{
        res.render('users/registro');
    },
    login:(req,res)=>{
        res.render('users/login');
    },

}

module.exports=usersControllers;