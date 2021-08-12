const esCandidatoValido = (n) => {
    if (n <= 1) {
        throw new Error('El número ingresado debe ser mayor a 1');
    }
    return true
};

const esPrimo = (n) => {
    for (let j = 2; j < n; j++) {
        if (n % j === 0 && n != j) {
            return false;
        }
    }

    return n !== 1;
};

const ordenarNumeros = (asc = true, numeros) => {
    if (asc) {
        return numeros.sort((a, b) => a - b);
    } else {
        return numeros.sort((a, b) => b - a);
    }
};

module.exports = {
    esPrimo,
    ordenarNumeros,
    esCandidatoValido,
};