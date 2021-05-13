import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../store/state/pokemon';
import classes from './Pokedex.module.scss';
import PokemonCard from './Pokemon-card/PokemonCard';

const Pokedex = (props) => {
	const dispatch = useDispatch();
	const pokemons = useSelector(state => {
		return state.pokemons.pokemons;
	})

	console.log(pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch])

	return (
		<div className={classes.pokedex}>
			{pokemons.map(pokemon => (
				<PokemonCard className={classes.pokedexCards} key={pokemon.id} pokemon={pokemon}>

				</PokemonCard>
			))}
		</div>
	);
}

export default Pokedex;