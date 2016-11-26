import React from "react";

import Header from "./Header";
import Filter from "./Filter";
import ChartArea from  "./ChartArea";

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

import { connect } from 'react-redux'

const AppContainer = ( { data, chart, dispatch } ) => {

  return(
    <div>
      <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
      {/*<Filter data={ data } dispatch={ dispatch } />*/}
      <ChartArea data={ data } chart={ chart } dispatch={ dispatch } />
      {/*<ChartArea data={ chartDataInfo } options={ chartOptions } />*/}
    </div>
  )

}

const mapStateToProps = ( state ) => {
  console.log( state, "state" )
  return state
}

export default connect( mapStateToProps )( AppContainer );
