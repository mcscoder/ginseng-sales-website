import classNames from "classnames/bind";
import style from "./ProductContainer.module.scss";
import ProductGrid from "./ProductGridApi/ProductGrid";

const cx = classNames.bind(style);

function ProductContainer({ name, products }) {
  return (
    <div className={cx("product-container")}>
      <div className={cx("title-container")}>
        <span className={cx("title-text")}>{name}</span>
      </div>

      <ProductGrid productList={products} categoryName={name} />
    </div>
  );
}

export default ProductContainer;
