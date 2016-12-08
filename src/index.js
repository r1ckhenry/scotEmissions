import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";

import AppContainer from "./components/AppContainer";
import reducer from "./reducers";

const store = createStore( reducer );

const init = () => {

  ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
    </Provider>,
    document.getElementById( "app" )
  )

}

window.onload = () => {

  const request = new XMLHttpRequest();
  request.open( "GET", "/sectors" );

  request.onload = () => {
    const data = JSON.parse( request.response );
    store.dispatch( { type: "ADD_DATASET", data } );
    init();
  }

  request.send();
}
