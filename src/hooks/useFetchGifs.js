
import { useEffect, useState } from 'react';
import {getGit} from '../helpers/getGifs';
export const useFetchGifs =( Categoria) =>{

    const [state,setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGit(Categoria).then(gifs => {
            setState({
                data:gifs,
                loading:false
            })
        });
    },[Categoria]);

    return state;
}
