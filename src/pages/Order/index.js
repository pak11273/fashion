import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderDetails from "./../../components/OrderDetails";
import { getOrderDetailsStart } from "./../../redux/Orders/orders.actions";
import { useRouter } from "next/router";

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

const Order = () => {
  const router = useRouter();
  const { orderID } = router.query;
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, []);

  return (
    <div>
      <h1>Order ID: #{orderID}</h1>

      <OrderDetails order={orderDetails} />

      <h3>Total: {orderTotal}</h3>
    </div>
  );
};

export default Order;
