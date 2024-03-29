import React from "react";
import AddCategoria from '../../components/AddCategoria';
import {shallow}   from 'enzyme'

import '@testing-library/jest-dom';

describe('Prueba component - AddCategoria ',() => {

    //const setCategorias = () => {};
    const setCategorias = jest.fn();


    let wrapper;

    beforeEach( () => {   
        jest.clearAllMocks();

        wrapper = shallow(<AddCategoria 
                                setCategorias={setCategorias} 
                          />);
    });



    test('AddCategoria - snapshot',() => {
        expect (wrapper).toMatchSnapshot();
    });

    test('AddCategoria - debe de cambiar la caja de texto',() => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change',{target:{value}});
        wrapper.find('p').text()
        expect(wrapper.find('p').text().trim()).toBe(value);
        
        
        
    });

    test('AddCategoria - submit - no debe ingresar a setCategoria',() => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        
        expect(setCategorias).not.toHaveBeenCalled();
    });


    test('AddCategoria - submit - se debe ingresar a setCategoria',() => {
       // const value  = 'prueba';
       //wrapper.find('input').simulate('change',{target:{value}});
        
        const texto = "prueba";
        wrapper.find('input').simulate('change',{target:{value:texto}});
   
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toBeCalledTimes(1);
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));


        expect(wrapper.find('input').text().trim()).toBe('');


    });

});