import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
  
  return(
    <>
        <h2 id="center">Welcome To Manage The DashBoard</h2>
        <nav className="nav1">
        <Link to="ajouter" className="lin">Ajouter Une Filiere</Link>
        <Link to="liste" className="lin">Liste Des Filiere</Link>
        <Link to="admin" className="lin">Administre Une Filiere</Link>
        
      </nav>
      <Outlet />
     
    </>
  );
}

export default Dashboard