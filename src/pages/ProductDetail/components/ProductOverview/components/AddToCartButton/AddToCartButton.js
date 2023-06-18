import classNames from "classnames/bind";
import style from "./AddToCartButton.module.scss";

const cx = classNames.bind(style);

function AddToCartButton() {
  return (
    <button className={cx("add-to-cart-btn")}>
      <span>thêm vào giỏ hàng</span>
    </button>
  );
}

export default AddToCartButton;
