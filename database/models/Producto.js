module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Producto";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombreProducto: {type: DataTypes.STRING(50)},
        stock: {type: DataTypes.INTEGER},
        precio: {type: DataTypes.FLOAT},
        cantidad: {type: DataTypes.INTEGER}
    };
let config = {
        tableName:'Producto',
        camelCase:false,
        timestamps:false
    }

    const producto = sequelize.define(alias,columnas,config);
    return producto
}