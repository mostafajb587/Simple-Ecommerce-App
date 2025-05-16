import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import ProductsSevice, { type Product } from "../services/Products-sevice";
import { useProductFilterStore } from "../store/productFilterStore";

const useProducts = () => {
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const setProducts = useProductFilterStore((state) => state.setProducts);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = ProductsSevice.getAll<Product>();

    request
      .then((res) => {
        setLoading(false);
        setProducts(res.data); 
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [setProducts]);

  return { Error, Loading };
};

export default useProducts;
