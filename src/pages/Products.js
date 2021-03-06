import React from "react";
import ProductsType1 from "../container/ProductType1";
import ProductsType2 from "../container/ProductType2";
import ProductsType3 from "../container/ProductType3";

const Products = () => {
  return (
    <div>
      <h3>Products</h3>
      <h4 className="text-center">Igneous Rocks</h4>
      <ProductsType1 />
      <hr />
      <h4 className="text-center">Sedimentary Rocks</h4>
      <ProductsType2 />
      <hr />
      <h4 className="text-center">Metamorphic Rock</h4>
      <ProductsType3 />
    </div>
  );
};

export default Products;
