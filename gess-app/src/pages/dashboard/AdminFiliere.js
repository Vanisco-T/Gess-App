import React,{useState,useEffect,createContext} from 'react'
import {Outlet, Link} from 'react-router-dom';
const AdminContext=createContext()
const AdminFiliere=()=>{
    const [dat,setDat] = useState([]);
    const [name,changeName] = useState("Informatique");
    async function Liste() {
        const req = await fetch('http://localhost:1337/api/create/filiere', {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
    
         const data = await req.json()
         setDat(data.filiere)
      }
      useEffect(()=>{
        Liste()
      },[])
   
    return(
        <AdminContext.Provider value={name}>
        <>
        <div className='align'>
          {
            dat && dat.length>0 && dat.map((item)=><Link 
            to='admin1' 
            className="lin1" onClick={()=>changeName(item.nom)}> {item.nom}</Link>)

          }
       </div>
    
       <Outlet />
        </>
        </AdminContext.Provider>
    )
}
export default AdminFiliere;
export {AdminContext}
