import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Annonce from './pages/Annonce';
import Emploi from './pages/Emploi';
import NoPage from './pages/NoPage';
import Login from './components/Login';
import Signin from './components/Signin';
import Change from './components/Change';
import Users from './components/users.component';
import TdTp from './pages/TdTp';
import Annonce1 from './pages/Annonce1';
import Dashboard from './pages/Dashboard';
import AjouterFiliere from './pages/dashboard/AjouterFiliere';
import ListeFiliere from './pages/dashboard/ListeFiliere';
import AdminFiliere from './pages/dashboard/AdminFiliere';
import Admin1 from './pages/dashboard/Admin1';
import Niveau from './pages/dashboard/Niveau';
import Enseignant from './pages/dashboard/Enseignant';
import Support from './pages/Support';
import Unite from './pages/dashboard/Unite';
import Assign from './pages/dashboard/Assign';
import Dash from './pages/Dash';
import Overview from './pages/Overview';

function App() {	
return (
	<Router>
		<Layout />
	<Routes>
  <Route index path="/" element={<Login/>}/>
  		<Route  path="/home" element={<Home/>}/>
		<Route  path='/annonce' element={<Annonce/>} />
		<Route  path='/emploi' element={<Emploi/>} />
		<Route  path='/login' element={<Login/>} />
		<Route path='/dash' element={<Dash/>}>
				<Route path='overview' element={<Overview/>}/>
				<Route  path='dashboard' element={<Dashboard/>}>
					<Route  path='ajouter' element={<AjouterFiliere/>} />
					<Route  path='liste' element={<ListeFiliere/>}/>
					<Route  path='admin' element={<AdminFiliere />}>
						<Route path='admin1' element={<Admin1 />}>
							<Route path='niveau' element={<Niveau/>}/>
							<Route path='enseignant' element={<Enseignant/>}/>
							<Route path='unite' element={<Unite/>}/>
							<Route path='assign' element={<Assign/>}/>
						</Route>
				</Route>
			</Route>
		</Route>
		
		<Route  path='/signin' element={<Signin/>} />
		<Route  path='/change' element={<Change/>} />
		<Route  path='/nopage' element={<NoPage/>}>
			<Route  path='annonce1' element={<Annonce1/>} />
			<Route  path='users' element={<Users/>}/>
			<Route  path='td_tp' element={<TdTp/>}/>
			<Route path='support' element={<Support/>}/>
		</Route>
		{/* <Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} /> */}
	</Routes>
	</Router>
);
}

export default App;
