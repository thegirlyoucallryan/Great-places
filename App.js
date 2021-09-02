
import React from 'react';
import PlacesNavigator from './nav/PlacesNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {init} from './helpers/db';


init().then(() => {
  console.log('good')
} )
.catch(e => {
  console.log('bad');
  con;sole.log(e);
})

import placesReducer from './store/reducers/places-reducer';


const rootReducer = combineReducers({
    places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
   <PlacesNavigator />
   </Provider>
  );
}

