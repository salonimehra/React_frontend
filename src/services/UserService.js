import axios from "axios";

const USERS_REST_API_URL="http://localhost:8080/shoppingWebsite/users";

class UserService{
    getUsers(){
        //axios has method get that gets from url
        return axios.get(USERS_REST_API_URL);
    }
}

//export object of class
export default new UserService();