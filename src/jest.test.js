import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import ListeRecette from './components/liste_recettes.js';
import UneRecette from './components/une_recette.js';

describe('<ListeRecette />', () =>{

    test('renderer is correct', () => {
        const tree = renderer
            .create(<ListeRecette />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<UneRecette />', () => {
    test('contains five div', () => {
        const wrapper = shallow(<UneRecette />);
        expect(wrapper.find('div')).toHaveLength(5);
    })
})
