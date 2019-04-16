import React, { Component } from "react";
import {Route} from "react-router-dom";
import App from "../App";
import { Provider } from 'react-redux';

const Root = ({store}) => (
    <Provider store={store}>
        <Route path="/" component={App}/>
    </Provider>
);

export default Root;