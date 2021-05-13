import {createSlice} from '@reduxjs/toolkit';

const initialState = {pokemons: []}

const pokemonSlice = createSlice({
	name: 'pokemons',
	initialState: initialState,
	reducers: {
		getPokemons(state, action) {
		},
		getPokemonsSuccess(state, action) {
			state.pokemons = action.payload;
		},
		getPokemonsFailure(state, action) {
			console.error('failure');
		}
	}
}) 

export const {getPokemons, getPokemonsSuccess, getPokemonsFailure} = pokemonSlice.actions;

export default pokemonSlice.reducer;