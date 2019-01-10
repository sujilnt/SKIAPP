import C from './constants';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes.js';
import sampleData from './initialState.json';
import storeFactory from './store/storeFactory';
import { Provider } from 'react-redux';
import { addError } from './store/actions';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(
      addError(error.message)
  )
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener("error", handleError)

render(
<Provider store={store}>
    {routes}
    </Provider>,
document.getElementById('react-container')
)
