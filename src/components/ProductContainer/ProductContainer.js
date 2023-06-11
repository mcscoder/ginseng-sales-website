import classNames from "classnames/bind";
import style from "./ProductContainer.module.scss";
import ProductGrid from "./ProductGrid/ProductGrid";

const cx = classNames.bind(style);

function ProductContainer({ headerTitle, product }) {
  return (
    <div className={cx("product-container")}>
      <div className={cx("title-container")}>
        <span className={cx("title-text")}>{headerTitle}</span>
      </div>

      <ProductGrid
        productList={product}
      />
    </div>
  );
}

export default ProductContainer;
