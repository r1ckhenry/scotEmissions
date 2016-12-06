import React from "react";

const Header = ( { title, inverseTitle, subtitle } ) => {

  return(
    <header className="header">
      <div className="header-title">{ title }</div>
      <div className="header-subtitle" dangerouslySetInnerHTML={{__html: subtitle}}></div>
    </header>
  )

}

export default Header;
