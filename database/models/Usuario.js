module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Usuario";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        mail:{type: DataTypes.STRING(50)},
        contrasenia:{type: DataTypes.STRING(100)},
        nombreUsuario: {type: DataTypes.STRING(30)},
        notas:{type: DataTypes.TEXT},
        imagen:{type: DataTypes.STRING(100)},
        nombre:{type: DataTypes.STRING(50)},
        apellido:{type: DataTypes.STRING(50)},
        telefono:{type: DataTypes.INTEGER},
        direccion:{type: DataTypes.STRING(100)}
    };
let config = {
        tableName:'Usuario',
        camelCase:false,
        timestamps:false
    }

    const usuario = sequelize.define(alias,columnas,config);


   /* usuario.associate = function (models){ 

        usuario.belongsTo(models.Pedido, {   
            as: "Pedido",
            foreignKey: "usuario_FK"
             });
     }*/
    return usuario
}