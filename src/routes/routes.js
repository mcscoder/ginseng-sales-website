import Home from "pages/Home/Home";
// import ProductCategory from "pages/ProductCategory/ProductCategory";
// import ProductDetail from "pages/ProductDetail/ProductDetail";
import ProductCategory from "pages/ProductCategoryApi/ProductCategory";
import ProductDetail from "pages/ProductDetailApi/ProductDetail";
import routes from "config/routes";

export const publicRoutes = [
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: "/category/:categoryId",
    element: <ProductCategory />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
];
