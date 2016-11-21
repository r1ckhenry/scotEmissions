/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function filterBy( data, conditions ) {
	  return data.filter( ( set ) => {
	    const matchesConditionsArr = conditions.map( condition => { return set[condition[0]] === condition[1] })
	    return matchesConditionsArr.every( bool => bool )
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


/***/ }
/******/ ]);