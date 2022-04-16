module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Pedido";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        fecha:{type: DataTypes.DATE},
        nombre: {type: DataTypes.STRING(50)},
        apellido:{type: DataTypes.STRING(50)},
        telefono:{type: DataTypes.INTEGER},
        direccion:{type: DataTypes.STRING(100)},
        notas:{type: DataTypes.TEXT},
        descuento:{type: DataTypes.INTEGER},
    };
let config = {
        tableName:'Pedido',
        camelCase:false,
        timestamps:false
    }

    const pedido = sequelize.define(alias,columnas,config);
    return pedido
}