import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import * as Icons from "react-icons/fa";


const Layout = () => {
return (
	<>
	<Nav>
	
	<NavBtn ><Icons.FaUserGraduate />GessApp</NavBtn>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			<Icons.FaHome></Icons.FaHome>
			Home
		</NavLink>
		<NavLink to='/emploi' activeStyle>
			<Icons.FaTable></Icons.FaTable>
			Emploi
		</NavLink>
		<NavLink to='/annonce' activeStyle>
			<Icons.FaEnvelope></Icons.FaEnvelope>
			Annonce
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/change'>Change Level</NavBtnLink>
		<NavBtnLink to='/login'>Log Out</NavBtnLink>
		<NavBtnLink to='/dash'>DashBoard</NavBtnLink>
		
		</NavBtn>
	</Nav>
	</>
);
};

export default Layout;
