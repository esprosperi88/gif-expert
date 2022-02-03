import React from "react";
import GifGrid from '../../components/GifGrid';
import {shallow}   from 'enzyme'


describe('Prueba component - GifGrid ',() => {


    test('GifGrid - snapshot',() => {
        const saludo = 'hola';
        const wrapper = shallow(<GifGrid
            key="dragon"  
            Categoria= "dragon" 
        />);

        expect (wrapper).toMatchSnapshot();
    });

});