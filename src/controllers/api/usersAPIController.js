const db = require('../../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const usersAPIController = {
    'list': (req, res) => {
        db.Usuario.findAll()
        .then(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                status : 200
            })
            })
    },
    
    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: {id: user.id,mail: user.mail,nombreUsuario: user.nombreUsuario,notas: user.notas,imagen: user.imagen,nombre: user.nombre,apellido: user.apellido},
                    status : 200
                })
            });
    },
}
    
module.exports = usersAPIController;