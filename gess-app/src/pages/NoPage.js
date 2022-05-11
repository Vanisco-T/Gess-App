import { Outlet, Link } from "react-router-dom";


const NoPage = () => {
  return (
    <>
      <h2>You Are In INFO 3015 Network Services</h2>
      <nav className="nav1">
        <Link to="annonce1" className="lin">Flux</Link>
        <Link to="td_tp" className="lin">TD/TP</Link>
        <Link to="support" className="lin">Support</Link>
        <Link to="users" className="lin">Utilisateur</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default NoPage;

