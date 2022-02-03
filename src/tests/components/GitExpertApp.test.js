import React from "react";
import GitExpertApp from '../../GitExpertApp';
import {shallow}   from 'enzyme'

describe('Prueba component - GitExpertApp ',() => {
    
    let wrapper;
    const  categorias =["dragon ball","goku"];
    beforeEach( () => {   
        jest.clearAllMocks();

        wrapper = shallow(<GitExpertApp defaultCategorias= {categorias} />);
    });

    test('GitExpertApp - snapshot',() => {
        expect (wrapper).toMatchSnapshot();
    });

    test('GitExpertApp - verifico si crea los items de categoria',() => {
        expect (wrapper.find('GifGrid').length).toBe(categorias.length)
    });

});