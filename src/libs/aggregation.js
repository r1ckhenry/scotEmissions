import _ from "lodash";

export function arrayToUniqValuesByKey( data, key ) {
  const allValues = data.map( set => set[key] );
  return _.uniq( allValues );
}

export function arrayFilteredByConditions( data, conditions ) {
  return data.filter( ( set ) => {
    const matchesConditionsArr = conditions.map( condition => { return set[condition[0]] === condition[1] })
    return matchesConditionsArr.every( bool => bool )
  });
}
