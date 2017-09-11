import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li>
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fa fa-fw fa-cogs" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/wall">
            <i className="fa fa-fw fa-newspaper-o" /> Wall
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            <i className="fa fa-fw fa-users" /> Profiles
          </Link>
        </li>
        <li>
          <Link to="/marquee/iloveroutes">
            <i className="fa fa-fw fa-thumbs-up" /> iloveroutes
          </Link>
        </li>
        <li>
          <Link to="/marquee/reactrouterrules">
            <i className="fa fa-fw fa-trophy" /> reactrouterrules
          </Link>
        </li>
        <li>
          <Link to="/marquee/blastingoff">
            <i className="fa fa-fw fa-rocket" /> blastingoff
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;
