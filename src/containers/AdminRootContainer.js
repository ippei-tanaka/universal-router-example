import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminRoot from '@/components/AdminRoot';

class AdminRootContainer extends Component {

    render ()
    {
        const {children} = this.props;
        const isAuthorized = Math.random() > 0.5;
        return (
            <AdminRoot
                isAuthorized={isAuthorized}
                children={children}
            />
        );
    }

}

export default connect(null, null)(AdminRootContainer);