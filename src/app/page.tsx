"use client";

import EmblaCarousel from "@/components/courusel";
import useProductStore from "@/store/product/productStore";
import { ProductType } from "@/types/product.types";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";

function Home({ searchQuery }: { searchQuery: string }) {
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

  const defaultImg = "https://i.imgur.com/R2PN9Wq.jpeg";

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585314614250-d213876625e1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557063673-0493e05da49f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="">
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-wrap justify-center gap-5 container">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <div className="">
              <div className="max-w-60 h-[488px] rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={
                    product.images.length > 2 ? product.images[1] : defaultImg
                  }
                  alt={product.category}
                />
                <div className="px-6 py-4 font-bold text-xl mb-2">
                  <TruncateText text={product.title} maxLength={20} />
                  <p className="text-gray-700 text-base">
                    <TruncateText text={product?.description} maxLength={24} />
                  </p>
                  <p className="mt-3 text-gray-700 text-md">
                    Price: {product.price}$
                  </p>
                </div>
                <button className=" bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-3 rounded-full ml-4 mb-6">
                  <span className="text-sm">Add to card</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
