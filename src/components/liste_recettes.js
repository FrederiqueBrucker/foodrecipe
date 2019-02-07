import React, { Component } from 'react';
import '../styles/ListeRecettesStyle.css';
import axios from 'axios';

export default class ListeRecette extends React.Component{
    state = {liste: []};

    componentDidMount(){
        axios.get(`https://test.corentindesfarges.fr/recettes?type=${this.props.match.params.type}`).then((response) => {this.setState({liste: response.data})
        });
        
}

render(){
    return (
        <div>
            {
                this.state.liste.map(function(recette){
                    return (
                    <ul>
                        <li>
                        {recette.title}
                        </li>
                        <li>
                        {recette.description}
                        </li>
                    </ul>);
                })
            }
        </div>
    );
}
}

