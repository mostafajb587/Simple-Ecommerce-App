interface props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const CategorySelector = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: props) => {
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
            ${
              selectedCategory === cat
                ? "bg-orange-400 text-black"
                : "bg-white text-gray-800 hover:bg-orange-300"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
