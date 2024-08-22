const express = require('express')
const users = require('../user-json')
const findUserById = require('./user-controller')

const router = express.Router()


router.post('/users', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }

    const user = { id: users.length + 1, name, age };
    users.push(user);
    res.status(201).json(user);  
});

router.get('/users', (req, res) => {
    const id = req.query.id;

    if (id) {
        const foundUser = users.find(user => user.id === parseInt(id));

        if (foundUser) {
            res.json({
                message: `User with id: ${foundUser.id}`,
                user: foundUser
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } else {
        res.json(users);  
    }
});

router.get('/users/:id', controller, (req, res) => {
try {
    res.json(req.user);
}catch(err){
    res.status(500).json({ message: 'Internal Server Error' });
}
});

module.exports = router