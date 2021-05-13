import classes from './PokemonCard.module.scss';

const PokemonCard = ({pokemon}) => {
	return (
		<div className={classes.PokemonCard}>
			<h3>{pokemon.id}</h3>
			<img src={pokemon.sprites['front_default']}></img>
		</div>
	);
}

export default PokemonCard;