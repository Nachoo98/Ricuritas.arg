const { body } = require('express-validator');
const db = require('../../database/models');


module.exports =[
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un usuario').bail()
	.custom((value,{req})=>{
	let ingresado=req.body.nombreUsuario
	

	let usuarios2= db.Usuario.findAll().then((Usuarios)=>{ 
		let usuarios = [];
		for (let i=0;i<Usuarios.length;i++){
		usuarios[i]=Usuarios[i]}
		return usuarios;
	})



	for(let i=0;i<usuarios2.length;i++){
		if(ingresado==usuarios2[i].nombreUsuario){
			var encontrado=usuarios2[i]
		}else{
			throw new Error('Nombre de usuario no existente');
		}
	}
		if(encontrado) {
		let isOkThePassword =bcrypt.compareSync(req.body.contrasenia, encontrado.contrasenia);
		if (isOkThePassword) {
			delete encontrado.contrasenia;
			req.session.userLogged = encontrado;
			return res.redirect('/usuarios/perfil');
		}
	}


	return true;
  }),

]