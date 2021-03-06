var fs = require( 'fs' );
var csv = require( 'fast-csv' );
var express = require( "express" );
var app = express();
var parse = require( './aggregation.js' );

var port = process.env.PORT || 3000;

app.use( express.static('public') )

app.get( "/sectors", function( req, res ) {

  var stream = fs.createReadStream("greenhouse_gas.csv");
  var sectors = [];

  var csvStream = csv().on("data", function(data){
    sectors.push( data );
  }).on("end", function(){
    var result = parse( sectors )
    res.json( result )
  });

  stream.pipe(csvStream);


})

app.listen( port, function() {
  console.log( "runnning on " + port )
})
