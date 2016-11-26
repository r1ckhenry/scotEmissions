import { arrayToUniqValuesByKey, arrayFilteredByConditions } from "../src/libs/aggregation"

const data = [
  {
    "name": "Agriculture and Related Land Use",
    "value": 2.74,
    "year": "2014",
    "emission": "N2O"
  },
  {
    "name": "Agriculture and Related Land Use",
    "value": 4.71,
    "year": "2014",
    "emission": "CO2"
  },
  {
    "name": "Business and Industrial Process",
    "value": 0.026,
    "year": "1990",
    "emission": "N2O"
  }
]

describe( "Aggregation", () => {

  test( "filter to new array to include objects matching 'year': '1990'", () => {
    const expected_value = [{
      "name": "Business and Industrial Process",
      "value": 0.026,
      "year": "1990",
      "emission": "N2O"
    }]
    const actual_value = arrayFilteredByConditions( data, [[ "year", "1990" ]] )
    expect( actual_value ).toEqual( expected_value )
  })

  test( "filter to new array to include objects matching 'year': '2014' and 'emission': 'N20'", () => {
    const expected_value = [{
      "name": "Agriculture and Related Land Use",
      "value": 2.74,
      "year": "2014",
      "emission": "N2O"
    }]
    const actual_value = arrayFilteredByConditions( data, [[ "year", "2014" ], [ "emission", "N2O" ]] );
    expect( actual_value ).toEqual( expected_value ); 
  })

  test( "get all 'name' values into new array", () => {
    const expected_value = [ "Agriculture and Related Land Use", "Business and Industrial Process" ]
    const actual_value = arrayToUniqValuesByKey( data, "name" )
    expect( actual_value ).toEqual( expected_value )
  })

  test( "get all 'year' values into new array", () => {
    const expected_value = [ "2014", "1990" ];
    const actual_value = arrayToUniqValuesByKey( data, "year" );
    expect( actual_value ).toEqual( expected_value )
  })

})
