/*import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
}

export default new TutorialDataService();
*/
import axios from "axios";
import authHeader from "./AuthHeader";

const USERS_REST_API_URL="http://localhost:8080/api/";
const PRODUCTS_IN_CART="http://localhost:8085/placed-order/api/v1/placeorder";
class ProductService{
  getPublicContent(){
       const GET_USERS_URL= USERS_REST_API_URL+"/products";
        //axios has method get that gets from url
        return axios.get(GET_USERS_URL);
    }
    getProductsInCart(productId,quantity){
      var URL=PRODUCTS_IN_CART + "/"+productId+"/"+quantity
      console.log(axios.post(URL,null ,{ headers: authHeader() }));
      return axios.post(URL,null ,{ headers: authHeader() });
    }
    
}

//export object of class
export default new ProductService();