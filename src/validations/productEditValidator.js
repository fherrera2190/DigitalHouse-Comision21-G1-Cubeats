const {check} = require('express-validator');

module.exports = [
  check('title')
  .notEmpty().withMessage("El Titulo del Beat es obligatorio").bail()
  .isLength({ min: 4, max: 20 }).withMessage('Debe tener entre 4 y 20 caracteres'),

  check("category")
  .notEmpty().withMessage("La categoría es obligatoria"),

  check("price")
  .notEmpty().withMessage("Es obligatorio")
  .isInt({ gt: 1 }).withMessage("El precio debe ser positivo"),

];