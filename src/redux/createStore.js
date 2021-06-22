import { applyMiddleware, createStore } from "redux";

import createSagaMiddle from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const wrapper = createWrapper(() => store);

export default {
  store,
  persistor,
};
