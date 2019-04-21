import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth';
import Layout from './Layout/Layout';

class App extends Component {
  state = {
    accessToken : false,
  }

  /** Check if user got accessToken */
  componentDidMount(){
    this.setState({ 
      accessToken: localStorage.getItem('accessToken') ? true:false
    });
  }

  /** logout user  */
  logOut = () => {
    this.setState({
      accessToken: false,
    })

    localStorage.removeItem('accessToken');
  }

  /** check Auth user */
  checkAuth = authenticated => {
      this.setState({ accessToken : authenticated  });
  }

  render(){

    const template = !this.state.accessToken ? <Auth checkAuth = { this.checkAuth }/> : <Layout logOut = {this.logOut} />;

    return (
      <div className="App">  
        { template }
      </div>
    );
  }
}

export default App;
