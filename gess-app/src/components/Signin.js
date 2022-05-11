import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signin=() => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
    const [matricule, setMatricule] = useState('')
    const [filiere, setFiliere] = useState('')
    const [niveau, setNiveau] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
                surname,
				matricule,
                email, 
                filiere, 
                niveau,
				password,
			}),
		})

		const data = await response.json()
        console.log(data);
		if (data.status === 'ok') {
			navigate('/home');
		}
	}
             return(
            <div className="form1">
            <form onSubmit={registerUser}>
            <h3>Sign In</h3>
    
            <div className="form-group">
            <label>Nom</label>
            <input type="text" className="form-control" placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Prenom</label>
            <input type="text" className="form-control" placeholder="Prenom"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Matricule</label>
            <input type="text" className="form-control" placeholder="Matricule"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            </div>
    
            <div className="form-group">
            <label>Filiere</label>
            <select className="form-select" aria-label="Default select example"
                value={filiere}
                onChange={(e) => setFiliere(e.target.value)}            >
                <option value="Informatiqu">Informatique</option>
                <option value="Mathematique">Mathematique</option>
                <option value="Physique">Physique</option>
                <option value="Biologie">Biologie</option>
                <option value="Chemie">Chemie</option>
            </select>
            </div>
    
            <div className="form-group">
            <label>Niveau</label>
            <select className="form-select" aria-label="Default select example"
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
            >
                <option value='Licence 1'>Licence 1</option>
                <option value="Licence 2">Licence 2</option>
                <option value="Licence 3">Licence 3</option>
                <option value="Master 1">Master 1</option>
                <option value="Master 2">Master 2</option>
    
            </select>
            </div>
    
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}         />
            </div>
             <input type="submit" value="Register" className="login1"/>
        </form>
        </div>
          )
      }

export default Signin;