import React from 'react';
import PropsTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import  {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid =( {categoria}) =>{

    const {data:gifts,loading} = useFetchGifs(categoria);

    return <>
            <h3 className="animate__animated animate__fadeIn" >{categoria}</h3>    
            <div className="card-grid">   
                {
                gifts.map(item => (
                      
                    <GifGridItem 
                                key={ item.id } 
                                {...item} />
                            
                    ))
                }
            </div>
            </>

}

GifGrid.propTypes={

    categoria: PropsTypes.string.isRequired

}


export default GifGrid;