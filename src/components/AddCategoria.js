
import React, { useState } from 'react';
import PropsTypes from 'prop-types';

export const AddCategoria =( {setCategorias}) =>{

    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.length>2){
            setCategorias(cat =>[ inputValue,...cat ]);
            setInputValue('');
        }

        console.log(inputValue);
    };

    return (<form onSubmit={handleSubmit}>
                <p>{inputValue}</p>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                /> 
            </form>
    );

}

AddCategoria.propTypes={

    setCategorias: PropsTypes.func.isRequired

}


export default AddCategoria;