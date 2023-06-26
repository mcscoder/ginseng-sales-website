import classNames from "classnames/bind";
import style from "./ProductOverview.module.scss";
import Carousel from "components/Carousel/Carousel";
import CountButton from "./components/CountButton/CountButton";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";

const cx = classNames.bind(style);

function ProductOverView({
  productPath,
  imgPaths = [],
  productName,
  productPrice,
  quantitySold,
  descriptions = [],
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("img-content")}>
          <Carousel>
            {imgPaths.map((path, index) => {
              return (
                <div key={index} className={cx("carousel-item")}>
                  <img src={path} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className={cx("text-content")}>
          <div className={cx("product-name")}>
            <h1>{productName}</h1>
          </div>

          <div className={cx("separator")}></div>

          <div className={cx("price")}>
            <span>{productPrice.toLocaleString("en-US")} ₫</span>
          </div>

          <div className={cx("sold-quantity")}>
            <span>đã bán: {quantitySold}</span>
          </div>

          <div className={cx("description")}>
            <ul>
              {descriptions.map((desc, index) => {
                return <li key={index}>{desc}</li>;
              })}
            </ul>
          </div>

          <div className={cx("shopping")}>
            <div className={cx("tip")}>
              <span>
                {/* <i class="fa-solid fa-check fa-spin"></i> */}
                <i className="fa-solid fa-hand-middle-finger fa-spin"></i>
                Bạn có biết? càng mua nhiều càng được giảm, lại còn freeship!
              </span>
            </div>
            <div className={cx("shopping-action")}>
              <div className={cx("quantity-buying")}>
                <CountButton />
              </div>
              <div className={cx("add-to-cart")}>
                <AddToCartButton productPath={productPath} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverView;
