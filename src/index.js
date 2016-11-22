import { filterBy, prepForBarChart, getAllUniqBy } from "./libs/aggregation";
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
      // var years = getAllUniqBy( data, "emission" );
      // console.log( years )

      // var barData = filterBy( data, [["year", "1998"], ["emission", "CO2"]] );
      // var result = prepForBarChart( barData );
      //
      // var prepData = [ [ "sector", "CH4 total emission" ] ].concat( result );
      //
      // google.charts.load('current', {packages: ['corechart', 'bar']});
      // google.charts.setOnLoadCallback(drawBasic);
      //
      // function drawBasic() {
      //
      //   var data = google.visualization.arrayToDataTable( prepData );
      //
      //   var options = {
      //     height: 600,
      //     title: 'CH4 Emission Scotland',
      //     hAxis: {
      //       title: 'Total Emission'
      //     },
      //     vAxis: {
      //       title: 'Sector'
      //     }
      //   };
      //
      //   var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      //   chart.draw(data, options);
      // }


    })
}
