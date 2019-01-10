import React, { Component } from 'react';
import '../styles/themeStyle.css';

class ThemeCard extends Component{
  render(){
    return (
      <div className="globalTheme">
          <div className="searchbar">
              <input type="text" name="search" placeholder="Search.." />
          </div>

          <div className="allCard">
              <div className="Card">
                <p>Salades</p>
              </div>

              <div className="Card">
                <p>Apéro</p>
              </div>

              <div className="Card">
                <p>Desserts</p>
              </div>

              <div className="Card">
                <p>Brunch</p>
              </div>

              <div className="Card">
                <p>Veggie</p>
              </div>

              <div className="Card">
                <p>Bon & Sain</p>
              </div>

              <div className="Card">
                <p>Pique-Nique</p>
              </div>

              <div className="Card">
                <p>Rapide</p>
              </div>

                <div className="Card">
                  <p>Pizzas & Tartes</p>
                </div>

                <div className="Card">
                  <p>Jus & Smoothies</p>
                </div>

                <div className="Card">
                  <p>Sucré</p>
                </div>

              </div>

        </div>
    );
  }
}

export default ThemeCard;
