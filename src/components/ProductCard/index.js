import React, { useEffect } from "react";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/products.actions";
import { useDispatch, useSelector } from "react-redux";

import Button from "./../forms/Button";
import { addProduct } from "./../../redux/Cart/cart.actions";
import { useRouter } from "next/router";

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { productID } = router.query;
  const { product } = useSelector(mapState);

  const { productThumbnail, productName, productPrice, productDesc } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    router.push("/cart");
  };

  const configAddToCartBtn = {
    type: "button",
  };

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>${productPrice}</span>
          </li>
          <li>
            <div className="addToCart">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
