import classNames from "classnames/bind";
import style from "./CartSidebar.module.scss";
import { layouts } from "../../config";
import { useEffect, useMemo, useState } from "react";
import ProductInCart from "./components/ProductInCart/ProductInCart";
import {
  getLocalStorageData,
  handleRemoveProductFromCart,
} from "config/handleCartProduct";

const cx = classNames.bind(style);
const id = layouts.cart_sidebar;

function CartSidebar({ layout, closeNavSidebar = () => {} }) {
  const [initialDisplay, setInitialDisplay] = useState(false);
  // false: none, true otherwise

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (layout === id) setInitialDisplay(true);
    setProducts(getLocalStorageData());
  }, [layout]);

  function handleRemoveProduct(index) {
    setProducts(handleRemoveProductFromCart(index));
  }

  return (
    <div
      className={cx(
        "sidebar-container",
        layout === id ? "slide-right-to-left" : "slide-left-to-right"
      )}
      style={initialDisplay ? { display: "block" } : {}}
    >
      <div className={cx("sidebar-content")}>
        <button onClick={closeNavSidebar} className={cx("close-btn")}>
          <i className="fa-sharp fa-solid fa-xmark"></i>
        </button>

        <span className={cx("top-content-text")}>giỏ hàng</span>

        <div className={cx("separator")}></div>

        <div className={cx("bottom-content")}>
          {products.length === 0 ? (
            <span className={cx("empty-notify")}>
              Chưa có sản phẩm trong giỏ hàng
            </span>
          ) : (
            <ProductInCart
              products={products}
              handleRemoveProduct={handleRemoveProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
