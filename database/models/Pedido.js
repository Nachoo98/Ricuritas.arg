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

/*    Pedido.associate = function (models){

        Pedido.Hasone(models.Factura, {   
            as: "Factura",
            foreignKey: "pedido_FK"
             });
    } ----------------------------CONSULTAR------------------------------*/
    Pedido.associate = function (models){ //Pedido o pedido??

        Pedido.hasMany(models.Usuario, {   
            as: "Usuario",
            foreignKey: "usuario_FK"
             });
     }
     
     Pedido.associate = function (models){

        Pedido.hasMany(models.Estado, {   
            as: "Estado",
            foreignKey: "estado_FK"
             });
     }

     Pedido.associate = function (models){

        Pedido.belongsToMany(models.Producto, {   
            as: "Producto",
            through:"Producto_Pedido",
            foreignKey: "pedido_FK",
            otherKey:"producto_FK",
            timestamps:false
             });
     }
     
     
    return pedido
}