
import { useEffect, useState } from 'react';
import {getGif} from '../helpers/getGifs';
export const useFetchGifs =( Categoria) =>{

    const [state,setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGif(Categoria).then(gifs => {
            setState({
                data:gifs,
                loading:false
            })
        });
    },[Categoria]);

    return state;
}
