//Creates the menu and menu items with static text
import React, { useState } from "react";

function CollapsibleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-menu">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li>HOME PAGE</li>
            <li>ABOUT</li>
            <li>SEARCH</li>
            <li>USER LOGIN</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default CollapsibleMenu;