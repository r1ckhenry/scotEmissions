import React from "react"

const range = ( { years } ) => {

  const options = years.map( ( year, index ) => {
    return <option value={ year } key={ index }>{ year }</option>
  })

  return(
    <form className="range-slider">
      <select>
        { options }
      </select>
    </form>
  )

}

export default range;
