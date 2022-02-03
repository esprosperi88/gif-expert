
import  {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';


test('useFetchGifs - debe retornar el estado inicial',() => {
    
    const {result} = renderHook(()=>useFetchGifs('Dragon'));

    const {data,loading} = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);

})