import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./ProductCategory.module.scss";

import ProductContainer from "components/ProductContainerApi/ProductContainer";
import categoryDataApi from "assets/productData/categoryDataApi";

const cx = classNames.bind(style);

function ProductCategory() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await categoryDataApi();
      setCategory(data[categoryId]);
    };
    fetchData();
  }, [categoryId]);

  if (category === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("container")}>
      <div className={cx("product-content-wrapper")}>
        <ProductContainer name={category.name} products={category.products} />
      </div>
    </div>
  );
}

export default ProductCategory;
