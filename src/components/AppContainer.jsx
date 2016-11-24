import React from "react";

import Header from "./Header";
import Filter from "./Filter";
import ChartArea from  "./ChartArea";

import { connect } from 'react-redux'

const AppContainer = ( { data, emissionName, dispatch } ) => {

  return(
    <div>
      <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
      <Filter data={ data } dispatch={ dispatch } />
      <ChartArea data={ data } emissionName={ emissionName } />
    </div>
  )

}

const mapStateToProps = ( state ) => {
  console.log( state, "sstate" )
  return state
}

export default connect( mapStateToProps )( AppContainer );
