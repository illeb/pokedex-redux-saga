const getPokemons = () => fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
	.then(result => result.json())
	.catch(error => { throw error});

const getPokemon = (pokemonUrl) => fetch(pokemonUrl)
.then(result => result.json())
.catch(error => { throw error});

export default { getPokemons, getPokemon };
