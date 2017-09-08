import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState){
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(thunk,reduxImmutableStateInvarient())
  );
}
