import React, {useState} from 'react'

const AjouterFiliere=()=>{
    const [show, setShow] = useState(false);
    const [nom, setNom] = useState('')
    async function AjouteFiliere(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/create/filiere', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nom,
			}),
		})

		const data = await response.json()
        console.log(data);
		if (data.status === 'ok') {
            setShow(prev => !prev)
			alert("Successful Creation")
		}
	}
    return(
        <>
        <button className='logi1' onClick={() => setShow(prev => !prev)}>Ajouter</button>
      {show && <div>
          <form className='form2' onSubmit={AjouteFiliere}>
            <div className="same">
            <input type="text" className="form-control" placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            />
            </div>
            <input type="submit" value="Confirm" className="logi1"/>
          </form>
          </div>}

        </>
    )
}
export default AjouterFiliere