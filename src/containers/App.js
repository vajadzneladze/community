import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
  	subjects : [],
  	posts : [] 
  }


  componentDidMount(){

  	// const url = 'http://tsu.creativestudio.ge/subjects';
  	// this.getSubjects(url);
  
  
  	const url = 'https://jsonplaceholder.typicode.com/posts';

  	this.getPosts(url);
  }

  	getSubjects = async url => {

	    axios.get(url).then( res => {
	    	this.setState({
	    		subjects:res.data
	    	});
	    });

	};

	getPosts = async url => {

		axios.get(url).then( res => {
	    	this.setState({
	    		posts:res.data
	    	});
	    });

	}




  render() {

    return (
      <div className="App"> 
       		<table border="1">
				  <thead>
					  <tr>
					    <th>user ID</th>
					    <th>title</th>
					    <th>body</th>
					   
					  </tr>
				  </thead>
				  <tbody>
				  {
				  	
				  	this.state.posts.map( item => {
				  		
				  		return (
				  			<tr key =  { item.id } >
					  			<td> { item.userId } </td>
					  			<td> { item.title } </td>
					  			<td> { item.body } </td>
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
