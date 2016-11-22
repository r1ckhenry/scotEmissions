import React from "react";

import Header from "./Header"
import Chart from  "./Chart"

const AppContainer = () => {

  return(
    <div>
      <Header title="Scotland's Emissions" inverseTitle="in graphs" subtitle="This is some placeholder text" />
      <Chart />
    </div>
  )

}

export default AppContainer;
