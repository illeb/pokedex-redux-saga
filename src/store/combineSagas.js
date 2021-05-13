import { all, fork } from 'redux-saga/effects';

export default function combineSagas(...sagas) {
  return function* combinedSagas() {
    yield all(sagas.map((saga) => fork(saga)));
  };
}
