const reducer = ( state = { data: null, emissionName: "CO2" }, action ) => {

  switch ( action.type ) {
    case "ADD_DATASET":
      return Object.assign( {}, state, { data: action.data } )
    case "UPDATE_DATASET":
      return Object.assign( {}, state, { emissionName: action.emissionName } )
    default:
      return state
  }
}

export default reducer;
