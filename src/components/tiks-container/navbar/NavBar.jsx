import React, {Component} from 'react';
import {Link
} from "react-router-dom";
class NavBar extends Component {
    
    render() {
      
      return (
        <div className="Links">
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/letsplan">Let's Plan</Link>
                </li>
                <li>
                    <Link to="/routines">My Routines</Link>
                </li>
                <li>
                <button><Link to="/signin">Sign Out</Link></button>
                </li>
                
            </ul>
        </nav>
    </div>
        )
    }
  }
  
  export default NavBar;