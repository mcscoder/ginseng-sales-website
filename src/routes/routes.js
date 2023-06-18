import Home from "pages/Home/Home";
import ProductCategory from "pages/ProductCategory/ProductCategory";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:categoryId",
    element: <ProductCategory />,
  },
];
