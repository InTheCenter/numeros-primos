const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos
} = require('../middlewares');


const { esCandidatoValido } = require('../helpers/calcular-primos');

const {
    primosGet
} = require('../controllers/primos');

const router = Router();


router.get('/', primosGet);

router.get('/:n', [
        check('n', 'El número es obligatorio').not().isEmpty(),
        check('n', 'El parámetro debe ser un número').isNumeric(),
        check('n').custom(esCandidatoValido),
        validarCampos
    ],
    primosGet);






module.exports = router;