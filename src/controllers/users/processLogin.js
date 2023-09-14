const { validationResult } = require('express-validator');
const { leerJson } = require('../../data/index');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');


module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const users = leerJson(usersFilePath);
        const { userId, username, role } = users.find(user => user.email === req.body.email)
        req.session.userLogged = {
            userId, 
            username, 
            role 
        }

        req.body.remember !== undefined && res.cookie('CuBeatsX100pre' ,req.session.userLogged,{
            maxAge : 1000 * 60 * 5
        })
            
        return res.redirect('/')
        
    }else{

        res.render('login', {
            errors: errors.mapped(),
            old: req.body
        });
    }

}