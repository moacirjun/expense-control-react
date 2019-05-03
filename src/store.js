import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reactotron from './config/reactotron';
import api from './middlewares/Api';
import rootReducer from './reducers/index';
import sagas from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [api, thunk, sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    reactotron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(
  rootReducer,
  composer,
);

sagaMiddleware.run(sagas);

export default store;
