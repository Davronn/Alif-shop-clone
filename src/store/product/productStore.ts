import { ProductStoreType } from "@/types/product.types";
import axios from "axios";
import { create } from "zustand";

const productStore = (set: any) => ({
  loading: false,
  products: [],
  error: null,
  fetchProducts: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res.data;
      set(() => ({
        products: data.products,
      }));
    } catch (err) {
      set(() => ({
        error: (err as Error).message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },
});

const useProductStore = create<ProductStoreType>(productStore);

export default useProductStore;
