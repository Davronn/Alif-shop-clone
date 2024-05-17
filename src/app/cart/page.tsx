"use client";

import React, { useEffect, useState } from "react";
import { CartProductType, ProductType } from "@/types/product.types";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    }
  }, []);

  const defaultImg = "https://i.imgur.com/R2PN9Wq.jpeg";

  const removeFromCart = (productId: number) => {
    const updatedProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {cartProducts.map((product: CartProductType) => (
            <div
              key={product.id}
              className="max-w-xs w-full border rounded shadow-lg p-4"
            >
              <img
                className="w-full h-48 object-cover mb-4"
                src={product.images.length > 0 ? product.images[0] : defaultImg}
                alt={product.title}
              />
              <div className="mb-4">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="mt-2 text-gray-700">Price: ${product.price}</p>
                <p className="mt-2 text-gray-700">
                  Quantity: {product.quantity}
                </p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
