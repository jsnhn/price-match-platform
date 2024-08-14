const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token // this get function will grab any header 
    req.user = null
    if(!token) return next()// will stop any code underneath and will make sure the middleware will continue
    token = token.replace('Bearer ', '')//removing the substring. shave off the bearer   part
    jwt.verify(token, process.env.SECRET, function(err, decoded){ //secret verifies the server. decoded is the payload that is decoded
        if(err) return next()
        req.user = decoded.user
        req.exp = new Date(decoded.exp * 1000)
        return next()
    }) 
}