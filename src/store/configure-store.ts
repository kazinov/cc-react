import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { IState } from '../reducers/initial-state';

export default function configureStore(initialState: IState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
