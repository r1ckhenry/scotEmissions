import React, { Component } from "react";

import Header from "./Header";
import Filter from "./Filter";
import Legend from "./Legend";
import ChartContainer from  "./ChartContainer";

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

    return(
      <div>
        <Header title="Scotland's Emissions" subtitle="These set of charts show Scotland's emissions from 1990 until 2014. All figures in CO<sub>2</sub>Eq." />
        <Filter data={ this.props.data } emissionInfo={ this.props.emissionInfo } emissionName={ this.props.emissionName } onFilterClick={ this.onFilterClick.bind( this ) } />
        <main className="main">
          <ChartContainer
            sectorNames={ sectorNames }
            sectorColors={ this.props.sectorColors }
            data={ this.props.data }
            emissionName={ this.props.emissionName }
            chart={ this.props.chart }
            dispatch={ this.props.dispatch } />
        </main>
        <Legend sectorNames={ sectorNames } sectorColors={ this.props.sectorColors } />
      </div>
    )
  }

}

const mapStateToProps = state => state

export default connect( mapStateToProps )( AppContainer );
