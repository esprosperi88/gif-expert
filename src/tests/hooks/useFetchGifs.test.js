
import  {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Prueba component - useFetchGifs ',() => {
    
    test('useFetchGifs - debe retornar el estado inicial',async() => {
    
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('Dragon'));
        const {data,loading} = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    
    });
    
    test('useFetchGifs - debe cantidad de 10 imagenes', async() => {
    
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('Dragon'));
        await waitForNextUpdate();  
        const {data,loading} = result.current;

  
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    
    });
    
        



});