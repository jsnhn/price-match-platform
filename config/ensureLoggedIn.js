module.exports = function (req, res, next) {
    if(!req.user) return res.status(401).json('Unauthorized') //401 means unauthorized. will only run if there is no req.user
    return next()
}