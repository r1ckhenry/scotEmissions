var fs = require( 'fs' );
var csv = require( 'fast-csv' );
var scotEmissions = require( './aggregation.js' );

var stream = fs.createReadStream("greenhouse_gas.csv");

var sectors = [];

var csvStream = csv().on("data", function(data){
  //
  // var sector = Object.assign( {}, { name: data[5] } )
  //
  //
  //
  //   // var obj = {
  //   //   id: data[0],
  //   //   year: Number( data[1] ),
  //   //   unit: data[3],
  //   //   value: Number( data[4] ),
  //   //   sector: data[5],
  //   //   pollutant: data[6]
  //   // }
    sectors.push( data );
  }).on("end", function(){
    var result = scotEmissions.parse( sectors )
    console.log( result );
  });

stream.pipe(csvStream);
