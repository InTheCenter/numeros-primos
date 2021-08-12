const supertest = require("supertest");
const { app } = require("../app");
const request = supertest(app);

describe('Set de pruebas números primos API', () => {
    it("GET /primos/n --> verifica que el tipo de contenido esperado sea de tipo json ", () => {
        return request.get("/api/primos/5").expect("Content-Type", /json/);
    });

    it("GET /primos/n --> valida que se deba recibir un parámetro ", () => {
        return request.get("/api/primos").expect("Content-Type", /json/).expect(400);
    });

    it("GET /primos/n --> valida que el parámetro recibido sea un número ", () => {
        return request
            .get("/api/primos/sdf")
            .expect("Content-Type", /json/)
            .expect(400);
    });

    it("GET /primos/n --> valida que el parámetro recibido sea un número mayor a 1 ", () => {
        return request
            .get("/api/primos/-5")
            .expect("Content-Type", /json/)
            .expect(400);
    });

    it("GET /primos/n --> devuelve arreglo de números primos entre 2 y 7 ", () => {
        const expected = [7, 5, 3, 2];
        const n = 7;
        return request
            .get(`/api/primos/${n}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        primos: expect.arrayContaining(expected),
                    })
                );
            });
    });

    it("GET /primos/n --> devuelve arreglo de números primos entre 2 y 15 ", () => {
        const expected = [13, 11, 7, 5, 3, 2];
        const n = 15;
        return request
            .get(`/api/primos/${n}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        primos: expect.arrayContaining(expected),
                    })
                );
            });
    });
});