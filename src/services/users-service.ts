import create from './http-service'

export interface User {
  id: number;
  name: string;
  url: string;
  password: string;
  email:string
}



export default create('/users')