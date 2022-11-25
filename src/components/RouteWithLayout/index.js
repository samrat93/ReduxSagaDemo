import React from 'react';
import { Route } from 'react-router-dom'; // Library to manage react routes
import PropTypes from 'prop-types'; //Library to check props data types. Ex: String, array etc..

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props; // get data(objects) from props
  console.log('Router with layout : ', props)
  return (
    <Route
      {...rest}
      render={matchProps => (
        /* Layout component sets the layout View for page and
        it has Children Component that we pass dynamically */
        <Layout>
          {/* matchProps holds the route parameters that are passed to Custom Components*/}
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
