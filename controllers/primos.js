const { response, request } = require("express");
const { esPrimo, ordenarNumeros } = require('../helpers/calcular-primos');

const primosGet = (req = request, res = response) => {
    const { n } = req.params;

    if (n == undefined) {
        return res.status(400).json({
            msg: `Debe ingresar un parámetro`
        })
    }

    const primos = [];

    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }


    res.json({
        msg: "pass!",
        primos: ordenarNumeros(false, primos),
    });
};

module.exports = {
    primosGet
};