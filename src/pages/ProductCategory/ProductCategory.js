import { useParams } from "react-router-dom";
import { useMemo } from "react";
import categoryData from "assets/productData/categoryData";
import classNames from "classnames/bind";
import style from "./ProductCategory.module.scss";
import ProductContainer from "components/ProductContainer/ProductContainer";

const cx = classNames.bind(style);

function ProductCategory() {
  const { categoryId } = useParams();

  const category = useMemo(() => {
    return categoryData[categoryId];
  }, [categoryId]);

  return (
    <div className={cx("container")}>
      <div className={cx("product-content-wrapper")}>
        <ProductContainer 
          headerTitle={category.title}
          product={category.productList}
        />
      </div>
    </div>
  );
}

export default ProductCategory;
