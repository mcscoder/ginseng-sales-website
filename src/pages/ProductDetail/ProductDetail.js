import { useParams } from "react-router-dom";
import { useMemo } from "react";
import productDetailData from "assets/productData/productDetailData";
import classNames from "classnames/bind";
import style from "./ProductDetail.module.scss";
import ProductOverView from "./components/ProductOverview/ProductOverview";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import SimilarProduct from "./components/SimilarProduct/SimilarProduct";

const cx = classNames.bind(style);

function ProductDetail() {
  const { productId } = useParams();

  const product = useMemo(() => {
    return productDetailData();
  }, []);

  const displayProduct = useMemo(() => {
    return product[productId];
  }, [productId]);

  return (
    <div className={cx("container")}>
      <ProductOverView
        imgPaths={displayProduct.imgPaths}
        productName={displayProduct.productName}
        productPrice={displayProduct.price}
        quantitySold={displayProduct.quantitySold}
        descriptions={displayProduct.descriptions}
      />
      <ProductDescription details={displayProduct.details} />
      <SimilarProduct />
    </div>
  );
}

export default ProductDetail;
