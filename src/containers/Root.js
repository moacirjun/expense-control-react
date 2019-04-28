import React from "react";
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";
import Header from '../components/layout/Header';
import LastsExpenses from './LastsExpenses';
import CreateExpense from './CreateExpense';

const Root = ({store}) => (
    <Provider store={store}>
    
        <Header></Header>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Route exact path="/" component={LastsExpenses}/>
                    <Route path="/create_expense/" component={CreateExpense}/>
                </div>
            </div>
        </div>

    </Provider>
);

export default withRouter(connect()(Root));