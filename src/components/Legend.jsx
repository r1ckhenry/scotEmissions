import React from "react"

const Legend = ( { sectorNames, sectorColors } ) => {

  const keys = sectorNames.map( ( sectorName, index ) => {
      return(
        <div className="legend-item" style={ { backgroundColor: sectorColors[index] }} key={ index }>
          <div className="legend-value">
            <div>{ sectorName }</div>
          </div>
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
