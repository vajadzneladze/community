import React, { Component } from 'react'
import axios from 'axios';

import './Auth.css'
class Auth extends Component {
    state = { 
        inputs : {
            email:{
                name : 'email',
                type : 'email',
                label: 'Email',
                placeholder : 'Email',
                value : '',
                error : {
                    valid : true,
                    message: 'Email required',
                },
                validation:{
                    required:true,
                    isEmail:true,
                }

            },
            password: {
                name : 'password',
                type : 'password',
                label: 'Password',
                placeholder : 'Password',
                value : '',
                error : {
                    valid : true,
                    message: 'Password is not valid',
                },
                validation:{
                    required:true,
                    minLength: 6
                }
            }
        }
    }
    
    /** validation new input value */
    checkValidity = ( value , rules ) => {
        let isValid = true;

        if(!rules){
            return true;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.isEmail){
            const pattern =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        this.status.disabled  = isValid ? null : 'disabled';

        return isValid;
    }


    /** input changed */
    inputChangeHandler = ( e , name ) => {
        const updatedInput = {
            ...this.state.inputs,
            [ name ] : {
                ...this.state.inputs[ name ],
                value:e.target.value,
                error:{
                    valid : this.checkValidity(e.target.value , this.state.inputs[ name ].validation),
                    message: this.state.inputs[name].error.message,
                }
            }
        }

        this.setState({ inputs: updatedInput });
    }

    /** on submit form */
    submitHandler = e => {
        e.preventDefault();
        this.signIn(this.state.inputs.email.value, this.state.inputs.password.value)
    }


    /** get access Token */
    signIn = ( email , password ) => {
        const url = 'http://tsu.creativestudio.ge/oauth/token';
        const config = {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        };
        const data = 'client_id=2&client_secret=aW9cf1Oke0p9iPPD9SjMCsFlXd5HfuhrLmjv1QHA&grant_type=password&password='+password+'&username='+email;

        axios.post(url , data , config)
            .then(res => {
                localStorage.setItem('accessToken',res.data.access_token);
                this.props.checkAuth(true);
            })
            .catch( error => {
                this.props.checkAuth(false);
            })

           
    }

    render() { 
        
        /** initialize new array for map */
        let formElementArray = [];
        
        /** push data to formElementArray */
        for ( let key in this.state.inputs){
            formElementArray.push({
                id: key, 
                config: this.state.inputs[key]
            })
        }

        /** draw all inputs */
        const form = formElementArray.map( input => {
            return <div className="form-group has-error" key={ input.id }>
                {/* <label htmlFor={ input.config.name } className="control-label">{ input.config.label }</label> */}
                <input type={ input.config.type } className={'form-control ' + (!input.config.error.valid? 'is-invalid' : null) } value={ input.config.value } name={ input.config.name } onChange={ (e) => this.inputChangeHandler( e , input.config.name  )  } id={ input.config.name } aria-describedby="emailHelp" placeholder={ input.config.placeholder } />
                {
                    !input.config.error.valid ? 
                    <span className="help-block text-danger">
                        { input.config.error.message }
                    </span> : null
                }
            </div>
        })


        return ( 
            <div className="container">
                <div className="row">
                    <form className="Auth" method="post" onSubmit={ this.submitHandler }>
                        <h1>Authorisation</h1>
                        <hr/>
                        { form }  
                        <button className="btn btn-primary"  ref = { dis => this.status = dis }  disabled={this.status}> Submit </button>              
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Auth;