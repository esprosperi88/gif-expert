import React from "react";
import GifGrid from '../../components/GifGrid';
import {shallow}   from 'enzyme'

import  {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Prueba component - GifGrid ',() => {
    
    let wrapper;
    
    beforeEach( () => {   
        jest.clearAllMocks();

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
       
        wrapper = shallow(<GifGrid  
            categoria= "dragon" 
        />);
    });

    test('GifGrid - snapshot',() => {
        expect (wrapper).toMatchSnapshot();
    });

    test('GifGrid - debe mostrar items cuando se cargan imagenes en useFetchGif',() => {

        const gifs=[{
            id:"(id)",
            url:"(url)",
            title:"(titulo)"
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:true
        })

        wrapper = shallow(<GifGrid  
            categoria= "dragon" 
        />);

        expect (wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});