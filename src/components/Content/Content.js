import React, { Component } from 'react';
import axios from 'axios';

/** Child Components */
import Main  from './Main/Main';
import News  from './News/News';
import Exams from './Exams/Exams'

class Content extends Component {


    // /** get Subjects from Api */
    // getSubjects = () => {
    //     const url = 'http://tsu.creativestudio.ge/api/subjects/byUser';

    //     const config = {
    //         headers: {
    //             'content-type' : 'application/x-www-form-urlencoded , application/json',
    //             'Authorization': 'Bearer '+this.state.accessToken,
    //             'Accept': 'application/json',
    //         },
    //     };

    //     axios.get(url , config)
    //     .then(res => {
    //         this.setState({
    //             ...this.state,
    //             subjects:res.data.data.subjects
    //         })
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     })
    // }

    render() { 
        return ( 
            <div className="container-fluid p-0">
                <Main  items = { this.props.user } /> <hr className="m-0"/>
                <News  items = { this.props.user.message } /> <hr className="m-0"/>
                <Exams items = { this.props.user.message }/> <hr className="m-0"/>
            </div>
        );
    }
}
 
export default Content;