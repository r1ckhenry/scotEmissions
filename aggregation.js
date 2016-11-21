var _ = require( 'lodash' );
//
// var data = [  [ 'S92000003', 2014,'Mt Co2Equiv',0.008,'Waste Management','CO2' ],
//               [ 'S92000003', 2014, 'Mt Co2Equiv', 0.078, 'Waste Management', 'N2O' ] ]

var scotEmissions = {

  addYearsToSectors: function( uniqSectors, data ) {
    return uniqSectors.map( ( sector ) => {

      var years = data.filter( ( set ) => {
        return set[5] === sector.name;
        // if ( set[5] === sector.name ) {
        //   return { year: Number( set[1] ) }
        // }
      })
      var years2 = years.map( ( set ) => { return { year: Number( set[1] ) } } )
      var uniqYears = _.uniqBy( years2, "year" )
      return Object.assign( {}, sector, { years: uniqYears } )
    })
  },

  addPollutantsToYears: function( sectorsWithYears, data ) {

    return sectorsWithYears.map( ( sector ) => {

      var sectorYears = sector.years.map( ( year ) => {

        var pollutants = data.map( ( set ) => {
          if ( set[1] === year.year ) {
            return { name: set[5], amount: Number( set[4] ) }
          }
        })

        return Object.assign( {}, year, { pollutants: pollutants } )
      })

      return Object.assign( {}, sector, { years: sectorYears } )

    })

  },

  parse: function( data ) {
    var uniqSectors = _.uniqBy ( data.map(  set  => { return { name: set[5] } } ), "name" );
    var sectorsWithYears = this.addYearsToSectors( uniqSectors, data );

    var sectorsWithYearsWithPollutants = this.addPollutantsToYears( sectorsWithYears, data );

    return sectorsWithYearsWithPollutants;

  }

}

module.exports = scotEmissions;

// console.log( scotEmissions.parse( data ) )



// GeographyCode,DateCode,Measurement,Units,Value,Greenhouse gas source sector,Pollutant
// set { id: 'S92000003',
//   year: 2014,
//   unit: 'Mt Co2Equiv',
//   value: 0.008,
//   sector: 'Waste Management',
//   pollutant: 'CO2' }
// set { id: 'S92000003',
//   year: 2014,
//   unit: 'Mt Co2Equiv',
//   value: 0.078,
//   sector: 'Waste Management',
//   pollutant: 'N2O' }

// sectors = [
//   {
//     name: "Forestry",
//     years: [
//       {
//         year: 2001,
//         pollutants: [
//           {
//             name: "CH4",
//             amount: 2.34
//           }
//         ]
//       }
//     ]
//   }
// ]