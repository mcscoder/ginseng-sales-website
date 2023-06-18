import category from "assets/productData/productCategory";

const dynamicRouteLink = (dict) => {
  const link = {};
  for (const key in dict) {
    link[key] = `/category/${dict[key]}`;
  }
  return link;
};

const routes = {
  home: "/",
  categoryLink: dynamicRouteLink(category),
  productLink: "/product"
};

export default routes;
