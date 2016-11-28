import React from "react"

const range = ( { years, onRangeChange } ) => {

  const options = years.map( ( year, index ) => {
    return <option value={ year } key={ index }>{ year }</option>
  })

  return(
    <form className="range-slider">
      <select onChange={ onRangeChange }>
        { options }
      </select>
    </form>
  )

}

export default range;
