import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import style from "./ProductDetail.module.scss";
import ProductOverView from "./components/ProductOverview/ProductOverview";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import SimilarProduct from "./components/SimilarProduct/SimilarProduct";

import productDetailData from "assets/productData/productDetailDataApi";

const cx = classNames.bind(style);

function ProductDetail() {
  const { productId } = useParams();
  const [displayProduct, setDisplayProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await productDetailData();
      setDisplayProduct(productData[productId]);
    };

    fetchData();
  }, [productId]);

  
  if (displayProduct === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("container")}>
      <ProductOverView
        images={displayProduct.images}
        productName={displayProduct.name}
        productPrice={displayProduct.price}
        quantitySold={displayProduct.quantitySold}
        descriptions={displayProduct.description}
      />
      <ProductDescription details={displayProduct.details} />
      <SimilarProduct />
    </div>
  );
}


export default ProductDetail;
