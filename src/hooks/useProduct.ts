import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import  type { Product } from "../services/Products-sevice";
import ProductsSevice from "../services/Products-sevice";

const useProduct = (id?: number) => {
  const [Product, setProduct] = useState<Product>();
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
   
    if (!id) return;

    setLoading(true);
    const { request, cancel } = ProductsSevice.get<Product>(id); 
    
    request
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [id]);
  return { Product, Error, Loading };
};

export default useProduct;
