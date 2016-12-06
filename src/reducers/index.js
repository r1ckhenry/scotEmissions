const initialState = {
  data: null,
  emissionName: "CO2",
  chart: null,
  sectorColors: [ "#48CFAD", "#967ADC", "#4A89DC", "#ED5565", "#656D78", "#FFCE54", "#4FC1E9", "#FC6E51", "#A0D648", "#EC87C0" ],
  year: "1990",
  emissionInfo: [
    {
      id: "CH4",
      htmlString: "CH<sub>4</sub>",
      name: "Methane"
    },
    {
      id: "CO2",
      htmlString: "CO<sub>2</sub>",
      name: "Carbon Dioxide"
    },
    {
      id: "N2O",
      htmlString: "N<sub>2</sub>O",
      name: "Nitrous Oxide"
    },
    {
      id: "HFCs",
      htmlString: "HFCs",
      name: "Hydrofluorocarbons"
    },
    {
      id: "NF3",
      htmlString: "NF<sub>3</sub>",
      name: "Nitrogen Trifluoride"
    },
    {
      id: "PFCs",
      htmlString: "PFCs",
      name: "Perfluorocarbons"
    },
    {
      id: "SF6",
      htmlString: "SF<sub>6</sub>",
      name: "Sulfur Hexafluoride"
    }
  ]
}

const reducer = ( state = initialState, action ) => {

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
