import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';


import '../styles/App.css';

import Menu from './menu.js';
import Home from './Home.js';
import Ajout from './Ajout.js';
import GreenBox from './GreenBox.js';
import YellowBox from './YellowBox.js';

class App extends Component {
  render() {
    return (

        <div className="principal">

          <Menu />
            <div className="wrapper">
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/ajout' component={Ajout} />
                <Route path='/green' component={GreenBox} />
                <Route path='/yellow' component={YellowBox} />
              </Switch>


          </div>
      </div>
    );
  }
}

export default App;
