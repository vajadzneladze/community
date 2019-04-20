import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
  	subjects : []
  }


  componentDidMount(){

  	const url = 'http://tsu.creativestudio.ge/subjects';

  	setInterval(()=> {
  		this.getSubjects(url);
  	}, 100)

  	console.log('componentDidMount', this.state.subjects);
  	 
  }

  	getSubjects = async url => {

	    axios.get(url).then( res => {
	    	this.setState({
	    		subjects:res.data
	    	});
	    });

	};




  render() {

    return (
      <div className="App"> 
       		<table border="1">
				  <thead>
					  <tr>
					    <th>ID</th>
					    <th>title</th>
					    <th>faculty ID</th>
					   
					  </tr>
				  </thead>
				  <tbody>
				  {
				  	
				  	this.state.subjects.map( item => {
				  		
				  		return (
				  			<tr key =  { item.id } >
					  			<td> { item.id } </td>
					  			<td> { item.title } </td>
					  			<td> { item.faculty_id } </td>
				  			</tr>
				  		)

				  	})

				  }
		  		</tbody>
  			 </table>
      </div>
    );
  }
}

export default App;
