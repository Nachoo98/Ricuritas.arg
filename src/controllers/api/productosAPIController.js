const db = require('../../../database/models');
const sequelize = db.sequelize;
const { Op, AssociationError } = require("sequelize");


const productosAPIController = {
    'list': (req, res) => { 
        db.Producto.findAll()
        .then(products => {
            return res.status(200).json({
                total: products.length,
                data: products,
                status : 200
            })
            })
    },
    
    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status : 200
                })
            });
    },
    'category': (req, res) => { 
        db.Categoria.findAll({include:[{association: 'Producto'}]})
        .then(category => {
            return res.status(200).json({
                total: category.length,
                data: category,
                status : 200
            })
            })
    },
}
    
module.exports = productosAPIController;