import React from "react";
import { Outlet, Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
const Dash = () =>{
    return(
        <div>
        <nav className="nav2">
        <Link to="overview" className="lin2">Overview</Link>
        <Link to="dashboard" className="lin2"><Icons.FaCog className="icon"></Icons.FaCog></Link>  
      </nav>
      <Outlet />
      </div>
    );
}
export default Dash