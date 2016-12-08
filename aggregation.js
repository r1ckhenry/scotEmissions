function parse( data ) {
  return data.map(  set  => Object.assign( {}, {name: set[5]}, {value: Number(set[4])}, {year: set[1]}, {emission: set[6]} ) );
}

module.exports = parse;
