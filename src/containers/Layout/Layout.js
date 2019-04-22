import React, { Component , Fragment} from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import Content from '../../components/Content/Content';
import axios from 'axios';

class Layout extends Component {

    state = {
        accessToken:'',
        data : [],
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            accessToken: localStorage.getItem('accessToken')
        },() => {
            this.getAuthUser();
        })
    }

    /** retrive Full Data about Authenticated user */
    getAuthUser = () => {
        const url = 'http://tsu.creativestudio.ge/api/user/full';

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
                data:res.data.user
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    logout = () => {
        this.props.logOut();
    }

    render() { 
        return ( 
            <Fragment>
                <LeftSide logout = { this.logout }/>
                <Content user = { this.state.data }/>
            </Fragment>
        );
    }
}
 
export default Layout;