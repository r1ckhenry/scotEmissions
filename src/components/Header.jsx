import React from "react";

const Header = ( { title, inverseTitle, subtitle } ) => {

  return(
    <header className="header">
      <div className="header-title">{ title } <span className="header-title-inverse">{inverseTitle}</span></div>
      <div className="header-subtitle">
        { subtitle }
      </div>
    </header>
  )

}

export default Header;
