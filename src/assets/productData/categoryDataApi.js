import convertVietnameseText from "components/ConvertVietnameseText/convertVietnameseText";

async function categoryDataApi() {
  const response = await fetch(
    "http://localhost:8080/api/v2/product/getAllCategory"
  );
  const data = await response.json();

  const categoryData = {};
  data.forEach((category) => {
    categoryData[convertVietnameseText(category.name)] = category;
  });

  return categoryData;
}

export default categoryDataApi;
