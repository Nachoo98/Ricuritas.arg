function adminMiddleware(req, res, next) {
	if (req.session.userLogged) {
		if(req.session.userLogged.nombreUsuario==='TheComedian'){
			next();
		}else{
			return res.send('Permisos Invalidos');
	}
	}
	
}

module.exports = adminMiddleware;