import _ from "lodash"

export function filterBy( data, conditions ) {
  return data.filter( ( set ) => {
    const matchesConditionsArr = conditions.map( condition => { return set[condition[0]] === condition[1] })
    return matchesConditionsArr.every( bool => bool )
  })
}

export function prepForBarChart( data ) {
  return data.map( ( set ) => { return [ set.name, set.value ] } )
}

export function getAllUniqBy( data, key ) {
  var allKeys = data.map( set => set[key] )
  return _.uniq( allKeys )
}
