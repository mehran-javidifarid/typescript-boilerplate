import React from 'react';
import PrivateRoute from "./PrivateRoute";
import routes from "./routes"
import {Switch, BrowserRouter as Router} from "react-router-dom";

const Routes: React.FC = () => (
    <Router>
        <Switch>
            {routes?.map<{ key: any }>((key, i) => {
                    return <PrivateRoute
                        header={key.header}
                        title={key.title}
                        footer={key.footer}
                        wrapperClassName={key.wrapperClassName}
                        key={i}
                        path={key.path}
                        reverse={key.reverse}
                        exact={key.exact}
                        Layout={key.Layout}
                        filterButton={key.filterButton}
                        backLink={key.backLink}
                        Component={key.Component}
                    />
                }
            )}
        </Switch>
    </Router>
);

export default Routes




