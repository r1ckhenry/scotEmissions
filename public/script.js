function filterBy( data, key, value ) {
  return data.filter( ( set ) => { return set[key] === value && set["emission"] === "CH4" && set["value"] > 0.1  } )
}

function prepForBarChart( data ) {
  return data.map( ( set ) => { return [ set.name, set.value ] } )
}

window.onload = () => {


  fetch( "/sectors" )
    .then( ( response ) => {
      return response.json();
    }).then( ( data ) => {
      var barData = filterBy( data, "year", "1998" );
      var prepData = [ [ "sector", "CH4 total emission" ] ].concat( prepForBarChart( barData ) );

      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawBasic);

      function drawBasic() {

        console.log( prepData )

        var data = google.visualization.arrayToDataTable( prepData );

        var options = {
          title: 'CH4 Emission Scotland',
          hAxis: {
            title: 'Total Emission'
          },
          vAxis: {
            title: 'Sector'
          }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }










    })
}
