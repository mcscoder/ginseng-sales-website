import category from "assets/productData/productCategory";

const categoryLink = () => {
  const link = {};
  for (const key in category) {
    link[key] = `/category/${category[key]}`;
  }
  return link;
};

const routes = {
  home: "/",
  categoryLink: categoryLink(),
};

export default routes;
