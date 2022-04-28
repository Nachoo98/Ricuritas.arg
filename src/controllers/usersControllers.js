const fs=require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult}=require('express-validator');
const User = require('../models/User');


const db = require('../../database/models');

const usersControllers={
    registro:(req,res)=>{
        res.render('users/registro');
    },
    login:(req,res)=>{
        res.render('users/login');
    },
    registrado:(req,res)=>{

		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/registro', {
				errors: resultValidation.mapped(),
				old: req.body
			});
		}

     db.Usuario.create(
		{
		 mail:req.body.mail,
		 contrasenia:bcrypt.hashSync(req.body.contrasenia,10),
		 imagen:req.file.filename,
		 nombre:req.body.nombre,
		 apellido:req.body.apellido,
		 nombreUsuario:req.body.nombreUsuario,
		 notas:req.body.notas,
		 telefono:req.body.telefono,
		 direccion:req.body.direccion}
	 ).then((res.redirect('/usuarios/check')))

    },
    logeando:(req,res)=>{

		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/registro', {
				errors: resultValidation.mapped(),
				old: req.body
			});
		}
		
			db.Usuario.findOne({where:{nombreUsuario:req.body.nombreUsuario}}).then((userToLogin)=>{
				if(userToLogin.dataValues) {
				let isOkThePassword =bcrypt.compareSync(req.body.contrasenia, userToLogin.dataValues.contrasenia);
				if (isOkThePassword) {
					delete userToLogin.dataValues.contrasenia;
					req.session.userLogged = userToLogin.dataValues;
					return res.redirect('/usuarios/perfil');
				}
			}
	});

	
    },
	perfil:(req,res)=>{

		res.render('users/perfil',{user:req.session.userLogged});
	},
	logout:(req,res)=>{

		req.session.destroy();
		return res.redirect('/');
	},

	check:(req,res)=>{
		res.render('users/check')//pulir vista
	}
}

module.exports=usersControllers;