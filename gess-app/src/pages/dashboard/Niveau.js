import React, {useContext,useState,useEffect} from 'react';
import { AdminContext } from './AdminFiliere';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Niveau=()=>{
            const name=useContext(AdminContext)
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
       

        function onAfterDeleteRow(rowKeys, rows) {
          alert('The rowkey you drop: ' + rowKeys);
          alert('good')
          return false;
        }

      async function AjouterNiveau(row,e) {
            let newRowStr = '';
           
            for (const prop in row) {
              newRowStr += row[prop] ;
            }
            
            alert(newRowStr)
        const response = await fetch('http://localhost:1337/api/create/niveau', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            newRowStr
        }),
    })
    const data = await response.json()
    console.log(data.name)
    if (data.status === 'ok') {
        alert("Successful Creation")
    }
    else{
          
         alert("Duplicate Niveau ")
    }
}


       

        const selectRowProp = {
          mode: 'checkbox'
        };
        

        const options = {
            afterInsertRow: AjouterNiveau,  // A hook for after insert rows
            afterDeleteRow: onAfterDeleteRow 
          };

        return(
                <BootstrapTable version='4' data={dat} insertRow={true} selectRow={selectRowProp} deleteRow={true} options={options} >
                  <TableHeaderColumn dataField='nom' isKey={true}>Nom</TableHeaderColumn>
                </BootstrapTable>
            
        )
    }
    export default Niveau