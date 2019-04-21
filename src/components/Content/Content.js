import React, { Component } from 'react';
import axios from 'axios';
/** Child Components */
import Main  from './Main/Main';
import News  from './News/News';
import Exams from './Exams/Exams'

class Contenta extends Component {
    state = {
        accessToken : '',
        subjects : []
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            accessToken: localStorage.getItem('accessToken')
        },() => {
            this.getSubjects();
        })

        
    }

    /** get Subjects from Api */
    getSubjects = () => {
        const url = 'http://tsu.creativestudio.ge/api/subjects/byUser';

        const config = {
            headers: {
                'content-type' : 'application/x-www-form-urlencoded , application/json',
                'Authorization': 'Bearer '+this.state.accessToken,
                'Accept': 'application/json',
            },
        };

        axios.get(url , config)
        .then(res => {
            this.setState({
                ...this.state,
                subjects:res.data.data.subjects
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() { 
        return ( 
            <div className="container-fluid p-0">
                <Main  items = { this.state.subjects } /> <hr className="m-0"/>
                <News /> <hr className="m-0"/>
                <Exams /> <hr className="m-0"/>
            </div>


        );
    }
}
 
export default Contenta;