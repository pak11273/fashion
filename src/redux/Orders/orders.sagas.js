import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  handleGetOrder,
  handleGetUserOrderHistory,
  handleSaveOrder,
} from "./orders.helpers";
import { setOrderDetails, setUserOrderHistory } from "./orders.actions";

import { clearCart } from "./../Cart/cart.actions";
import { firebase } from "./../../firebase/init";
import ordersTypes from "./orders.types";

export function* getUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetUserOrderHistory(payload);
    yield put(setUserOrderHistory(history));
  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(
    ordersTypes.GET_USER_ORDER_HISTORY_START,
    getUserOrderHistory
  );
}

export function* saveOrder({ payload }) {
  try {
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      orderUserID: firebase.auth().currentUser.uid,
      orderCreatedDate: timestamps,
    });
    yield put(clearCart());
  } catch (err) {
    // console.log(err);
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getOrderDetails({ payload }) {
  try {
    const order = yield handleGetOrder(payload);
    console.log(order);
    yield put(setOrderDetails(order));
  } catch (err) {
    // console.log(err);
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
  ]);
}
