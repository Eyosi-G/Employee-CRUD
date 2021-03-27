import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root_reducer'
import rootSaga from './root_sage';
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];
const store = createStore(rootReducer,{},applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga);
export type DispatchType = typeof store.dispatch
export default store;