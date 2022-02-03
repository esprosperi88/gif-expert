
import {getGif} from '../../helpers/getGifs';
describe('Prueba helper - GifGrid - retorna cantidad de registros  ',() => {

    const Categoria = 'dragon';

    test('GifGrid - snapshot',async() => {
        const saludo = 'hola';
        const gifs = await getGif(Categoria);

        expect (gifs.length).toBe(10);
    });

});