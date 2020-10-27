const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    //getting token from header
    const token = req.header('x-auth-token');

    //check if not token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorisation denied' });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};