import React from "react";
import AddCategoria from '../../components/AddCategoria';
import {shallow}   from 'enzyme'


describe('Prueba component - AddCategoria ',() => {

    const setCategorias = () => {};

    let wrapper;

    beforeEach( () => {        
        wrapper = shallow(<AddCategoria 
            setCategorias={setCategorias} />);
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




});