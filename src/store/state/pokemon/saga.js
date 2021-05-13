
import { all, fork, takeEvery } from "redux-saga/effects";
import { call, put, select, takeLatest,
} from 'redux-saga/effects';
import { getPokemons, getPokemonsSuccess, getPokemonsFailure } from '.';
import api from '../../../../src/Api/pokemon';

// worker(?) saga
function* GetPokemons() {
  try {
    // qui cerco di ottenere tutti gli url dei pokemons
    const pokemonsUris = yield call(api.getPokemons);
    const apisToCall = pokemonsUris.results.map(pokemonApi => pokemonApi.url);

    // in questo pezzo sostanzialmente faccio un forkjoin() (all === forkjoin). da notare il parametro dopo call. quello è il modo per passare un parametro alla funzione.
    const pokemons = yield all(apisToCall.map(apiOfPokemon => call(api.getPokemon, apiOfPokemon)));

    yield put(getPokemonsSuccess(pokemons));
  }
  catch(e) {
    console.error(e);
    yield put(getPokemonsFailure);
  }
}

// watcher saga
function* watchGetPokemon() {
  yield takeEvery(getPokemons, GetPokemons);
}

function* pokemonSaga() {
  yield all([
    watchGetPokemon()
  ]);
}

export default pokemonSaga;