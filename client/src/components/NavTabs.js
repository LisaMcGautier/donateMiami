import React from "react";
import { NavLink } from 'react-router-dom';
import Header from './Header';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      {/* <li className="nav-item">
        <NavLink
          to="/home"
          onClick={() => props.handlePageChange("Home")}
          activeClassName="nav-link active"
          className={"nav-link"}
        >
          Home
        </NavLink>
      </li> */}

      <li>
        <Header />
      </li>

      <li className="nav-item">
        <NavLink
          to="/history"
          onClick={() => props.handlePageChange("History")}
          activeClassName="nav-link active"
          className={"nav-link"}>
          View Giving History
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/favorites"
          onClick={() => props.handlePageChange("Favorites")}
          activeClassName="nav-link active"
          className={"nav-link"}>
          View Favorites
        </NavLink>
      </li>

    </ul>
  );
}



export default NavTabs;
