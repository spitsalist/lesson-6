const users = require('../user-json')

function findUserById(req, res, next) {
    const id = req.params.id || req.query.id;
    const foundUser = users.find(user => user.id === id);

    if (foundUser) {
        req.user = foundUser;
        next();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

module.exports = findUserById