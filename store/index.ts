import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createMiddleware from 'redux-saga';
const sagaMiddleware  = createMiddleware();
import saga from './saga';

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

export default store;