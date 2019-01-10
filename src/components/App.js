import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';


import '../styles/App.css';

import Menu from './menu.js';
import Home from './Home.js';
import RedBox from './RedBox.js';
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
                <Route path='/red' component={RedBox} />
                <Route path='/green' component={GreenBox} />
                <Route path='/yellow' component={YellowBox} />
              </Switch>


          </div>
      </div>
    );
  }
}

export default App;
