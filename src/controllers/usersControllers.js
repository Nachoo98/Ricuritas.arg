const fs=require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');// NO ES LO DEFINITIVO

const usersFilePath = path.join(__dirname,'../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));// posible falla

const usersControllers={
    registro:(req,res)=>{
        res.render('users/registro');
    },
    login:(req,res)=>{
        res.render('users/login');
    },
    registrado:(req,res)=>{
        let usuarios = users;
        
        let nombreImagen=req.file.filename;

		let idNuevo = usuarios[usuarios.length-1].id + 1;

      let nuevoUsuario = {
			id: idNuevo,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
            email:req.body.email,
            usuario: req.body.usuario,
            password: bcrypt.hashSync(req.body.password,10),
            telefono: req.body.telefono,
            direction: req.body.direction,
            notas: req.body.notas,
			imagen: nombreImagen,
		};

        usuarios.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(usuarios,null,' '));
        res.redirect('/home');
    
    },
    logeando:(req,res)=>{
        
    let usuarios=users;
    let cont=1;
    for (let i=0;i<usuarios.length;i++)
    {
        cont++;
        if(usuarios[i].usuario==req.body.usuario){
        
            let passwordOk=bcrypt.compareSync(req.body.password,usuarios[i].password)
            
            if(passwordOk){
                res.redirect('/home');
            }else{
                res.send("ERROR DE CONTRASEÑA"); //cartelito error contraseña
            }
        }else if(cont>usuarios.length){
            res.send("ERROR DE USUARIO");//cartelito error usuario
        }
    }
    },

}

module.exports=usersControllers;