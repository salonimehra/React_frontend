import axios from "axios";
import authHeader from "./AuthHeader";

const USERS_REST_API_URL="http://localhost:8080/api/";
const PRODUCTS_IN_CART="http://localhost:8085/placed-order/api/v1/";

class ProductService{
  getPublicContent(){
       const GET_USERS_URL= USERS_REST_API_URL+"/products";
        //axios has method get that gets from url
        return axios.get(GET_USERS_URL);
    }
    getProductsInCart(productId,quantity){
      var URL=PRODUCTS_IN_CART + "placeorder/"+productId+"/"+quantity
      //console.log(axios.post(URL,null ,{ headers: authHeader() }));
      return axios.post(URL,null ,{ headers: authHeader() });
    }
    getAllProducts(){
      var URL=PRODUCTS_IN_CART + "/orders"
      //console.log(axios.post(URL,null ,{ headers: authHeader() }));
      return axios.get(URL,{ headers: authHeader() });
    }
}

//export object of class
export default new ProductService();