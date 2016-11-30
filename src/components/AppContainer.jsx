import React, { Component } from "react";

import Header from "./Header";
import Filter from "./Filter";
import Range from "./Range";
import Legend from "./Legend";
import ChartArea from  "./ChartArea";

import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../libs/aggregation";

import { connect } from 'react-redux'

class AppContainer extends Component {

  onRangeChange( e ) {
    this.props.dispatch( { type: "UPDATE_YEAR", year: e.target.value } );
  }

  onFilterClick( e ) {
    this.props.dispatch( { type: "UPDATE_EMISSION_NAME", emissionName: e.target.value } );
  }

  render() {

    const sectorNames = arrayToUniqValuesByKey( this.props.data, "name" );
    const sectorColors = [ "#48CFAD", "#967ADC", "#4A89DC", "#ED5565", "#656D78", "#FFCE54", "#4FC1E9", "#FC6E51", "#A0D648", "#EC87C0" ]

    return(
      <div>
        <Header title="Scotlands Emissions" inverseTitle="in graphs" subtitle="These set of charts show Scotlands emissions from 1990 until 2014." />
        <Filter data={ this.props.data } emissionName={ this.props.emissionName } onFilterClick={ this.onFilterClick.bind( this ) } />
        <main className="main">
          <ChartArea
            sectorNames={ sectorNames }
            sectorColors={ sectorColors }
            data={ this.props.data }
            year={ this.props.year }
            emissionName={ this.props.emissionName }
            chart={ this.props.chart }
            dispatch={ this.props.dispatch } />
        </main>
        <Legend sectorNames={ sectorNames } sectorColors={ sectorColors } />
        <Range onRangeChange={ this.onRangeChange.bind( this ) } years={ this.props.years } />
      </div>
    )
  }

}

const mapStateToProps = ( state ) => {
  console.log( state, "state" )
  const years = arrayToUniqValuesByKey( state.data, "year" );
  return Object.assign( {}, state, { years: years } )
}

export default connect( mapStateToProps )( AppContainer );
