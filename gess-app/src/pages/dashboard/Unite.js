import React,{useState,useEffect} from "react";

const Unite =()=>{

    const [niveau, setNiveau] = useState('')
    const [code, setCode] = useState('')
    const [intitule, setIntitule] = useState('')

    const [dat,setDat] = useState([]);
    async function Liste() {
        const req = await fetch('http://localhost:1337/api/create/niveau', {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
    
         const data = await req.json()
         setDat(data.niveau)
         console.log(data)
      }
      useEffect(()=>{
        Liste()
      },[])


	async function addUe(event) {
		event.preventDefault()
		const response = await fetch('http://localhost:1337/api/create/ue', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
             niveau,
             code,  
             intitule 
			}),
		})

		const data = await response.json()
        console.log(data);
		if (data.status === 'ok') {
      alert("Everything work good")
    }
	}

  async function removeUe(event) {
		event.preventDefault()
		const response = await fetch('http://localhost:1337/api/delete/ue', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
             code 
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
        <form  className="new-form" onSubmit={addUe}>
             <div className="form-group">
            <label id="lb">Niveau</label>
            <select className="form-select" 
                value={niveau}
                onChange={(e) => setNiveau(e.target.value)}   >
                {
       dat.map((result)=>(<option title={result._id}>{result.nom}</option>))
      }
            </select>
            </div>
            <div className="form-group">
            <label>Code</label>
            <input type="text" className="form-control" placeholder="Code Ue"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Intitule</label>
            <input type="text" className="form-control" placeholder="Intitule Ue"
                value={intitule}
                onChange={(e) => setIntitule(e.target.value)}
            />
            </div>
    
           
    
             <input type="submit" value="Ajouter"  className="login2"/>
        </form>
        <form  className="new-form" onSubmit={removeUe}>
             <div className="form-group">
            <label id="lb">Niveau</label>
            <select className="form-select" aria-label="Default select example"
                value={niveau}
                onChange={(e) => setNiveau(e.target.value)}   >
                {
       dat.map((result)=>(<option title={result._id}>{result.nom}</option>))
      }
            </select>
            </div>
            <div className="form-group">
            <label>Code</label>
            <input type="text" className="form-control" placeholder="Code Ue"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            </div>    
             <input type="submit" value="Retirer"  className="login2"/>
        </form>
        </div>
    );
}

export default Unite;