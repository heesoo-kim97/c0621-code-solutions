import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png'
  },
  {
    id: 2,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png'
  },
  {
    id: 3,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png'
  },
  {
    id: 4,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png'
  },
  {
    id: 5,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png'
  }
];

ReactDOM.render(<Carousel images={images} />, document.querySelector('#root'));
