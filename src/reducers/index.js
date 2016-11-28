const reducer = ( state = { data: null, emissionName: "CH4", chart: null, year: "1990" }, action ) => {

  switch ( action.type ) {
    case "UPDATE_YEAR":
      return Object.assign( {}, state, { year: action.year } )
    case "ADD_CHART":
      return Object.assign( {}, state, { chart: action.chart } )
    case "ADD_DATASET":
      return Object.assign( {}, state, { data: action.data } )
    case "UPDATE_EMISSION_NAME":
      return Object.assign( {}, state, { emissionName: action.emissionName } )
    default:
      return state
  }
}

export default reducer;
