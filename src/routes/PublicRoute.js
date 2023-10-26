import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    console.log('public route 1')
    console.log(rest)
    console.log(restricted)
    return (
        <Route {...rest} render={props => (
           <Component {...props} />
              //checkIfLoggedIn(Component, restricted, props)
        )} />
    );
};

export default PublicRoute;