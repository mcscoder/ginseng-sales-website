import classNames from "classnames/bind";
import style from "./AddToCartButton.module.scss";
import { handleAddProductToCart } from "config/handleCartProduct";

const cx = classNames.bind(style);

function AddToCartButton({ productPath }) {
  return (
    <button
      className={cx("add-to-cart-btn")}
      onClick={() => handleAddProductToCart(productPath)}
    >
      <span>thêm vào giỏ hàng</span>
    </button>
  );
}

export default AddToCartButton;
