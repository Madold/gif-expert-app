import { getGifs } from "../../src/utils/GetGifs";

describe('Pruebas en el Hook GetGifs', () => {
    
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs("Goku")
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
    

});
