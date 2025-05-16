import apiClient from "./api-client";


class HttpService {
  private endpoint: string;
  
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll=<T>()=> {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, { 
      signal: controller.signal 
    });
    return { request, cancel: () => controller.abort() };
  }

  get=<T>(id: number)=> {
    const controller = new AbortController();
    const request = apiClient.get<T>(
      `${this.endpoint}/${id}`, 
      { signal: controller.signal }
    );
    return { request, cancel: () => controller.abort() };
  }
}
const create =(endpoint:string)=> new HttpService(endpoint)

export default create;