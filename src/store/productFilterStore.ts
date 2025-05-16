import { create } from "zustand";
import type { Product } from "../services/Products-sevice";

interface ProductFilterState {
  searchQuery: string;
  selectedCategory: string;
  products: Product[];
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setProducts: (products: Product[]) => void;

  setSearchWithCategory: (query: string, category: string) => void;
}

export const useProductFilterStore = create<ProductFilterState>((set) => ({
  searchQuery: "",
  selectedCategory: "All",
  products: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setProducts: (products) => set({ products }),
  
  setSearchWithCategory: (query, category) => set({ searchQuery: query, selectedCategory: category }),
}));
