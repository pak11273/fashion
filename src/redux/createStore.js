import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddle from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const wrapper = createWrapper(() => store);

export default {
  store,
  persistor,
};
