import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { FaStar, FaChevronLeft } from "react-icons/fa";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id)
    return (
      <div className="p-8 text-center text-red-500 text-xl">
        Invalid product ID
      </div>
    );
  const { Product, Error, Loading } = useProduct(parseInt(id));

  if (Loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (Error)
    return <div className="p-8 text-center text-red-500 text-xl">{Error}</div>;
  if (!Product)
    return (
      <div className="p-8 text-center text-gray-500 text-xl">
        Product not found
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <FaChevronLeft className="mr-2" />
        Back to Products
      </button>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative pt-[100%]">
            <img
              src={Product.image}
              alt={Product.title}
              className="absolute top-0 left-0 w-full h-full object-contain p-8"
            />
          </div>
          <div className="p-4 flex gap-2 overflow-x-auto">
            {/* Thumbnails (you can add more if available) */}
            <button className="flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden">
              <img
                src={Product.image}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">
              {Product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-gray-500">(24 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-gray-900">
            ${Product.price.toFixed(2)}
          </p>

          {/* Description */}
          <div className="prose max-w-none text-gray-700">
            <p>{Product.description}</p>
          </div>

          {/* Quantity Selector */}

          {/* Product Meta */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <h3 className="font-medium text-gray-900">Category</h3>
              <p className="text-gray-600">{Product.category}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">SKU</h3>
              <p className="text-gray-600">
                #{Product.id.toString().padStart(4, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="px-6 py-4 font-medium text-blue-600 border-b-2 border-blue-500">
              Description
            </button>
            <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
              Specifications
            </button>
            <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
              Reviews
            </button>
            <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
              Shipping & Returns
            </button>
          </nav>
        </div>
        <div className="p-8">
          <p className="text-gray-700">{Product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
