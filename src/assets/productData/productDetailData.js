import categoryData from "./categoryData";

const productDetailData = () => {
  const data = {};
  // "[product-link]": "[data]"

  for (const key in categoryData) {
    categoryData[key].productList.forEach((item) => {
      data[item.productPath] = item;
    });
  }

  return data;
};

export default productDetailData;
