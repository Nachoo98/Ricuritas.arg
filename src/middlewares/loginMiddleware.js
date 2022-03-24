const {check}=require('express-validator');


let validatorLogin=[
check('usuario').notEmpty().withMessage('El usuario no puede estar vacío').bail()
.custom(function (value,{req}){
    if (value !== req.body.usuario) {
        throw new Error('Usuario no encontrado');
      }
  
      // Indicates the success of this synchronous custom validator
      return true;
}),
check('password').notEmpty().withMessage('La contraseña no puede estar vacía').bail()
.isLength({min:8}).withMessage('La contraseña debe tener mas de 8 caracteres')
.custom(function (value,{req}){
    if (value !== req.body.password) {
        throw new Error('Contraseña incorrecta');
      }
  
      // Indicates the success of this synchronous custom validator
      return true;
}),
]

module.exports=validatorLogin;

