import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Auth from './Auth/Auth';

class App extends Component {

  state = {
  	subjects : []
  }


  componentDidMount(){
		const url = 'http://tsu.creativestudio.ge/subjects';
		this.getSubjects(url);
  }

	getSubjects = async url => {

		axios.get(url).then( res => {
			this.setState({ 
				subjects:res.data
			})
		})
	}

  render(){
    return (
      <div className="App"> 
					<Auth />
      </div>
    );
  }
}

export default App;
