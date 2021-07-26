import React from 'react';
import { Link } from '@reach/router';


const Nav = props => {
  return (

      <div className="navbar-menu" >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/new" className="navbar-item">
            New
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              
            </div>
          </div>
        </div>
      </div>
  );
}

export default Nav;