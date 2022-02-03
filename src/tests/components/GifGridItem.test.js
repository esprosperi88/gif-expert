import React from "react";
import GifGridItem from '../../components/GifGridItem';
import {shallow}   from 'enzyme'


describe('Prueba component - GifGridItem',() => {
    const key ="categoria";
    const url="(url)";
    const title="(titulo)";

    let wrapper;

    beforeEach( () => {        
        wrapper = shallow(<GifGridItem 
            key={key}
            url={url}
            title={title} />);
    });


    test('GifGridItem - snapshot',() => {
        expect (wrapper).toMatchSnapshot();
    });

    test('GifGridItem - verifica titulo ',() => {
        const titulo = wrapper.find('p').text();


        expect (titulo.trim()).toBe(title);


    });
    test('GifGridItem - verifica url y alt',() => {
        const img = wrapper.find('img');

        


        expect (img.prop('src')).toBe(url);
        expect (img.prop('alt')).toBe(title);


    });
    test('GifGridItem - verifica clase CSS  ',() => {
        const div = wrapper.find('div');

        console.log(div);


        expect (div.prop('className').includes('animate__fadeIn')).toBe(true);


    });


});