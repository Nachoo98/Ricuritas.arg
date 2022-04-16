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


    Producto.associate = function (models){

        Producto.hasMany(models.Categoria, {   
            as: "Producto",
            foreignKey: "categoria_FK"
             });
     }

     Producto.associate = function (models){

        Producto.belongsToMany(models.Pedido, {   
            as: "Pedido",
            through:"Producto_Pedido",
            foreignKey: "producto_FK",
            otherKey:"pedido_FK",
            timestamps:false
             });
     }

    return producto
}