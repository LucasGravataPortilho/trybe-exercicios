const myRemove = require('./myRemove');

describe('Exercício 2', () => {
    it('verificando se elimina o item 3', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });
    it('verificando se não retorna array', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
    });
    it('verificando se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
    });
});