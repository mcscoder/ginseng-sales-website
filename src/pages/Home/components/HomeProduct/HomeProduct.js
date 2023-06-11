import classNames from "classnames/bind";
import style from "./HomeProduct.module.scss";
import {
  promotionProduct,
  featuredProducts,
} from "pages/Home/config/productList";
import ProductContainer from "components/ProductContainer/ProductContainer";

const cx = classNames.bind(style);

function HomeProduct() {
  return (
    <div className={cx("container")}>
      <ProductContainer
        headerTitle={"khuyến mãi đặc biệt: 01/09/1939 - now"}
        product={promotionProduct}
      />
      <ProductContainer
        headerTitle={"sản phẩm nổi bật"}
        product={featuredProducts}
      />
    </div>
  );
}

export default HomeProduct;
