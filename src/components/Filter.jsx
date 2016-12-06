import React from "react";

import { arrayToUniqValuesByKey } from "../libs/aggregation";

const Filter = ( { data, onFilterClick, emissionName, emissionInfo } ) => {

  var allEmissionNames = arrayToUniqValuesByKey( data, "emission" );

  const buttons = allEmissionNames.map( ( indEmissionName, index ) => {
    let classes = indEmissionName === emissionName ? "button button-active" : "button"
    const emission = emissionInfo.find( ( indEmissionInfo ) => { return indEmissionInfo.id == indEmissionName } )

    return( <div className="button-split" key={ index }>
              <button
                className={ classes }
                onClick={ onFilterClick }
                value={ indEmissionName }
                dangerouslySetInnerHTML={{__html: emission.htmlString}}></button>
              <div className="button-info">{ emission ? emission.name: null }</div>
            </div>)
  })

  return(
    <nav className="nav">
      <div className="button-split-wrapper">
        { buttons }
      </div>
    </nav>
  )

}

export default Filter
