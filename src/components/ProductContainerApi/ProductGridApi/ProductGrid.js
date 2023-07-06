import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./ProductGrid.module.scss";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";
import StarRating from "./components/StarRating/StarRating";

import convertVietnameseText from "components/ConvertVietnameseText/convertVietnameseText";

const cx = classNames.bind(style);

function ProductGrid({ productList = [], categoryName }) {
  return (
    <div className={cx("product-section")}>
      {productList.map((product, index) => {
        return (
          <div key={index} className={cx("flex-col")}>
            <div className={cx("product-item")}>
              <div className={cx("product-image")}>
                <NavLink to={"/product/" + convertVietnameseText(product.name)}> 
                  <img src={"http://localhost:8080/api/v2/product/image/" + product.images[0].path} />
                </NavLink>
              </div>
              <div className={cx("product-description")}>
                <div className={cx("first-description")}>
                  <div className={cx("text-container")}>
                    <span className={cx("category")}>{categoryName}</span>
                    <NavLink
                      to={"/product/" + convertVietnameseText(product.name)}
                      className={cx("product-name")}
                    >
                      {product.name}
                    </NavLink>
                  </div>
                  <div className={cx("separator")}></div>
                </div>
                <div className={cx("second-description")}>
                  <div className={cx("left")}>
                    <span className={cx("quantity-sold")}>
                      ĐÃ BÁN: {product.quantitySold}
                    </span>
                    <div className={cx("product-rating")}>
                      <StarRating rating={product.rating} />
                    </div>
                    <span className={cx("product-price")}>
                      {product.price.toLocaleString("en-US")} ₫
                    </span>
                  </div>
                  <div className={cx("right")}>
                    <AddToCartButton productPath={"/"} />
                    {/* <AddToCartButton productPath={product.productPath} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
