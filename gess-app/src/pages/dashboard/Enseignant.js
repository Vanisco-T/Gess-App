import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Enseignant = ()=>{
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword]= useState('')
    const [data , setData] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    async function Liste() {
      const req = await fetch('http://localhost:1337/api/create/enseignant', {
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
       const data = await req.json()
       setData(data.enseignant)
    }
  useEffect(()=>{
        Liste()
    },[])

    const deleteEnseignant =(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:1337/api/supprimer/enseignant",{
            nom:nom,
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Enseignant Supprimer Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
        })

    }

    const submitEnseignant =(e)=>{
        Axios.post("http://localhost:1337/api/ajouter/enseignant",{
            nom:nom,
            prenom:prenom,
            email:email,
            password:password
        }).then(()=>{
            window.location.reload()
            alert("Enseignant Ajouter Avec Sucess");
        }).catch((error)=>{
            alert(error.data.error)
        })
    }

    const Modal =({close})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={submitEnseignant}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Un Enseignant</h3>
            <div className="form-group">
            <label>Nom</label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Enseignant"
                 onChange={(e) => setNom(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Prenom</label>
            <input type="text" required size="1" value={prenom} className="form-control" placeholder="Prenom Enseignant"
                onChange={(e) => setPrenom(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} className="form-control" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" required size="1" value={password} className="form-control" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className='cancel1' onClick={()=>{close(false)}}>Cancel</button>
            <input type="submit" value="Ajouter" className="send"/>
        </form>
        </div>
        </div>
        );
    }

    const Modal1 =({close1})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={deleteEnseignant}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Un Enseignant</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Enseignant"
                 onChange={(e) => setNom(e.target.value)}
            />
            </div>
            <button className='cancel1' onClick={()=>{close1(false)}}>Cancel</button>
            <input type="submit" value="Supprimer" className="send"/>
        </form>
        </div>
        </div>
        );
    }

    return (
        <div className='container'>
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className="btn btn-success" onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
             </div>
        <BootstrapTable version='4' data={data} >
                  <TableHeaderColumn dataField='nom' >Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='prenom' >Prenom</TableHeaderColumn>
                  <TableHeaderColumn dataField='email'isKey={true} >Email</TableHeaderColumn>
        </BootstrapTable> 
        </div>
    );
}
export default Enseignant