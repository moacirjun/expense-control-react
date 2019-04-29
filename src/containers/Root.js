import React from 'react';
import { Provider, connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../components/layout/Header';
import LastsExpenses from './LastsExpenses';
import CreateExpense from './CreateExpense';

const Root = ({ store }) => (
  <Provider store={store}>

    <Header />

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Route exact path="/" component={LastsExpenses} />
          <Route path="/create_expense/" component={CreateExpense} />
        </div>
      </div>
    </div>

  </Provider>
);

Root.propTypes = {
  store: propTypes.object.isRequired,
};

export default withRouter(connect()(Root));
