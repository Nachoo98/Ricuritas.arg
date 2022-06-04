function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		if(req.session.userLogged.nombreUsuario==='TheComedian'){
			return res.redirect('/usuarios/perfilAdmin')
		}else{
			return res.redirect('/usuarios/perfil');
	}
	}
	next();
}

module.exports = guestMiddleware;