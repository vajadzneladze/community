import React, { PureComponent , Fragment} from 'react';

class Layout extends PureComponent {

    render() { 
        return ( 
            <Fragment >
                <h1>Home page</h1>
                <button onClick = { this.props.logOut }>Log out</button>
            </Fragment>
        );
    }
}
 
export default Layout;