
const bcrypt = require('bcryptjs');

function passMiddleware(req,res,next) {
    var passEncriptada = bcrypt.hashSync(req.body.password,10);

    next();
}

module.exports=passMiddleware;