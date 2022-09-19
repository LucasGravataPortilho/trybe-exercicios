const sum = require('./sum');

describe('Exercício 1', () => {
    it('soma(4,5) para retornar 9', () => {
        expect(sum(4,5)).toBe(9);
    });
    it('soma(0,0) para retornar 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    it('lançar erro quando lançar "5"', () => {
        expect(() => { sum() }).toThrow();
    });
    it('lançar mensagem de erro quando lançar "5"', () => {
        expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
    });
});
