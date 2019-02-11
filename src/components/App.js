import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import ListeRecette from './liste_recettes'


import '../styles/App.css';

import Menu from './menu.js';
import Home from './Home.js';
import Ajout from './Ajout.js';
import UneRecette from './une_recette';


class App extends Component {
  render() {
    return (

        <div className="principal">

          <Menu />
            <div className="wrapper">
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/ajout' component={Ajout} />
                <Route path='/recettes/:type' component={ListeRecette} />
                <Route path='/recette/:id' component={UneRecette} />
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
