import combineSagas from './combineSagas';
import pokemonSagas from './state/pokemon/saga'

export default function createSaga() {
	return combineSagas(
		pokemonSagas
	);
  }
  