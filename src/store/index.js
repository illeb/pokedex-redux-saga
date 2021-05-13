import {createSlice, configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import createSagaMiddleware from "redux-saga";
import createSaga from './saga';
import auth from './state/auth';
import pokemon from './state/pokemon/index'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: {
		pokemons: pokemon,
		auth: auth,
		layout:	 null
	},
	middleware: (cdm) => cdm().concat(sagaMiddleware)
})

sagaMiddleware.run(createSaga());
export default store;