const bcrypt = require('bcryptjs');

const encriptada=function (contraseña) {
    let passEncriptada = bcrypt.hashSync('micontraseña',10);
}

module.exports=encriptada;