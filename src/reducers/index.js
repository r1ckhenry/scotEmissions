const reducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case "ADD_DATASET":
      return Object.assign( {}, { data: action.data } )
    default:
      return state
  }
}

export default reducer;
