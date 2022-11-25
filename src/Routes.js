import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';
import MainLayout from './layouts/Main';

import {
    BlogPost
} from './pages';

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                component={BlogPost}
                exact
                layout={MainLayout}
                path="/"
            />
        </Switch>
    );
};

export default Routes;
