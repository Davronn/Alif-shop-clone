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
      const res = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
      const data = await res.data;
      set(() => ({
        products: data,
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

const useProductStore = create(productStore);

export default useProductStore;
