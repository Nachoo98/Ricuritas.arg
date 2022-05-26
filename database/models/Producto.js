module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Producto";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombreProducto: {type: DataTypes.STRING(50)},
        stock: {type: DataTypes.INTEGER},
        precio: {type: DataTypes.FLOAT},
        cantidad: {type: DataTypes.INTEGER},
        imagen:{type: DataTypes.STRING(100)},
        descripcion:{type: DataTypes.STRING(200)}
    };
let config = {
        tableName:'Producto',
        camelCase:false,
        timestamps:false
    }

    const producto = sequelize.define(alias,columnas,config);


    producto.associate = function (models){

        producto.belongsTo(models.Categoria, {   
            as: "Producto",
            foreignKey: "categoria_FK"
             });
     }

     producto.associate = function (models){

        producto.belongsToMany(models.Pedido, {   
            as: "Pedido",
            through:"Producto_Pedido",
            foreignKey: "producto_FK",
            otherKey:"pedido_FK",
            timestamps:false
             });
     }

    return producto
}