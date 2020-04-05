describe('my first test', () => {
    let sut; // System under test

    // Se ejecuta cada vez que se inicia un test. 
    // Podria servir para inicializar la data
    beforeEach(() => {
        sut = {};
    })

    //test que está anidado al describe
    it('should be true if true', () => {
        //arrange
        sut.a = false;
        //act
        sut.a = true;
        //assert
        expect(sut.a).toBe(true);
    })

});