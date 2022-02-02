
import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import  {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid =( {Categoria}) =>{

    const {data:gifts,loading} = useFetchGifs(Categoria);

    return <>
            <h3 className="animate__animated animate__fadeIn" >{Categoria}</h3>    
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

    Categoria: PropsTypes.string.isRequired

}


export default GifGrid;