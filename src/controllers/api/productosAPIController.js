const db = require('../../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const productosAPIController = {
    'list': (req, res) => { //preguntar por categoria
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
}
    
module.exports = productosAPIController;