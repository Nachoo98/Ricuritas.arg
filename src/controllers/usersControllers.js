const fs=require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult}=require('express-validator');
const User = require('../models/User');



const usersFilePath = path.join(__dirname,'../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));// posible falla

const usersControllers={
    registro:(req,res)=>{
        res.render('users/registro');
    },
    login:(req,res)=>{
        res.render('users/login');
    },
    registrado:(req,res)=>{
        let usuarios = users;
        
        let nombreImagen=req.file.filename;

		let idNuevo = usuarios[usuarios.length-1].id + 1;

      let nuevoUsuario = {
			id: idNuevo,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
            email:req.body.email,
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password,10),
            telefono: req.body.telefono,
            direction: req.body.direction,
            notas: req.body.notas,
			imagen: nombreImagen,
		};

        usuarios.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(usuarios,null,' '));
        res.redirect('/home');
    
    },
    logeando:(req,res)=>{
        let userToLogin = User.findByField('usuario', req.body.usuario);
		
		if(userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
                res.send('Logueado!!')
				/*return res.redirect('/home');*/
			} 
			return res.render('users/login', {
				errors: {
					usuario: {
						msg: 'La contraseña es invalida'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				usuario: {
					msg: 'Usuario no encontrado'
				}
			}
		});
    },
}

module.exports=usersControllers;