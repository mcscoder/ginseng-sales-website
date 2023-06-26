export function getLocalStorageData() {
  return JSON.parse(localStorage.getItem("cart-product")) ?? [];
}

export function handleAddProductToCart(productPath) {
  const products = getLocalStorageData();

  if (products.indexOf(productPath) !== -1) {
    alert("This product is already in your cart");
  } else {
    const newProducts = [...products, productPath];
    localStorage.setItem("cart-product", JSON.stringify(newProducts));
    alert("Added to cart");
  }
}

export function handleRemoveProductFromCart(index) {
  const products = getLocalStorageData();

  const updateProducts = [...products];
  updateProducts.splice(index, 1);

  localStorage.setItem("cart-product", JSON.stringify(updateProducts));

  return updateProducts;
}
