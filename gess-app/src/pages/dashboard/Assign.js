import React, {useState,useEffect} from "react";



const Assign =() =>{

    const [code,setUe]=useState('');
    const [nom,setEnseignant]=useState('')
    const [dat,setDat] = useState([]);
    const [dat1,setDat1] = useState([]);
    async function Liste() {
        const req = await fetch('http://localhost:1337/api/create/enseignant', {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
    
         const data = await req.json()
         console.log(data)
         setDat(data.enseignant)
      }
      async function Liste1() {
        const req = await fetch('http://localhost:1337/api/create/ue', {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
    
         const data = await req.json()
         setDat1(data.ue)
      }
      useEffect(()=>{
        Liste();
        Liste1();
      },[])
      

      async function assigne(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/create/assigne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                 code,
                 nom
          }),
        })
    
        const data = await response.json()
            console.log(data);
        if (data.status === 'ok') {
          alert("Everything work good")
        }
      }


    return(
        <div>
          <form className="new-form" onSubmit={assigne}>
          <div className="form-group">
            <label id="lb">Ue</label>
            <select className="form-select" 
                value={code}
                onChange={(e) => setUe(e.target.value)}   >
              {
       dat1.map((resul)=>(<option title={resul._id} >{resul.code}</option>))
      }
            </select>
            </div>
            <div className="form-group">
            <label id="lb">Enseignant</label>
            <select className="form-select" 
                value={nom}
                onChange={(e) => setEnseignant(e.target.value)}   >
              {
      dat.map((resul)=>(<option title={resul._id}>{resul.nom}</option>
      
      ))
      }
            </select>
            </div>
            <input type="submit" value="Assigne"  className="login2"/>
          </form>
          <form className="new-form" onSubmit={assigne}>
          <div className="form-group1">
            <label id="lb">Ue</label>
            <select className="form-select" 
                value={code}
                onChange={(e) => setUe(e.target.value)}   >
              {
       dat1.map((resul)=>(<option title={resul._id} >{resul.code}</option>))
      }
            </select>
            </div>
            <div className="form-group1">
            <label id="lb">Enseignant</label>
            <select className="form-select" 
                value={nom}
                onChange={(e) => setEnseignant(e.target.value)}   >
              {
      dat.map((resul)=>(<option title={resul._id}>{resul.nom}</option>
      
      ))
      }
            </select>
            </div>
            <input type="submit" value="Retirer"  className="login2"/>
          </form>
        </div>
    );
}

export default Assign