import reactotron from './config/reactotron';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from './middlewares/Api'
import rootReducer from './reducers/index'


export default createStore(
  rootReducer,
  compose(applyMiddleware(thunk, api), reactotron.createEnhancer())
);