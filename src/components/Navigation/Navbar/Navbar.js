import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

  const renderLinks = links => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName="active"
          >
            { link.label }
          </NavLink>
        </li>
      )
    })
  };

  return (
    <nav>
      <div className="nav-wrapper red darken-1">
        <a href="/" className="brand-logo center">React.js</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          { renderLinks(props.links) }
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
