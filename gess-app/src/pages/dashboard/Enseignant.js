/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: ' John ' + id,
      price: 'Jack' + i +'@gmail.com'
    });
  }
}

addProducts(5);

function onAfterInsertRow(row) {
  alert(row);
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

const selectRowProp = {
  mode: 'checkbox'
};


function onAfterDeleteRow(rowKeys, rows) {
  alert('The rowkey you drop: ' + rowKeys);
  alert('good')
  return false;
}

const options1 = {
  afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};


const options = {
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};

export default class Enseignant extends React.Component {
  render() {
    return (
      <BootstrapTable data={products} insertRow={true} deleteRow={true} selectRow={selectRowProp} options={options1} options1={options1}>
        <TableHeaderColumn dataField='id' isKey={true}>Nom</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Prenom</TableHeaderColumn>
        <TableHeaderColumn dataField='price'> email</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}