import React, { Component } from 'react';
import '../styles/AjoutStyle.css';
import axios from 'axios';


class Ajout extends Component{
  state = {
    title:"",
    type: "",
    ingredients:"",
    description:"",
    imageUrl: ""
  };

  enregistrer(){
    axios.post('https://test.corentindesfarges.fr/recettes', this.state);
  }

  render(){
    return (
      <div className="AjoutStyle">
        <h2>Ajoute une recette</h2>

        <div className="Form">
          <div className="formrecette">
              <input 
              className="title" 
              type="text" 
              name="titre" 
              value={this.state.title} 
              onChange={event => this.setState({ title: event.target.value })}
              placeholder="Titre de la recette">
              </input>
              <p>
                <label for="type">Type :</label><br />
                  <select 
                  name="type" 
                  id="type"
                  onChange={event => this.setState({ type: event.target.value })}>
                      <option value="">Sélectionner le type</option>
                      <option value="salade">Salade</option>
                      <option value="apero">Apéro</option>
                      <option value="desserts">Desserts</option>
                      <option value="brunch">Brunch</option>
                      <option value="veggie">Veggie</option>
                      <option value="bon">Bon & Sain</option>
                      <option value="piquenique">Pique-Nique</option>
                      <option value="rapide">Rapide</option>
                      <option value="pizza">Pizzas & Tartes</option>
                       <option value="smoothies">Jus et Smoothies</option>
                  </select>
              </p>
              <p>
                <label for="ingredients">Liste des ingrédients :</label><br />
                <textarea 
                name="ingredients" 
                id="ingredients" 
                placeholder="Oeufs, Farine, Sel, Poivre..." 
                rows="7" cols="41"
                value={this.state.ingredients} 
                onChange={event => this.setState({ ingredients: event.target.value })}
                >
                </textarea>
              </p>
              <p>
                <label for="description">Préparation :</label><br />
                <textarea 
                name="description" 
                id="description" 
                placeholder="Description des étapes de préparation" 
                rows="7" cols="41"
                value={this.state.description}
                onChange={event => this.setState({ description: event.target.value })}
                >
                </textarea>
              </p>
              <label>Insérer une image :</label>
               <input 
               className="imageRecette" 
               type="text" 
               name="imageRecette" 
               placeholder="url de l'image"
               value={this.state.imageUrl}
               onChange={event => this.setState ({ imageUrl: event.target.value})}
               >
               </input>

              <input type="submit" value="Enregistrer" className="button-enregistrer" onClick={() =>this.enregistrer()}></input>
          </div>
        </div>
        </div>
      
    );
  }
}


export default Ajout;
