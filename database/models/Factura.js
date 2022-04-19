module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Factura";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        monto:{type: DataTypes.FLOAT},  
        numeroFactura: {type: DataTypes.STRING(100)},
    };
let config = {
        tableName:'Factura',
        camelCase:false,
        timestamps:false
    }

    const factura = sequelize.define(alias,columnas,config);
   
   factura.associate = function (models){

       factura.hasOne(models.Pedido, {   
           as: "Pedido",
           foreignKey: "pedido_FK"
            });
    }

   factura.associate = function (models){

        factura.hasMany(models.MetodoDePago, {   
            as: "MetodoDePago",
             foreignKey: "metodo_FK"
             });
    }

    return factura
}