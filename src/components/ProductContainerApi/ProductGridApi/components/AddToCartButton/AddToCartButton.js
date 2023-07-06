import classNames from "classnames/bind";
import style from "./AddToCartButton.module.scss";
import { useState } from "react";
import { handleAddProductToCart } from "config/handleCartProduct";

const cx = classNames.bind(style);

function AddToCartButton({ productPath }) {
  const [isHovered, setIsHovered] = useState(false);
  // const [products, setProducts] = useState();
  return (
    <button
      className={cx("add-to-cart")}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => handleAddProductToCart(productPath)}
    >
      <i
        className={
          isHovered
            ? "fa-solid fa-cart-plus fa-bounce"
            : "fa-solid fa-cart-plus"
        }
      ></i>
    </button>
  );
}
export default AddToCartButton;
