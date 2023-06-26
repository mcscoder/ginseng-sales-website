import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./ProductInCart.module.scss";
import productDetailData from "assets/productData/productDetailData";

const cx = classNames.bind(style);

function ProductInCart({ products = [], handleRemoveProduct = () => {} }) {
  const productData = productDetailData();

  return (
    <div className={cx("container")}>
      {products.map((productPath, index) => {
        const product = productData[productPath];
        return (
          <div key={index} className={cx("product-container")}>
            <div className={cx("product-image")}>
              <NavLink to={product.productLinkAddress}>
                <img
                  // src={require("assets/images/product/Combo-phu-quy-600x598.jpg")}
                  src={product.imgPaths[0]}
                />
              </NavLink>
            </div>
            <div className={cx("shopping-information")}>
              <div className={cx("product-name")}>
                <NavLink>{product.productName}</NavLink>
              </div>

              <div className={cx("purchase-quantity")}>
                <span className={cx("quantity")}>1 × </span>
                <span className={cx("price")}>{product.price.toLocaleString("en-US")} ₫</span>
              </div>
            </div>

            <div className={cx("remove-product-btn")}>
              <button className={cx("remove-btn")} onClick={() => {
                handleRemoveProduct(index)
              }}>
                <i className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductInCart;
