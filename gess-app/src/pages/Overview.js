import React from "react";
import * as Icons from "react-icons/fa";


const Overview = () =>{
    return(<div>
        <div className="over">
         <div className="inside">
         <h2><Icons.FaThList></Icons.FaThList>
         </h2>
         <h3>3</h3>
         <p>Filiere</p>
         </div>
         <div className="inside">
         <h2><Icons.FaList></Icons.FaList>
         </h2>
         <h3>3</h3>
         <p>Niveau</p>
         </div>
         <div className="inside">
         <h2><Icons.FaMale></Icons.FaMale>
         </h2>
         <h3>4</h3>
         <p>Enseignant</p>
         </div>
         <div className="inside">
         <h2><Icons.FaBook></Icons.FaBook>
         </h2>
         <h3>15</h3>
         <p>Unite</p>
         </div>
         </div>
         <div className="over">
         <div className="inside">
         <h2><Icons.FaUniversity></Icons.FaUniversity>
         </h2>
         <h3>1</h3>
         <p>Faculte</p>
         </div>
         <div className="inside">
         <h2><Icons.FaUsers></Icons.FaUsers>
         </h2>
         <h3>34</h3>
         <p>Utilisateur</p>
         </div>
         <div className="inside">
         <h2><Icons.FaMale></Icons.FaMale>
         </h2>
         <h3>3</h3>
         <p>Filiere</p>
         </div>   
        </div>
    </div>)
}

export default Overview