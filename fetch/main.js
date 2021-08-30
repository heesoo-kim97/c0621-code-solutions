fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
  .then(response => response.json())
  .then(data => console.log('Snorlax: ', data));
