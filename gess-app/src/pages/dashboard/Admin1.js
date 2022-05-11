import React from 'react'
import { Outlet,Link } from 'react-router-dom';
const Admin1 =()=>{
    return(
       <> 
       <nav className="nav1">
        <Link to="niveau" className="lin">Niveau</Link>
        <Link to="enseignant" className="lin">Enseignant</Link>      
        <Link to="unite" className="lin">Unite </Link>      
        <Link to="assign" className="lin">Assigne </Link>      

      </nav>
      <Outlet />
      </>
    );
}

export default  Admin1