import React, {useEffect,useState} from 'react'


const ListeFiliere=()=>{
  const [dat,setDat] = useState([]);
    async function Liste() {
        const req = await fetch('http://localhost:1337/api/create/filiere', {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
    
         const data = await req.json()
         setDat(data.filiere)
        console.log(data)
      }
      useEffect(()=>{
        Liste()
      },[])
    return(
        <>
        <h2 id='center'>Liste filiere</h2>
        <h4>
          {
            dat && dat.length>0 && dat.map((item)=><div className='remov'>{item.nom}<button>remove</button></div>)
          }
        </h4>
        <ul>
        
      </ul>
        </>
    )
}
export default ListeFiliere