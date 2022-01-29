import React, {FC} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../redux';
import {Iroutes} from './routes';

const PrivateRoute: FC<Iroutes> = ({Component, render, path, reverse, Layout, ...rest}) => {
  const {access} = useSelector(({authentication}: ApplicationState) => authentication)

  if (reverse) {
    return (
      <Route
        {...rest}
        path={path}
        render={props => (!access
          ? render ? render(props) : <Layout {...props} {...rest} ><Component {...props} {...rest} /></Layout>
          : <Redirect {...props} {...rest} to={{pathname: '/', state: {from: props.location}}}/>)}
      />
    );
  } else
    return (
      <Route
        {...rest}
        path={path}
        render={props => (access
          ? render ? render(props) : <Layout {...props} {...rest} ><Component {...props} {...rest} /></Layout>
          : <Redirect {...props} {...rest} to={{pathname: '/spinner', state: {from: props.location}}}/>)}
      />
    );
}

export default PrivateRoute;
