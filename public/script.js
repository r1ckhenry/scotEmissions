function filterBy( data, conditions ) {
  return data.filter( ( set ) => {
    const matchesConditionsArr = conditions.map( condition => { set[condition[0]] === condition[1] })
    return matchesConditions.every( bool => bool )
  })
}

function prepForBarChart( data ) {
  return data.map( ( set ) => { return [ set.name, set.value ] } )
}

window.onload = () => {


  fetch( "/sectors" )
    .then( ( response ) => {
      return response.json();
    }).then( ( data ) => {
      var barData = filterBy( data, [["year", "1998"], ["emission", "CO2"]] );
      console.log( barData );
      var result = prepForBarChart( barData );




      var prepData = [ [ "sector", "CH4 total emission" ] ].concat( result );

      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawBasic);

      function drawBasic() {

        var data = google.visualization.arrayToDataTable( prepData );

        var options = {
          height: 600,
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
