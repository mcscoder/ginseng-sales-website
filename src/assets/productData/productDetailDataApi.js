import categoryDataApi from "./categoryDataApi";
import convertVietnameseText from "components/ConvertVietnameseText/convertVietnameseText";

const productDetailData = async () => {
  const data = {};

  const categoryData = await categoryDataApi();

  for (const key in categoryData) {
    categoryData[key].products.forEach((product) => {
      data[convertVietnameseText(product.name)] = product;
    });
  }
  
  return data;
};

export default productDetailData;
