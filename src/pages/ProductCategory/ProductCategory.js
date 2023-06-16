import { useParams } from "react-router-dom";
import { useMemo } from "react";
import productData from "assets/productData/productData";
import classNames from "classnames/bind";
import style from "./ProductCategory.module.scss";
import ProductContainer from "components/ProductContainer/ProductContainer";

const cx = classNames.bind(style);

function ProductCategory() {
  const { categoryId } = useParams();

  const categoryData = useMemo(() => {
    return productData[categoryId];
  }, [categoryId]);

  return (
    <div className={cx("container")}>
      <div className={cx("product-content-wrapper")}>
        <ProductContainer 
          headerTitle={categoryData.title}
          product={categoryData.information}
        />
      </div>
    </div>
  );
}

export default ProductCategory;
