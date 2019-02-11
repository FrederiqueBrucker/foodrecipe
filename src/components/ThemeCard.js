import React, { Component } from 'react';
import '../styles/themeStyle.css';
import { Link } from 'react-router-dom';
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
            <h1>Bienvenue sur Food Recipe !</h1>
          </div>

          <div className="searchbar">
              <input className="baraccueil" type="text" name="search" placeholder="Rechercher" />
          </div>

          <div className="allCard">
            <Link to="/recettes/salade">
                <div className="Card">
                  <p>Salades</p>
                  <img src={Salade}/>
                </div>
            </Link>

            <Link to="/recettes/apero">
              <div className="Card">
                <p>Apéro</p>
                <img src={Apero} />
              </div>
            </Link>

            <Link to="recettes/desserts">
              <div className="Card">
                <p>Desserts</p>
                <img src={Desserts}/>
              </div>
            </Link>

            <Link to="/recettes/brunch" >        
            <div className="Card">
                <p>Brunch</p>
                <img src={Brunch}/>
              </div>
            </Link>      
 
            <Link to="/recettes/veggie">
              <div className="Card">
                <p>Veggie</p>
                <img src={Veggie}/>
              </div>
            </Link>

            <Link to="/recettes/bon">
              <div className="Card">
                <p>Bon & Sain</p>
                <img src={Bon}/>
              </div>
            </Link>

            <Link to="/recettes/piquenique">
              <div className="Card">
                <p>Pique-Nique</p>
                <img src={Pique}/>
              </div>
            </Link>

            <Link to="/recettes/rapide">
              <div className="Card">
                <p>Rapide</p>
                <img src={Rapide}/>
              </div>
            </Link>

            <Link to="/recettes/pizza">
                <div className="Card">
                  <p>Pizzas & Tartes</p>
                  <img src={Pizza}/>
                </div>
            </Link>

            <Link to="/recettes/smoothies">
                <div className="Card">
                  <p>Jus & Smoothies</p>
                  <img src={Smoothie}/>
                </div>
            </Link>

              </div>

        </div>
    );
  }
}

export default ThemeCard;
