import React, { Component } from 'react';
import '../styles/ListeRecettesStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ListeRecette extends React.Component{
    state = {liste: []};

    componentDidMount(){
        axios.get(`https://test.corentindesfarges.fr/recettes?type=${this.props.match.params.type}`).then((response) => {this.setState({liste: response.data})
        });
        
}

render(){
    return (
        <div className="liste_recettes">
            {
                this.state.liste.map(function(recette){
                    return (
                    <div className="recettes_affiche">
    
                        <div className="recettes_img">
                            <img src={recette.imageUrl}></img>
                        </div>

                        <div>
                            <Link to={`/recette/${recette.id}`}>
                                <div>
                                    {recette.title}
                                </div>
                            </Link>

                            <div>
                                {recette.ingredients}
                            </div>
                        </div>

                    </div>);
                })
            }
        </div>
    );
}
}

