import { FaShoppingCart, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import type { Product } from "../services/Products-sevice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const ProductList = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg w-72 flex-shrink-0 flex flex-col transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover effects */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-500" />
          )}
        </button>

        {/* Free shipping badge */}
        <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Free Shipping
        </div>
      </div>

      {/* Product info and button container */}
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              <Link to={"/products/" + product.id}>{product.title}</Link>
            </h3>
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">(24 reviews)</span>
          </div>
        </div>

        {/* Add to cart button sticks to bottom */}
        <button
          onClick={() => {
            console.log("Adding to cart:", product);
            addToCart(product);
          }}
          className={`mt-auto flex items-center justify-center px-4 py-3 rounded-lg w-full transition-colors ${
            isHovered ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
          }`}
        >
          <FaShoppingCart className="mr-2" />
          <span className="font-medium">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
