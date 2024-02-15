import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductsProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavoite = (productID) => {
    setProductsList((currentProdLists) => {
      const prodIndex = currentProdLists.findIndex((p) => p.id === productID);
      const newFavStatus = !currentProdLists[prodIndex].isFavorite;
      const updatedProducts = [...currentProdLists];
      updatedProducts[prodIndex] = {
        ...currentProdLists[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavoite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
