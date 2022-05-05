const { body } = require('express-validator');
const db = require('../../database/models');
const bcrypt = require('bcryptjs');


module.exports =[
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un usuario'),
	body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
]