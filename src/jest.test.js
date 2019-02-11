import React from 'react';
import renderer from 'react-test-renderer'; 

import ListeRecette from './liste_recettes.js';

describe('<ListeRecette />', () =>{

    test('renderer is correct', () => {
        const tree = renderer
            .create(<ListeRecette />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
