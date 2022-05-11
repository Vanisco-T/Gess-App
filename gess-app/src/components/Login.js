import React from "react";
import { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import img from '../../src/images/img.png';

function Login() {
	 const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			navigate('/home');
		} else {
			alert('Please check your username and password')
		}
	}

	return(
        <div className="form1">
			<div className="h">
			<img src={img} alt="Img" />
			</div>
        <form onSubmit={loginUser}>
            <h3>Log In</h3>
    
           
            <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} className="form-control" placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} className="form-control" placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
    
           
            <input type="submit" value="Login" className="login"/>
			<p></p>
			<a href="#" className="Link">Forget your password</a>
			<Link to="/signin"className="Link" >Sign in</Link>
        </form>
        </div>
    )
}

export default Login


