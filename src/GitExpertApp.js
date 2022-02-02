
import React, { useState } from 'react';
import AddCategoria from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';
export const GitExpertApp =() =>{

    const [categorias,setCategorias] = useState(['One Punch']);
    
    const handleAdd = () =>{
        setCategorias([...categorias,'newCategoria']);
        console.log("boton");
    }

    return (<>
                <h2>gif-expert</h2>
                <AddCategoria setCategorias={setCategorias} />
                <hr/>
                <ol>
                    {
                        categorias.map(categoria => (
                         <GifGrid   
                                    key={ categoria }  
                                    Categoria= {categoria} 
                               />
                        ))
                    }
                </ol>
                <hr/>
                <button onClick={handleAdd}>button</button>  
            </>
    );

}

export default GitExpertApp;