import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./components/ProductsDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />, // ✅ أضفنا صفحة المصادقة
      },
    ],
  },
]);

export default router;
