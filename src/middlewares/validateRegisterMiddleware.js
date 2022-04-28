const path = require('path');
const { body } = require('express-validator');

const db = require('../../database/models');


module.exports = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('mail')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un usuario').bail()
	.custom((value,{req})=>{
	let ingresado=req.body.nombreUsuario
	

	let usuarios2= db.Usuario.findAll().then((Usuarios)=>{ 
		let usuarios = [];
		for (let i=0;i<Usuarios.length;i++){
		usuarios[i]=Usuarios[i]}
		return usuarios;
	});



	for(let i=0;i<usuarios2.length;i++){
		if(ingresado==usuarios2[i].nombreUsuario){
			throw new Error('Nombre de usuario ya existente');
		}
	}

	return true;
	
	}),
	body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('contrasenia').notEmpty().withMessage('Las contraseñas tienen que coincidir'),
	body('telefono').notEmpty().withMessage('Tienes que escribir un telefono'),
	body('direccion').notEmpty().withMessage('Tienes que escribir una direccion'),

	body('imagen').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
	body('notas').notEmpty().withMessage('Tienes que escribir una aclaración'),
]