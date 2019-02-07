import React, { Component } from 'react';
import '../styles/themeStyle.css';
import Salade from '../img/salade.jpg';
import Apero from '../img/apero.jpg';
import Desserts from '../img/desserts.jpg';
import Brunch from '../img/brunch.jpg';
import Veggie from '../img/veggie.jpg';
import Bon from '../img/bon.jpg';
import Pique from '../img/pique.jpeg';
import Rapide from '../img/rapide.jpg';
import Pizza from '../img/pizza.jpg';
import Smoothie from '../img/smoothie.jpg';

class ThemeCard extends Component{
  render(){
    return (
      <div className="globalTheme">

          <div className="presentation">
            <h1>Bienvenue sur Food Recipe</h1>
          </div>

          <div className="searchbar">
              <input className="baraccueil" type="text" name="search" placeholder="Rechercher" />
          </div>

          <div className="allCard">
              <div className="Card">
                <p>Salades</p>
                <img src={Salade}/>
              </div>

              <div className="Card">
                <p>Apéro</p>
                <img src={Apero} />
              </div>

              <div className="Card">
                <p>Desserts</p>
                <img src={Desserts}/>
              </div>

              <div className="Card">
                <p>Brunch</p>
                <img src={Brunch}/>
              </div>

              <div className="Card">
                <p>Veggie</p>
                <img src={Veggie}/>
              </div>

              <div className="Card">
                <p>Bon & Sain</p>
                <img src={Bon}/>
              </div>

              <div className="Card">
                <p>Pique-Nique</p>
                <img src={Pique}/>
              </div>

              <div className="Card">
                <p>Rapide</p>
                <img src={Rapide}/>
              </div>

                <div className="Card">
                  <p>Pizzas & Tartes</p>
                  <img src={Pizza}/>
                </div>

                <div className="Card">
                  <p>Jus & Smoothies</p>
                  <img src={Smoothie}/>
                </div>

              </div>

        </div>
    );
  }
}

export default ThemeCard;
