const chartOptions = {
  scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "CO2Eq",
            fontSize: 15
          }
        }
      ],
      xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Years",
            fontColor: "#ffffff",
            fontSize: 15
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0
          }
      }]
  }
}

export default chartOptions
