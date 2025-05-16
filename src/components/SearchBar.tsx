import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useProductFilterStore } from "../store/productFilterStore";

const SearchBar = () => {
  const titleref = useRef<HTMLInputElement>(null);
  const setSearchWithCategory = useProductFilterStore(
    (state) => state.setSearchWithCategory
  );
  const allProducts = useProductFilterStore((state) => state.products);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (titleref.current) {
          const query = titleref.current.value.trim();

          const matchedProduct = allProducts.find((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
          );

          const category = matchedProduct ? matchedProduct.category : "All";

          setSearchWithCategory(query, category);
        }
      }}
      className="relative max-w-xl mb-8 animate-fadeIn delay-200"
    >
      <input
        ref={titleref}
        type="text"
        placeholder="search for a product..."
        className="w-full py-4 px-6 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 pr-12"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full  transition-colors">
        <FaSearch />
      </button>
    </form>
  );
};
export default SearchBar;
