var fs = require( 'fs' );
var csv = require( 'fast-csv' );
var express = require( "express" );
var app = express();
var scotEmissions = require( './aggregation.js' );

app.get( "/sectors", function( req, res ) {

  var stream = fs.createReadStream("greenhouse_gas.csv");
  var sectors = [];

  var csvStream = csv().on("data", function(data){
    sectors.push( data );
  }).on("end", function(){
    var result = scotEmissions.parse( sectors )
    res.json( result )
  });

  stream.pipe(csvStream);


})

app.listen( "3000", function() {
  console.log( "runnning on 3000" )
})
