import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./ProductGrid.module.scss";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";
import StarRating from "./components/StarRating/StarRating";

const cx = classNames.bind(style);

function ProductGrid({ productList = [] }) {
  return (
    <div className={cx("product-section")}>
      {productList.map((item, index) => {
        return (
          <div key={index} className={cx("flex-col")}>
            <div className={cx("product-item")}>
              <div className={cx("product-image")}>
                <NavLink to={item.productLinkAddress}>
                  <img src={item.imgPaths[0]} />
                </NavLink>
              </div>
              <div className={cx("product-description")}>
                <div className={cx("first-description")}>
                  <div className={cx("text-container")}>
                    <span className={cx("category")}>{item.category}</span>
                    <NavLink
                      to={item.productLinkAddress}
                      className={cx("product-name")}
                    >
                      {item.productName}
                    </NavLink>
                  </div>
                  <div className={cx("separator")}></div>
                </div>
                <div className={cx("second-description")}>
                  <div className={cx("left")}>
                    <span className={cx("quantity-sold")}>
                      ĐÃ BÁN: {item.quantitySold}
                    </span>
                    <div className={cx("product-rating")}>
                      <StarRating rating={item.rating} />
                    </div>
                    <span className={cx("product-price")}>
                      {item.price.toLocaleString("en-US")} ₫
                    </span>
                  </div>
                  <div className={cx("right")}>
                    <AddToCartButton productPath={item.productPath} />
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
