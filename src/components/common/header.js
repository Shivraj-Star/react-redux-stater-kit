import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
  return (
    <nav className="navbar navbar-inverse">
       <div className="navbar-header">
       <a className="navbar-brand" href="#">React + Redux</a>
       </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
        <li>
        <Link to="" activeClassName="active">Home</Link>
        </li>
        <li>
        <Link to="about" activeClassName="active">About</Link>
        </li>
        <li>
        <Link to="course" activeClassName="active">Courses</Link>
        </li>
        </ul>
        </div>
    </nav>
  )
}

export default Header;
