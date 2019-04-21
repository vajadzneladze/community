import React, { PureComponent , Fragment} from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import Content from '../../components/Content/Content';

class Layout extends PureComponent {

    render() { 
        return ( 
            <Fragment>
                <LeftSide />
                <Content />
            </Fragment>
        );
    }
}
 
export default Layout;