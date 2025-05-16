import create from './http-service'

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity:number
}



export default create('/products')