import React from 'react';
import { observer, inject } from 'mobx-react';
import './table.css';

class Lists extends React.Component {
	constructor(){
		super()
	}
	componentWillMount() {
		$("#myTable").show();
		this.props.store.getAllData()
		.then(res => {
      let data = res.users;
      let tableHead = Object.keys(data[0])
      let table = document.getElementById("myTable");
      table.innerHTML = '';
      table.border = "1";
      let row = table.insertRow(-1);
      tableHead.forEach((item, index) => {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = item;
        row.appendChild(headerCell);
      })
      if(data && data.length > 0 && (typeof(Object.keys(data[0])) !== 'undefined') && Object.keys(data[0]).length > 0) {
      
      for (var i = 0; i < data.length; i++) {
        let row1 = table.insertRow();
        for (var value of tableHead) {
      	    var cell1 = row1.insertCell();
            cell1.innerHTML = data[i][value]
        	}
      	}
      }
		})
	}
	render() {
		return (
			<div> 
			</div>
		)
	}
}

const List = inject('store')(observer(Lists))
export default List;