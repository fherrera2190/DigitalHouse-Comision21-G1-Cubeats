const { validationResult } = require('express-validator');
const { leerJson } = require('../../data/index');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');


module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const users = leerJson(usersFilePath);
        const { userId, name, role } = users.find(user => user.email === req.body.email)
        req.session.userLogged = {
            userId, 
            name, 
            role 
        }
            
        return res.redirect('/')
    }else{
        return res.send(errors.mapped())
    }

}