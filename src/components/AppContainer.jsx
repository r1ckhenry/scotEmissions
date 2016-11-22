import React from "react";

import Header from "./Header";
import Chart from  "./Chart";

import { connect } from 'react-redux'

const AppContainer = ( { data, dispatch } ) => {

  return(
    <div>
      <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
      <Chart />
    </div>
  )

}

const mapStateToProps = ( state ) => {
  return state
}

export default connect( mapStateToProps )( AppContainer );
