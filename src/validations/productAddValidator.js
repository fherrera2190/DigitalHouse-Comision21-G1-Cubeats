const {check, body} = require('express-validator');

module.exports = [
    check('title')
    .notEmpty()
    .withMessage("El Titulo del Beat es obligatorio")
    .bail()
    .isLength({
        min : 4,
        max : 20
    })
    .withMessage('Debe tener entre 4 y 20 caracteres'),

    check("category")
    .notEmpty()
    .withMessage("La categoría es obligatoria"),

    check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("El precio debe ser positivo"),

    body('beat')
    .custom((value,{req}) => {
        if(req.files.beat){
          return true
        }
        return false
      }).withMessage('Debes subir un beat')

];