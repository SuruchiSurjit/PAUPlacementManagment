import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isLogin } from '../utils/utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
            isLogin() ?
            <Route {...rest} render={props => (
                <Component {...props} />
            )} />
            : <Redirect to="/" />
    );
};

export default withRouter(PrivateRoute);