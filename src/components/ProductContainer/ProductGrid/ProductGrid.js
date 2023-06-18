import { NavLink } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./ProductGrid.module.scss";

const cx = classNames.bind(style);

function CartButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cx("add-to-cart")}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
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

function ProductGrid({ productList = [] }) {
  function StarRating({ rating }) {
    const stars = [];

    let i = 0;
    for (i; i < rating; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    for (i; i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }

    return <>{stars}</>;
  }

  console.log();

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
                    <span className={cx("product-price")}>{item.price} ₫</span>
                  </div>
                  <div className={cx("right")}>
                    <CartButton />
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
