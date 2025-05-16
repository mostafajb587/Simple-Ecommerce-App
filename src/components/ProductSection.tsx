import { useMemo } from "react";
import useProducts from "../hooks/useProducts";
import usePagination from "../hooks/usePagination";
import ProcductCardSkeleton from "./ProductCardSkeleton";
import CategorySelector from "./CategorySelector";
import ProductList from "./ProductList";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useProductFilterStore } from "../store/productFilterStore";

const ProductSection = () => {
  const { Error, Loading } = useProducts();
  const products = useProductFilterStore((state) => state.products);
  const selectedCategory = useProductFilterStore(
    (state) => state.selectedCategory
  );
  const setSelectedCategory = useProductFilterStore(
    (state) => state.setSelectedCategory
  );
  const searchQuery = useProductFilterStore((state) => state.searchQuery);

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    if (searchQuery.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [products, selectedCategory, searchQuery]);

  const {
    currentItems: currentProducts,
    currentIndex,
    totalPages,
    handleNext,
    handlePrevious,
  } = usePagination(filteredProducts, 4);

  if (Error)
    return (
      <div className="w-full h-40 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center rounded-xl shadow-lg">
        <h1 className="text-white font-bold text-lg">{Error}</h1>
      </div>
    );

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Products
          </h2>
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="relative group">
          {currentProducts.length > 0 && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous products"
              >
                <FiChevronLeft className="text-gray-700 text-xl" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === totalPages - 1}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next products"
              >
                <FiChevronRight className="text-gray-700 text-xl" />
              </button>
            </>
          )}

          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto pb-8 -mb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex space-x-6 px-1">
                {Loading
                  ? Array(4)
                      .fill(null)
                      .map((_, index) => <ProcductCardSkeleton key={index} />)
                  : currentProducts.map((product) => (
                      <ProductList key={product.id} product={product} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
