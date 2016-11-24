import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux';
import { Provider } from "react-redux";

import AppContainer from "./components/AppContainer"
import reducer from "./reducers"

const store = createStore( reducer )

const init = () => {

  ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
    </Provider>,
    document.getElementById( "app" )
  )

}

window.onload = () => {

  fetch( "/sectors" )
    .then( ( response ) => {
      return response.json();
    }).then( ( data ) => {
      store.dispatch( { type: "ADD_DATASET", data } )
      init();
    })
}
