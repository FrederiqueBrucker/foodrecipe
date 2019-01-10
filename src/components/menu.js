import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuStyle.css';


class Menu extends Component{
  render(){
    return (
      <div className="menu">
        <div className="wrapperMenu">
          <p className="logo">Food Recipe</p>
          <Link to="/home" >Accueil</Link>
          <Link to="/red">Mon frigo</Link>
          <Link to="/green">Favoris</Link>
          <Link to="/yellow">Profil</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
