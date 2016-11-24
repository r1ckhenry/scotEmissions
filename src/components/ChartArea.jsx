import React from "react";
import Chart from 'chart.js'

import { filterBy, prepForBarChart } from "../libs/aggregation";

const ChartArea = React.createClass({

  drawChart: function() {

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };

    const options = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    const ctx = document.getElementById( "chart" )

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

  },

  componentDidUpdate: function() {
    this.drawChart();
  },

  componentDidMount: function() {
    this.drawChart();
  },

  render: function() {
    return React.DOM.canvas({id: "chart", style: {height: "500px"}});
  }

})

export default ChartArea;
