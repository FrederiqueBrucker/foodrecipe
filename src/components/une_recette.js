import React, { Component } from 'react';
import '../styles/uneRecetteStyle.css';
import axios from 'axios';

export default class UneRecette extends React.Component{
    state = {unerecette: {description:""} };

    componentDidMount(){
        axios.get(`https://test.corentindesfarges.fr/recettes/${this.props.match.params.id}`).then((response) => {this.setState({unerecette: response.data})
        });
        
}

render(){
    return (
        <div className="une_recette">
            <h2>
                {this.state.unerecette.title}
            </h2>
            <div className="img_unerecette">
                <img src={this.state.unerecette.imageUrl}></img>
            </div>
            <p className="etape_title">Liste des ingrédients :</p>
            <div className="ingredients_liste">
                {this.state.unerecette.ingredients}
            </div>
            <p className="etape_title">Les étapes à suivre : </p>
            <div className="etape_liste">
                {this.state.unerecette.description.split("- ").slice(1).map(function(etape){
                        return(
                            <div>
                                - {etape}
                            </div>
                        )
                                
                    }
                
                )}
            </div>
        </div>
    );
}
}
