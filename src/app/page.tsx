"use client";

import useProductStore from "@/store/product/productStore";
import { ProductType } from "@/types/product.types";
import React, { useEffect } from "react";

function Home() {
  const { loading, products, fetchProducts, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const TruncateText = ({
    text = "Text not provided",
    maxLength,
  }: {
    maxLength: number;
    text: string;
  }) => {
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <span>{truncatedText}</span>;
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <div className="">
              <div className="max-w-60 rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={product.images[1]}
                  alt={product.category}
                />
                <div className="px-6 py-4 font-bold text-xl mb-2">
                  <TruncateText
                    text={product.title}
                    maxLength={20}
                  />
                  <p className="text-gray-700 text-base">
                    <TruncateText text={product?.description} maxLength={8} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
