import { useCartStore } from "../store/cartStore";

const ShoppingCart = () => {
  const cart = useCartStore();
  const { removeFromCart, clearCart } = cart;
  return (
    <div className="space-y-6">
      {cart.items.map((item) => (
        <div
          key={item.product.id}
          className="flex items-center justify-between bg-white shadow p-4 rounded-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {item.product.title}
              </h3>
              <p className="text-sm text-gray-600">x{item.quantity}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-sm text-red-500 hover:underline mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-right text-xl font-bold text-green-700">
        Total: ${cart.total.toFixed(2)}
      </div>

      <button
        onClick={clearCart}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default ShoppingCart;
