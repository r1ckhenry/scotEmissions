const reducer = ( state = { data: null, emissionName: null, chart: null }, action ) => {

  switch ( action.type ) {
    case "UPDATE_CHART":
      return Object.assign( {}, state, { chart: action.chartDisplay } )
    case "ADD_DATASET":
      return Object.assign( {}, state, { data: action.data } )
    case "UPDATE_EMISSION_NAME":
      return Object.assign( {}, state, { emissionName: action.emissionName } )
    default:
      return state
  }
}

export default reducer;
