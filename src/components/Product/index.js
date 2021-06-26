import Button from "../forms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addProduct } from "../../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Product = (product) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { documentID, productThumbnail, productName, productPrice } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCartBtn = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    router.push("/cart");
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link href={`/product/${documentID}`}>
          <div style={{ maxWidth: "480px", textAlign: "center" }}>
            <Image
              alt={productName}
              src={productThumbnail}
              layout="responsive"
              height={300}
              width={300}
              objectFit="cover"
              quality={100}
            />
          </div>
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link href={`/product/${documentID}`}>{productName}</Link>
            </span>
          </li>
          <li>
            <span className="price">${productPrice}</span>
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
        </ul>
      </div>
    </div>
  );
};

export default Product;
