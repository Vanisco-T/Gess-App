import "@grapecity/wijmo.styles/wijmo.css";
import 'bootstrap/dist/css/bootstrap.css';

//
import * as React from 'react';
//
import { DataType } from '@grapecity/wijmo';
import * as wjCore from "@grapecity/wijmo";
import * as wjcGrid from "@grapecity/wijmo.react.grid";
class Emploi extends React.Component {
    constructor(props) {
        super(props);
        let data = this.getData();
        this.state = {
            data: new wjCore.CollectionView(data, {
                sortDescriptions: ["heure", ""]
            }),
            quickEdit:true
        };
    }
    render() {
        return <div className="container-fluid">
          <h2>Generate Level 2 Time Table</h2>
            <wjcGrid.FlexGrid itemsSource={this.state.data} allowMerging="Cells" isReadOnly={false} alternatingRowStep={0} gotFocus={s => this.startEditing(s)} selectionChanged={s => this.startEditing(s)}>
                <wjcGrid.FlexGridColumn binding="heure" header="Heures" allowMerging={true} isReadOnly={true}></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="lundi" header="Lundi"  format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="mardi" header="Mardi" format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="mercredi" header="Mercredi" format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="Jeudi" header="Jeudi" format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="vendredi" header="Vendredi" format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="samedi" header="Samedi" format="n2"></wjcGrid.FlexGridColumn>
                <wjcGrid.FlexGridColumn binding="dimanche" header="Dimanche" format="n2"></wjcGrid.FlexGridColumn>

            </wjcGrid.FlexGrid>
          <h2><button className="btn-success">Save</button></h2>
        </div>;
    }

    startEditing(flex) {
      let index = flex.selection.col, col = index > -1 ? flex.columns[index] : null;
      if (col && !col.isReadOnly && col.dataType !== DataType.Boolean) {
          setTimeout(() => {
              flex.startEditing(false); // quick mode
          }, 50); // let the grid update first
      }
  }

    getData() {
        var Heures = "07h-09h55,13h15-15h55,10h05-12h55,16h05-18h55".split(",");
        var data = [];
        for (var i = 0; i < 12; i++) {
            data.push({
                heure: Heures[i % Heures.length],
                lundi: '',
                mardi: '',
                mercredi:'',
                jeudi:'',
                vendredi:'',
                samedi:'',
                dimanche:''
            });
        }
        return data;
    }
}

export default Emploi;
  