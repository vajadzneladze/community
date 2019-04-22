import React, { PureComponent , Fragment} from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import Content from '../../components/Content/Content';

class Layout extends PureComponent {

    logout = () => {
        this.props.logOut();
    }

    render() { 
        return ( 
            <Fragment>
                <LeftSide logout = { this.logout }/>
                <Content />
            </Fragment>
        );
    }
}
 
export default Layout;