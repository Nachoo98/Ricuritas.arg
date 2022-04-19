    module.exports = (sequelize, DataTypes) =>{
    
        let alias = "Categoria";
        
        let columnas = {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
            nombre: {type: DataTypes.STRING(50)},
        };
        let config = {
            tableName:'Categoria',
            camelCase:false,
            timestamps:false
        }
    
        const categoria = sequelize.define(alias,columnas,config);

        categoria.associate = function (models){ 

            categoria.belongsTo(models.Producto, {   
                as: "Producto",
                foreignKey: "categoria_FK"
                 });
         }

        return categoria
    }