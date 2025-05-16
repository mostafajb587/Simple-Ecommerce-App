import {
  FaHeadset,
  FaQuestionCircle,
  FaShippingFast,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import IconDropdown from "./IconDropDown";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
interface props {
  scrollToProducts: () => void;
}

const HeaderIcons = ({ scrollToProducts }: props) => {
  const cart = useCartStore((state) => ({
    items: state.items,
    count: state.count,
  }));
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Call Center */}
      <IconDropdown
        icon={<FaHeadset size={24} className="text-gray-700" />}
        dropdownContent={
          <div className="w-full sm:w-56 space-y-3">
            <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-md p-2 transition-colors">
              <FaShippingFast className="text-gray-600" />
              <span className="text-sm text-gray-700 hover:text-gray-900">
                Shipping and Return
              </span>
            </div>
            <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-md p-2 transition-colors">
              <FaQuestionCircle className="text-gray-600" />
              <span className="text-sm text-gray-700 hover:text-gray-900">
                Help Center
              </span>
            </div>
          </div>
        }
        mobile
      />

      {/* User */}
      <IconDropdown
        icon={<FaUser size={24} className="text-gray-700" />}
        dropdownContent={
          <div className="w-full sm:w-48 space-y-3">
            <Link to="/auth?mode=signin">
              <div className="bg-orange-500 text-white text-center py-2 rounded-md cursor-pointer hover:bg-orange-600 w-50 transition">
                Login
              </div>
            </Link>
            <Link to="/auth?mode=signup">
              <div className="border border-orange-500 text-orange-500 text-center py-2 rounded-md cursor-pointer hover:bg-orange-50 w-50 transition">
                Sign In
              </div>
            </Link>
          </div>
        }
        mobile
      />

      {/* Cart */}
      <IconDropdown
        icon={
          <span className="relative">
            {cart.count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.count}
              </span>
            )}
            <FaShoppingCart size={24} className="text-gray-700" />
          </span>
        }
        dropdownContent={
          <div className="w-full sm:w-72 space-y-4">
            {cart.items.length > 0 ? (
              <>
                <h3 className="font-bold text-lg">Products ({cart.count})</h3>
                <ul className="max-h-60 overflow-y-auto">
                  {cart.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm">{item.product.title}</span>
                      <span className="text-gray-500 text-sm">
                        x{item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cart"
                  className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Complete Purchase
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-700 font-medium">Your cart is empty.</p>
                <p className="text-sm text-gray-600 mb-4">
                  See the latest fashion trends and add your favorites to your
                  cart
                </p>
                <button
                  onClick={() => scrollToProducts()}
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Discover what's new
                </button>
              </>
            )}
          </div>
        }
        mobile
      />
    </div>
  );
};

export default HeaderIcons;
