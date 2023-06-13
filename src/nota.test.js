const Nota = require('./models/nota');

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
});

describe('Função mediaCA()', () => {
    test('A Media CA é SS para medias entre 9 e 10', ()=> {
        let nota = new Nota(null, 9, 9, 0);
        expect(nota.mediaCA()).toEqual("SS");
        nota = new Nota(null, 10, 10, 0);
        expect(nota.mediaCA()).toEqual("SS");
        nota = new Nota(null, 8.99, 8.99, 0);
        expect(nota.mediaCA()).not.toEqual("SS");
    })
    test('A Media CA é MS para medias entre 7 e 8.9', ()=> {
        let nota = new Nota(null, 7, 7, 0);
        expect(nota.mediaCA()).toEqual("MS");
        nota = new Nota(null, 8.9, 8.9, 0);
        expect(nota.mediaCA()).toEqual("MS");
        nota = new Nota(null, 6.99, 6.99, 0);
        expect(nota.mediaCA()).not.toEqual("MS");
    })
    test('A Media CA é MM para medias entre 5 e 6.9', ()=> {
        let nota = new Nota(null, 5, 5, 0);
        expect(nota.mediaCA()).toEqual("MM");
        nota = new Nota(null, 6.9, 6.9, 0);
        expect(nota.mediaCA()).toEqual("MM");
        nota = new Nota(null, 4.99, 4.99, 0);
        expect(nota.mediaCA()).not.toEqual("MM");
    })
    test('A Media CA é MI para medias entre 3 e 4.9', ()=> {
        let nota = new Nota(null, 3, 3, 0);
        expect(nota.mediaCA()).toEqual("MI");
        nota = new Nota(null, 4.9, 4.9, 0);
        expect(nota.mediaCA()).toEqual("MI");
        nota = new Nota(null, 2.99, 2.99, 0);
        expect(nota.mediaCA()).not.toEqual("MI");
    })
    test('A Media CA é II para medias entre 0.1 e 2.9', ()=> {
        let nota = new Nota(null, 0.1, 0.1, 0);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 2.9, 2.9, 0);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaCA()).not.toEqual("II");
    })
    test('A Media CA é SR para medias 0', ()=> {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaCA()).toEqual("SR");
        nota = new Nota(null, 0.00001, 0.00001, 0);
        expect(nota.mediaCA()).not.toEqual("SR");
    })
})