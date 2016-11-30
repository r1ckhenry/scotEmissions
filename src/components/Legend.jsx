import React from "react"

const Legend = ( { sectorNames, sectorColors } ) => {

  const keys = sectorNames.map( ( sectorName, index ) => {
      return(
        <div className="legend-item" key={ index }>
          <div className="legend-key" style={ { backgroundColor: sectorColors[index] }}></div>
          <div className="legend-value">{ sectorName }</div>
        </div>
      )
  })

  return(
    <aside className="aside">
      { keys }
    </aside>
  )

}

export default Legend
