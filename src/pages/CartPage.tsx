import { useNavigate } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const navigate = useNavigate();
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty.</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Go Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
}

export default CartPage;
