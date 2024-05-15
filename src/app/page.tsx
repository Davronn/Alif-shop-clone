"use client";

import useProductStore from "@/store/product/productStore";
import { ProductType } from "@/types/product.types";
import React, { useEffect } from "react";

function Home() {
  const { loading, products, fetchProducts, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {products.map((product: ProductType , i) => (
        <div key={product.id}>
          <div>
            {i+1} {product.title}$
          </div>
          <div>
            <img className="w-40" src={product.images[1]} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
