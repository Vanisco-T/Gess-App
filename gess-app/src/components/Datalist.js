import {CSVLink} from "react-csv"
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Pdf from "react-to-pdf";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Button from "react-bootstrap/Button";
import filterFactory ,{textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
 require('react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css');

 
 const ref = React.createRef();
function Datalist(){
    const selectRow={
        mode:"checkbox",
        clickToEdit:true,
        clickToSelect:false
    }
    

   
    const columns =[
        {dataField:'id',text:'ID',hidden:true},
        {dataField:'name',text:'Name', sort:true,filter:textFilter(),editable:true},
        {dataField:'username',text:'Username', sort:true,filter:textFilter()},
        {dataField:'email',text:'Email', sort:true,filter:textFilter()},
        {dataField:'cc',text:'CC',editable:true,
        validator:(newValue,row,column)=>{
            if(isNaN(newValue)){
                return{
                    valid:false,
                    message:"Please enter a numeric value"
                }
            }
            return true
        }
        },
        {dataField:'tp',text:'TP',editable:true},
        {dataField:'sn',text:'SN',editable:true}
        
    ]

    const pagination = paginationFactory({
        page:1,
        sizePerPage:5,
        lastPageText:'>>',
        firstPageText:'<<',
        nextPageText:'>',
        prePageText:'<',
        showTotal:true,
        alwaysShowAllBtns:true,
        onPageChange: function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        },
        onSizePerPageChange: function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        },
    })


    
    const products = [
        { id: 1, name: "Bob", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 2, name: "Alice", username: "Abert",email: "alice@.com",cc:"0",tp:"0",sn:"0" },
        { id: 3, name: "Alima", username: "Alima",email: "tad@.com",cc:"0",tp:"0",sn:"0" },
        { id: 4, name: "Akwa", username: "Benoulli",email: "ghm@.com",cc:"0",tp:"0",sn:"0" },
        { id: 5, name: "Dakar", username: "city",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 6, name: "denmark", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 7, name: "USA", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 8, name: "Vanisco", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 9, name: "Tadiha", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 10, name: "Francisse", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 11, name: "Joe", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 12, name: "John", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 13, name: "Jack", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 14, name: "Frank", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 15, name: "Athur", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 16, name: "Melvin", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 17, name: "Doriane", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 18, name: "Linda", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 19, name: "Joseph", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 20, name: "Peggy", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 21, name: "Yoh", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 22, name: "Ken", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 23, name: "Aline", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 24, name: "Alvine", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 25, name: "Anna", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 26, name: "Bentacur", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 27, name: "Kulu", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 28, name: "messi", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 29, name: "Benoi", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 30, name: "kaka", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 31, name: "pepe", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 32, name: "pele", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 33, name: "james", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },
        { id: 34, name: "me", username: "Ben",email: "bob@bob.com",cc:"0",tp:"0",sn:"0" },

      ];
   
    return(
        <div >
            <Button variant="dark" >
            <CSVLink
                    data={products}
                    filename={"note.csv"}
                  >
                    Export CSV
                  </CSVLink>
             </Button>
             <Pdf targetRef={ref} filename="note.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Export Pdf</Button>}
      </Pdf>
            <div ref={ref}>
            <BootstrapTable 
             bootstrap4 
             keyField='id' 
             
             columns={columns} 
             data={products}
             pagination={pagination}
             filter={filterFactory()}
             cellEdit={ cellEditFactory({ mode: 'click',blurToSave: true,})}
             selectRow={selectRow}  
             actions={
                 [
                     {icon:()=><button>Export</button>,
                     tooltip:"Export To excel",
                     onclick:()=>("Clicked"),
                     isFreeAction:true
                 }
                 ]
             }     
                 /> 
                 </div>
        </div> 
    );
}

export default Datalist;
