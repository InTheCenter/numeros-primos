const { esCandidatoValido, esPrimo, ordenarNumeros } = require('../../helpers/calcular-primos');

describe('Set de pruebas helper calcular-primos', () => {
    it('Debe retornar error al enviar numero menor o igual a 1', () => {
        expect(() => esCandidatoValido(1)).toThrow();
    });
    it('Debe definir que número ingresado es primo', () => {
        const numeroPrimo = 5;
        expect(esPrimo(numeroPrimo)).toBeTruthy();
    });
    it('Debe definir que número ingresado no es primo', () => {
        const numeroNoPrimo = 4;
        expect(esPrimo(numeroNoPrimo)).toBeFalsy();
    });
    it('Debe ordenar ascendentemente arreglo de números', () => {
        const array = [3, 1, 2, 5, 4];
        const expected = [1, 2, 3, 4, 5];
        expect(ordenarNumeros(true, array)).toStrictEqual(expected);

    });
    it('Debe ordenar descendentemente arreglo de números', () => {
        const array = [3, 1, 2, 5, 4];
        const expected = [5, 4, 3, 2, 1];
        expect(ordenarNumeros(false, array)).toStrictEqual(expected);
    });
});